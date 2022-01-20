import { carIMG } from "./data-car/data-svgCar";

export function PengingInputs(id: string, texstInput: HTMLInputElement, colorInput: HTMLInputElement) {
    const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
    const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
    texstInput.addEventListener('input', () => ChangeCarName(carName, texstInput));
    colorInput.addEventListener('input', () => ChangeCarColor(carColor, colorInput));
  }
  
  export function StopPendingInputs(id: string, texstInput: HTMLInputElement, colorInput: HTMLInputElement) {
    const carName = document.querySelector(`[data-name=c${id}]`) as HTMLElement;
    const carColor = document.querySelector(`[data-car=c${id}]`) as HTMLElement;
    texstInput.removeEventListener('input', () => ChangeCarName(carName, texstInput));
    colorInput.removeEventListener('input', () => ChangeCarColor(carColor, colorInput));
  }
  
  export function ChangeCarName(divName: HTMLElement, inputName: HTMLInputElement) {
    const lastName = divName.innerHTML;
    (inputName.value) ? divName.textContent = inputName.value : lastName;
  }
  
  export function ChangeCarColor(divCar: HTMLElement, input: HTMLInputElement) {
    divCar.innerHTML = carIMG(input.value);
  }