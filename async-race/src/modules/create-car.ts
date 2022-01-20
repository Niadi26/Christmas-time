import * as fetchCar from "./fetch-API";
import { Car } from "./data-car/data-classCar";
import * as carTypes from "./data-car/data-Icars";
import { garage } from "./DOM/garage-page";
import { PengingInputs } from "./additional-func";

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

export async function GetAllCars() {
  const parent = document.querySelector('[data-garage=garage]');
  parent!.innerHTML = '';
  const data = await fetchCar.getCars(PATH.garage, [{key: '_page', value: '1'}, {key: '_limit', value: '7'}]) as Promise<carTypes.Cars>;
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
  parent!.append(car.node)
  carsCount += 1;
  garage.changeTitle(carsCount);
}

export async function DeleteCar(id: string) {
  const data = await fetchCar.deleteCar(PATH.garage, id);
  carsCount -= 1;
  garage.changeTitle(carsCount);
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
  const data = fetchCar.updateCar(PATH.garage, id, {name: name, color: color});
}

export const StartEngine = async function StartEngine( id: string | number, status: string): Promise<carTypes.IEngineResponse> {
  const parametrs = [
    {key: 'id', value: id},
    {key:'status', value: status}
  ]
  const data = await fetchCar.engineCar(PATH.engine, parametrs) as carTypes.IEngineResponse;
  return data;
}
