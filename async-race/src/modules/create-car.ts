import * as fetchCar from "./fetch-API";
import { Car } from "./data-car/data-classCar";
import * as carTypes from "./data-car/data-Icars";
import { garage } from "./DOM/garage-page";
import { PengingInputs, DrawResult, StartAnimation, StopAnimation, ResetAnimation } from "./additional-func";

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

let carsCount: number;
export const carArray: carTypes.Cars = [];
export const WinnersArray: carTypes.Winners = [];

export async function GetAllCars() {
  const parent = document.querySelector('[data-garage=garage]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.garage, [{key: '_page', value: '1'}, {key: '_limit', value: '7'}]) as Promise<carTypes.Cars>;
  carsCount = (await data).length;
  garage.changeTitle(carsCount);
  (await data).forEach((el) => {
      carArray.push(el);
      const car = new Car(el.id, el.name, el.color);
      parent!.append(car.node);
  })
}

export async function CreateCar(name: string = '', color: string) {
  const parent = document.querySelector('[data-garage=garage]');
  const data = await fetchCar.createCar(PATH.garage, {name: name, color: color});
  const car = new Car(data.id, data.name, data.color);
  parent!.append(car.node)
  carsCount += 1;
  garage.changeTitle(carsCount);
  carArray.push(data);
}

export async function DeleteCar(idCar: string) {
  const data = await fetchCar.deleteCar(PATH.garage, idCar);
  carsCount -= 1;
  garage.changeTitle(carsCount);
  const ArrayIndexes = carArray.map(x => String(x.id));
  const num = ArrayIndexes.indexOf(idCar);
  carArray.splice(num, 1);
}

export async function GetOneCar(id: string) {
  const data = await fetchCar.getCar(PATH.garage, id);
  const inputName = document.querySelector(`[data-name=change]`) as HTMLInputElement;
  const inputColor = document.querySelector(`[data-color=change]`) as HTMLInputElement;
  const button = document.getElementById('change');
  button!.removeAttribute('disabled');
  inputName.value = data.name;
  inputColor.value = data.color;
  PengingInputs(id, inputName, inputColor);
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
  if((await dataDrive).status === 500) {
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
  console.log(endResult);
  for(let i = 0; i < endResult.length; i++) {
    if (endResult[i].status !== 500) {
      DrawResult(endResult[i].id);
      break;
    }
    continue
  }
};

export const StopAllCars = function() {
  carArray.map( async (car) => {
   StopCar(car.id);
})
};