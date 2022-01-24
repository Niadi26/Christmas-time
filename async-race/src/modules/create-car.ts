import * as fetchCar from "./fetch-API";
import * as carTypes from "./data-car/data-Icars";
import { Car } from "./data-car/data-classCar";
import { carIMG } from "./data-car/data-svgCar";
import { garage } from "./DOM/garage-page";
import { winners, TableLine } from "./DOM/winners-page";
import {
  pengingInputs,
  drawResult,
  startAnimation,
  stopAnimation,
  resetAnimation,
  isEmpty,
  getRandomColor,
  getRandomName,
} from "./additional-func";

const PATH = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
};

export const STATUS = {
  started: "started",
  drive: "drive",
  stopped: "stopped",
};

const PAGE_LIMIT = {
  garage: 7,
  winners: 10,
};

export const carArray: carTypes.Cars = [];
let carsCount: number;
let winnersCount: number;

export async function getAllCars() {
  let page: string;
  localStorage.getItem("garagePage")
    ? (page = localStorage.getItem("garagePage") as string)
    : (page = "1");
  const parent = document.querySelector("[data-garage=garage]");
  parent!.innerHTML = "";
  const data = (await fetchCar.getCars(PATH.garage, [
    { key: "_page", value: page },
    { key: "_limit", value: PAGE_LIMIT.garage },
  ])) as Promise<carTypes.Cars>;
  garage.changeTitle(carsCount);
  carArray.length = 0;
  (await data).forEach((el) => {
    carArray.push(el);
    const car = new Car(el.id, el.name, el.color);
    parent!.append(car.node);
  });
}

export async function createCar(name: string = "", color: string) {
  const data = await fetchCar.createCar(PATH.garage, {
    name: name,
    color: color,
  });
  carsCount += 1;
  if (carsCount < 7) {
    const parent = document.querySelector("[data-garage=garage]");
    carArray.push(data);
    const car = new Car(data.id, data.name, data.color);
    parent!.append(car.node);
    garage.changeTitle(carsCount);
  }
}

export async function deleteCar(idCar: string) {
  const data = await fetchCar.deleteCar(PATH.garage, idCar);
  carsCount -= 1;
  garage.changeTitle(carsCount);
  const ArrayIndexes = carArray.map((x) => String(x.id));
  const num = ArrayIndexes.indexOf(idCar);
  carArray.splice(num, 1);

  const haveWinner = await fetchCar.getCar(PATH.winners, idCar);
  if (!isEmpty(haveWinner)) deleteWinner(idCar);
}

export async function getOneCar(id: string) {
  const data = await fetchCar.getCar(PATH.garage, id);
  const inputName = document.querySelector(
    `[data-name=change]`
  ) as HTMLInputElement;
  const inputColor = document.querySelector(
    `[data-color=change]`
  ) as HTMLInputElement;
  const button = document.getElementById("change");
  button!.removeAttribute("disabled");
  inputName.value = data.name;
  inputColor.value = data.color;
  pengingInputs(inputName, inputColor);
}

export async function changeCar(id: string, name: string = "", color: string) {
  const data = await fetchCar.updateCar(PATH.garage, id, {
    name: name,
    color: color,
  });
  const newData = await fetchCar.getCar(PATH.garage, id);
  const ArrayIndexes = carArray.map((x) => String(x.id));
  const num = ArrayIndexes.indexOf(id);
  carArray.splice(num, 1, newData);
}

export const engine = async function engine(
  id: string | number,
  status: string
): Promise<carTypes.IEngineResponse> {
  const parametrs = [
    { key: "id", value: id },
    { key: "status", value: status },
  ];
  const data = (await fetchCar.engineCar(
    PATH.engine,
    parametrs
  )) as carTypes.IEngineResponse;
  return data;
};

export async function driveCar(id: string): Promise<carTypes.IRaceResult> {
  const dataStart = (await engine(
    id,
    STATUS.started
  )) as unknown as carTypes.IEngineResponse;
  const dataDrive = engine(id, STATUS.drive);
  const time = startAnimation(id, dataStart.data);
  if (!(await dataDrive).data) {
    stopAnimation(id);
  }
  return { id: id, time: time, status: (await dataDrive).status };
}

export async function stopCar(id: string) {
  const dataEnd = await engine(id, STATUS.stopped);
  resetAnimation(id);
}

