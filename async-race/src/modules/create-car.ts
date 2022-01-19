import * as fetchCar from "./fetch-API";
import { Car } from "./data-classCar";
import * as carTypes from "./data-Icars";
import { garage } from "./DOM/garage-page";

const PATH = {
    garage: '/garage',
    engine: '/engine',
    winners: '/winners',
  }

export async function GetAllCars() {
  const parent = document.querySelector('[data-garage=garage]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.garage, [{key: '_page', value: '1'}, {key: '_limit', value: '5'}]) as Promise<carTypes.Cars>;
  garage.changeTitle((await data).length);
  (await data).forEach((el) => {
      const car = new Car(el.id, el.name, el.color);
      parent!.append(car.node);
  })
}

