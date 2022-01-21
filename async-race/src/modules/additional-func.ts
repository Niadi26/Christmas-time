import { carIMG } from "./data-car/data-svgCar";
import * as carTypes from "./data-car/data-Icars";
import { carArray } from "./create-car";
import { Winner } from "./DOM/car-wins";

const CAR_WIDTH = 110; 

export function PengingInputs(id: string, texstInput: HTMLInputElement, colorInput: HTMLInputElement) {
    const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
    const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
    texstInput.addEventListener('input', () => ChangeCarName(carName, texstInput));
    colorInput.addEventListener('input', () => ChangeCarColor(carColor, colorInput));
  }
  
  // export function StopPendingInputs(id: string, texstInput: HTMLInputElement, colorInput: HTMLInputElement) {
  //   const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
  //   const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  //   texstInput.removeEventListener('input', () => ChangeCarName);
  //   colorInput.removeEventListener('input', () => ChangeCarColor);
  // }
  
  export function ChangeCarName(divName: HTMLElement, inputName: HTMLInputElement) {
    const lastName = divName.innerHTML;
    (inputName.value) ? divName.textContent = inputName.value : lastName;
  }
  
  export function ChangeCarColor(divCar: HTMLElement, input: HTMLInputElement) {
    divCar.innerHTML = carIMG(input.value);
  }

  export function StartAnimation (id: string, data: carTypes.IEngine) {
    const way = document.body.clientWidth - CAR_WIDTH;
    const time = Math.round(data.distance / data.velocity);
    const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
    car.classList.add('move');
    car.style.setProperty('--timeCar', `${time}ms`);
    car.style.setProperty('--wayCar', `${way}px`);
    return time;
  }
  
export function StopAnimation (id: string) {
  const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  car.classList.add('paused');
}

export function ResetAnimation (id: string) {
  const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  car.classList.remove('paused');
  car.classList.remove('move');
}

export function DisabledButtons(button: HTMLElement) {
  button.setAttribute('disabled', 'true');
  const resetButton = button.nextElementSibling;
  const startButton = button.previousElementSibling;
  (!resetButton) ? startButton!.removeAttribute('disabled') :
  (resetButton!.tagName === 'BUTTON') ? resetButton!.removeAttribute('disabled') : startButton!.removeAttribute('disabled');
}

export function DisabledButton(id: string) {
  const button = document.getElementById(id);
  button!.hasAttribute('disabled') ? button!.removeAttribute('disabled') : button!.setAttribute('disabled', 'true');
}

export function DrawResult(idWinner: string) {
  const winner = carArray.find(el => el.id === idWinner);
  Winner(winner!.name);
}