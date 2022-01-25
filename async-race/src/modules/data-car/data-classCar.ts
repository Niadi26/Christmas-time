import { carIMG } from './data-svgCar';
import { DomElement } from '../create-element';

export class Car {
  public node: HTMLElement;

  public car: HTMLElement;

  constructor(id: string, name: string, color: string) {
    const parent = document.querySelector('body');
    const wrapper = new DomElement('div', 'wrapper', '', '', parent!);
    wrapper.node.setAttribute('id', `${id}`);
    const garage = new DomElement('div', 'garage', '', '', wrapper.node);
    const finish = new DomElement('div', 'finish', 'Finish', '', wrapper.node);
    const buttons = new DomElement('div', '', '', '', garage.node);
    const startButton = new DomElement('button', 'button_small', 'Start', '', buttons.node);
    startButton.node.dataset.action = 'start';
    const resetButton = new DomElement('button', 'button_small', 'Reset', '', buttons.node);
    resetButton.node.dataset.action = 'reset';
    resetButton.node.setAttribute('disabled', 'true');
    const carName = new DomElement('div', 'car-txt', name, '', buttons.node);
    carName.node.dataset.name = `c${id}`;
    const carBlock = new DomElement('div', '', '', '', garage.node);
    const optionsCar = new DomElement('div', '', '', '', carBlock.node);
    const updateCar = new DomElement('button', 'button_update', '', '', optionsCar.node);
    updateCar.node.dataset.action = 'update';
    const deleteCar = new DomElement('button', 'button-delete', '', '', optionsCar.node);
    deleteCar.node.dataset.action = 'delete';
    const pictureCar = new DomElement(
      'div',
      'pictureCar',
      carIMG(color),
      '',
      carBlock.node,
    );
    pictureCar.node.dataset.car = `c${id}`;

    this.node = wrapper.node as HTMLElement;
    this.car = pictureCar.node as HTMLElement;
  }
}
