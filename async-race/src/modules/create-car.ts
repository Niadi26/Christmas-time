import * as fetchCar from "./fetch-API";
import { Car } from "./data-classCar";
import * as carTypes from "./data-Icars";
import { garage } from "./DOM/garage-page";

const PATH = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
  }
let carsCount: number;

export async function GetAllCars() {
  const parent = document.querySelector('[data-garage=garage]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.garage, [{key: '_page', value: '1'}, {key: '_limit', value: '5'}]) as Promise<carTypes.Cars>;
  carsCount = (await data).length;
  garage.changeTitle(carsCount);
  (await data).forEach((el) => {
      const car = new Car(el.id, el.name, el.color);
      parent!.append(car.node);
  })
}

export async function CreateCar(name: string = '', color: string) {
  const parent = document.querySelector('[data-garage=garage]');
  const data = await fetchCar.createCar(PATH.garage, {name: name, color: color});
  const car = new Car(data.id, data.name, data.color);
  parent?.append(car.node)
  garage.changeTitle(carsCount + 1);
}