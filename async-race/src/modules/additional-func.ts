/* eslint-disable guard-for-in */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import { carIMG } from './data-car/data-svgCar';
import * as carTypes from './data-car/data-Icars';
import { carArray } from './create-car';
import { showWinner } from './DOM/car-wins';
import { modelsCars } from './data-car/models-cars';
import { brandsCars } from './data-car/brands-cars';

const CAR_WIDTH = 110;

export const changeCarName = function () {
  const id = localStorage.getItem('changeCarId');
  const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
  const inputName = document.querySelector(
    '[data-name=change]',
  ) as HTMLInputElement;
  const lastName = carName.innerHTML;
  inputName.value ? (carName.textContent = inputName.value) : lastName;
};

export const changeCarColor = function () {
  const id = localStorage.getItem('changeCarId');
  const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  const inputColor = document.querySelector(
    '[data-color=change]',
  ) as HTMLInputElement;
  carColor.innerHTML = carIMG(inputColor.value);
};
export function pengingInputs(
  texstInput: HTMLInputElement,
  colorInput: HTMLInputElement,
) {
  texstInput.addEventListener('input', changeCarName);
  colorInput.addEventListener('input', changeCarColor);
}

export function stopPendingInputs(
  id: string,
  texstInput: HTMLInputElement,
  colorInput: HTMLInputElement,
) {
  const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
  const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  texstInput.removeEventListener('input', changeCarName);
  colorInput.removeEventListener('input', changeCarColor);
}

export function startAnimation(id: string, data: carTypes.IEngine) {
  const way = document.body.clientWidth - CAR_WIDTH;
  const time = Math.round(data.distance / data.velocity);
  const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  car.classList.add('move');
  car.style.setProperty('--timeCar', `${time}ms`);
  car.style.setProperty('--wayCar', `${way}px`);
  return time;
}

export function stopAnimation(id: string) {
  const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  car.classList.add('paused');
}

export function resetAnimation(id: string) {
  const car = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
  car.classList.remove('paused');
  car.classList.remove('move');
}

export function disabledButtons(button: HTMLElement) {
  button.setAttribute('disabled', 'true');
  const resetButton = button.nextElementSibling;
  const startButton = button.previousElementSibling;
  !resetButton
    ? startButton!.removeAttribute('disabled')
    : resetButton!.tagName === 'BUTTON'
      ? resetButton!.removeAttribute('disabled')
      : startButton!.removeAttribute('disabled');
}

export function disabledButton(id: string) {
  const button = document.getElementById(id);
  button!.hasAttribute('disabled')
    ? button!.removeAttribute('disabled')
    : button!.setAttribute('disabled', 'true');
}

export function drawResult(idWinner: string) {
  const winner = carArray.find((el) => el.id === idWinner);
  showWinner(winner!.name);
}

export function isEmpty(obj: carTypes.IWinner | carTypes.ICar) {
  for (const key in obj) {
    return false;
  }
  return true;
}

export function chooseOrder(elementClick: HTMLElement) {
  if (elementClick.classList.contains('upp')) {
    elementClick.classList.remove('upp');
    localStorage.setItem('sortOrder', 'DESC');
  } else {
    elementClick.classList.add('upp');
    localStorage.setItem('sortOrder', 'ASC');
  }
}

export function getRandomName(): string {
  const lastName = modelsCars[Math.floor(Math.random() * modelsCars.length)];
  const firstName = brandsCars[Math.floor(Math.random() * brandsCars.length)];
  return `${firstName} ${lastName}`;
}

export function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
