
import { DomElement } from './create-element';

export class Car {
  public node: HTMLElement;
  public car: HTMLElement;
  constructor(id: number, name: string, color: string) {
    const parent = document.querySelector('body');
    const wrapper = new DomElement('div', 'wrapper', '', '', parent!);
    const garage = new DomElement('div', '', '', '', wrapper.node);
    garage.node.setAttribute('id', `${id}`);
    const finish = new DomElement('div', 'finish', 'Finish', '', wrapper.node);
    const buttons = new DomElement('div', '', '', '', garage.node);
    const startButton = new DomElement('button', '', 'start', '', buttons.node);
    startButton.node.dataset.action = 'start';
    const resetButton = new DomElement('button', '', 'reset', '', buttons.node);
    resetButton.node.dataset.action = 'reset';
    const carName = new DomElement('div', '', name, '',buttons.node);
    const carBlock = new DomElement('div', '', '', '', garage.node);
    const optionsCar = new DomElement('div', '', '', '', carBlock.node);
    const updateCar = new DomElement('button', '', '', '', optionsCar.node);
    updateCar.node.dataset.action = 'update';
    const deleteCar = new DomElement('button', '', '', '', optionsCar.node);
    deleteCar.node.dataset.action = 'delete';
    const pictureCar = new DomElement('div', 'pictureCar', '', '', carBlock.node);
    pictureCar.node.style.backgroundColor = color;

    this.node = wrapper.node as HTMLElement;
    this.car = pictureCar.node as HTMLElement;
  }
}