export const driveAllCars = async function () {
  const resultsArray = carArray.map(async (car) => {
    const result = await driveCar(car.id);
    return result;
  });
  const endResult = await Promise.all(resultsArray);
  endResult.sort((a, b) => (a.time > b.time ? 1 : -1));
  for (let i = 0; i < endResult.length; i++) {
    if (endResult[i].status !== 500) {
      drawResult(endResult[i].id);
      return endResult[i];
    }
    continue;
  }
};

export const stopAllCars = function () {
  carArray.map(async (car) => {
    stopCar(car.id);
  });
};

export async function getAllWinners() {
  let page: string;
  localStorage.getItem("winnersPage")
    ? (page = localStorage.getItem("winnersPage") as string)
    : (page = "1");
  let sortName: string;
  localStorage.getItem("sortName")
    ? (sortName = localStorage.getItem("sortName") as string)
    : (sortName = "id");
  let sortOrder: string;
  localStorage.getItem("sortOrder")
    ? (sortOrder = localStorage.getItem("sortOrder") as string)
    : (sortOrder = "ASD");

  const parent = document.querySelector("[data-table=table]");
  parent!.innerHTML = "";
  const data = (await fetchCar.getCars(PATH.winners, [
    { key: "_page", value: page },
    { key: "_limit", value: PAGE_LIMIT.winners },
    { key: "_sort", value: sortName },
    { key: "_order", value: sortOrder },
  ])) as Promise<carTypes.Winners>;
  winners.changeTitle(winnersCount);
  (await data).forEach((el, index) => {
    const data = fetchCar.getCar(PATH.garage, el.id);
    const num = index + 1;
    data.then((data) => {
      const winner = new TableLine(
        num,
        carIMG(data!.color),
        data!.name,
        el.wins,
        el.time
      );
      parent!.append(winner.node);
    });
  });
}

export async function deleteWinner(idCar: string) {
  const data = await fetchCar.deleteCar(PATH.winners, idCar);
}

export async function createWinner(id: string, wins: number, time: string) {
  const data = await fetchCar.createCar(PATH.winners, {
    id: id,
    wins: wins,
    time: time,
  });
}

export async function changeWinner(id: string, wins: number, time: string) {
  const data = await fetchCar.updateCar(PATH.winners, id, {
    wins: wins,
    time: time,
  });
}

export async function makeChangeWinners(id: string, time: number) {
  const haveWinner = await fetchCar.getCar(PATH.winners, id);
  const convertTime = (time / 1000).toFixed(1);
  let currentTime;
  haveWinner.time > convertTime
    ? (currentTime = convertTime)
    : (currentTime = haveWinner.time);
  isEmpty(haveWinner)
    ? createWinner(id, 1, convertTime)
    : changeWinner(id, haveWinner.wins + 1, currentTime);
}

export async function countMaxGaragePage() {
  const allCars = await fetchCar.getCarsCount(PATH.garage, [
    { key: "_page", value: 1 },
    { key: "_limit", value: 1 },
  ]);
  if (!allCars) return;
  const maxPage = Math.ceil(+allCars / PAGE_LIMIT.garage);
  return maxPage;
}

export async function countMaxWinnersPage() {
  const allCars = await fetchCar.getCarsCount(PATH.winners, [
    { key: "_page", value: 1 },
    { key: "_limit", value: 1 },
  ]);
  if (!allCars) return;
  const maxPage = Math.ceil(+allCars / PAGE_LIMIT.winners);
  return maxPage;
}

export async function generate100Cars() {
  const arr = new Array(100)
    .fill(1)
    .map((item) => (item = { name: getRandomName(), color: getRandomColor() }));
  const promises = arr.map(async (item) => {
    await createCar(item.name, item.color);
  });
  const endResult = await Promise.all(promises);
  countAllCars();
  garage.changeTitle(carsCount);
}

export async function countAllCars() {
  const allCars = await fetchCar.getCarsCount(PATH.garage, [
    { key: "_page", value: 1 },
    { key: "_limit", value: 1 },
  ]);
  carsCount = +allCars!;
}

export async function countAllWinners() {
  const allCars = await fetchCar.getCarsCount(PATH.winners, [
    { key: "_page", value: 1 },
    { key: "_limit", value: 1 },
  ]);
  winnersCount = +allCars!;
}
