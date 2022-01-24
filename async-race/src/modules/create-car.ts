import * as fetchCar from "./fetch-API";
import * as carTypes from "./data-car/data-Icars";
import { Car } from "./data-car/data-classCar";
import { carIMG } from "./data-car/data-svgCar";
import { garage } from "./DOM/garage-page";
import { winners, TableLine } from "./DOM/winners-page";
import { PengingInputs, DrawResult, StartAnimation, StopAnimation, ResetAnimation, isEmpty } from "./additional-func";

const PATH = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
  }

export const STATUS = {
  started: 'started',
  drive: 'drive',
  stopped: 'stopped',
}

const PAGE_LIMIT = {
  garage: 7,
  winners: 10,
};

export const carArray: carTypes.Cars = [];
//export const winnersArray: carTypes.Winners = [];
let allCars: number = 4;
let allWinners: number = 1;
let maxPageGarage = allCars / PAGE_LIMIT.garage;
let maxPageWinners = allWinners / PAGE_LIMIT.winners;
let carsCount: number;
let winnersCount : number;

export async function GetAllCars() {
  let page: string;
  (localStorage.getItem('garagePage')) ? page = localStorage.getItem('garagePage') as string : page = '1'; 
  const parent = document.querySelector('[data-garage=garage]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.garage, [{key: '_page', value: page}, {key: '_limit', value: PAGE_LIMIT.garage}]) as Promise<carTypes.Cars>;
  carsCount = (await data).length;
  garage.changeTitle(carsCount);
  carArray.length = 0;
  (await data).forEach((el) => {
      carArray.push(el);
      const car = new Car(el.id, el.name, el.color);
      parent!.append(car.node);
  })
}

export async function CreateCar(name: string = '', color: string) {
  const data = await fetchCar.createCar(PATH.garage, {name: name, color: color});
  if(carsCount < 7) {
  const parent = document.querySelector('[data-garage=garage]');
  carArray.push(data);
  const car = new Car(data.id, data.name, data.color);
  parent!.append(car.node);
  carsCount += 1;
  garage.changeTitle(carsCount);
  }
}

export async function DeleteCar(idCar: string) {
  const data = await fetchCar.deleteCar(PATH.garage, idCar);
  carsCount -= 1;
  garage.changeTitle(carsCount);
  const ArrayIndexes = carArray.map(x => String(x.id));
  const num = ArrayIndexes.indexOf(idCar);
  carArray.splice(num, 1);
  
  const haveWinner = await fetchCar.getCar(PATH.winners, idCar);
  if(!isEmpty(haveWinner)) DeleteWinner(idCar);
}

export async function GetOneCar(id: string) {
  const data = await fetchCar.getCar(PATH.garage, id);
  const inputName = document.querySelector(`[data-name=change]`) as HTMLInputElement;
  const inputColor = document.querySelector(`[data-color=change]`) as HTMLInputElement;
  const button = document.getElementById('change');
  button!.removeAttribute('disabled');
  inputName.value = data.name;
  inputColor.value = data.color;
  PengingInputs(inputName, inputColor);
}

export async function ChangeCar(id: string, name: string = '', color: string) {
  const data = await fetchCar.updateCar(PATH.garage, id, {name: name, color: color});
  const newData = await fetchCar.getCar(PATH.garage, id);
  const ArrayIndexes = carArray.map(x => String(x.id));
  const num = ArrayIndexes.indexOf(id);
  carArray.splice(num, 1, newData);
}

export const Engine = async function Engine( id: string | number, status: string): Promise<carTypes.IEngineResponse> {
  const parametrs = [
    {key: 'id', value: id},
    {key:'status', value: status}
  ]
  const data = await fetchCar.engineCar(PATH.engine, parametrs) as carTypes.IEngineResponse;
  return data;
}

export async function DriveCar(id: string): Promise<carTypes.IRaceResult> {
  const dataStart = await Engine(id, STATUS.started) as unknown as carTypes.IEngineResponse;
  const dataDrive = Engine(id, STATUS.drive);
  const time = StartAnimation(id, dataStart.data);
  if(!(await dataDrive).data) {
    StopAnimation(id)
  };
  return {id: id, time: time, status: (await dataDrive).status};
}

export async function StopCar(id: string) {
  const dataEnd = await Engine(id, STATUS.stopped);
  ResetAnimation(id);
}

export const DriveAllCars = async function() {
  const resultsArray = carArray.map( async (car) => {
    const result = await DriveCar(car.id);
    return result;
  });
  const endResult = await Promise.all(resultsArray);
  endResult.sort((a, b) => a.time > b.time ? 1 : -1);
  for(let i = 0; i < endResult.length; i++) {
    if (endResult[i].status !== 500) {
      DrawResult(endResult[i].id);
      return endResult[i];
    }
    continue
  }
};

export const StopAllCars = function() {
  carArray.map( async (car) => {
   StopCar(car.id);
})
};

export async function GetAllWinners() {
  let page: string;
  (localStorage.getItem('winnersPage')) ? page = localStorage.getItem('winnersPage') as string : page = '1'; 
  let sortName: string;
  (localStorage.getItem('sortName')) ? sortName = localStorage.getItem('sortName') as string : sortName = 'id'; 
  let sortOrder: string;
  (localStorage.getItem('sortOrder')) ? sortOrder = (localStorage.getItem('sortOrder')) as string  : sortOrder = 'ASD';
  
  const parent = document.querySelector('[data-table=table]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.winners, [{key: '_page', value: page}, {key: '_limit', value: PAGE_LIMIT.winners}, {key: '_sort', value: sortName}, {key: '_order', value: sortOrder}]) as Promise<carTypes.Winners>;
  winnersCount = (await data).length;
  winners.changeTitle(winnersCount);
  (await data).forEach((el, index) => {
      const carsParams = carArray.find(x => +x.id === el.id);
      const num = index + 1;
      const winner = new TableLine(num, carIMG(carsParams!.color), carsParams!.name, el.wins, el.time);
      parent!.append(winner.node);
  })
}

export async function DeleteWinner(idCar: string) {
  const data = await fetchCar.deleteCar(PATH.winners, idCar);
}

export async function CreateWinner(id: string, wins: number, time: string) {
  const data = await fetchCar.createCar(PATH.winners, {id: id, wins: wins, time: time});
}

export async function ChangeWinner(id: string, wins: number, time: string) {
  const data = await fetchCar.updateCar(PATH.winners, id, {wins: wins, time: time});
}

export async function makeChangeWinners (id: string, time: number) { 
  const haveWinner = await fetchCar.getCar(PATH.winners, id);
  const convertTime = (time / 1000).toFixed(1);
  let currentTime; 
  (haveWinner.time > convertTime) ? currentTime = convertTime : currentTime = haveWinner.time;
  (isEmpty(haveWinner)) ?  CreateWinner(id , 1, currentTime) : ChangeWinner(id , haveWinner.wins + 1, currentTime);
}

export async function countMaxGaragePage() {
  const allCars = await fetchCar.getCarsCount(PATH.garage, [{key: '_page', value: 1}, {key: '_limit', value:1}]);
  if(!allCars) return;
  const maxPage = Math.ceil(+allCars / PAGE_LIMIT.garage);
  return maxPage;
}

export async function countMaxWinnersPage() {
  const allCars = await fetchCar.getCarsCount(PATH.winners, [{key: '_page', value: 1}, {key: '_limit', value:1}]);
  if(!allCars) return;
  const maxPage = Math.ceil(+allCars / PAGE_LIMIT.winners);
  return maxPage;
}