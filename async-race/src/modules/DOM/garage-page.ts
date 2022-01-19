import {DomElement} from '../create-element';

class CreateCar {
  public node: HTMLElement
  constructor() {
    const block = new DomElement('div', '', '');
    const wrapper = new DomElement('div', '', '', '', block.node);
    const title = new DomElement('h2', '', 'Create car', '', wrapper.node);
    const createCar = new DomElement('div', '', '', '', wrapper.node);
    const nameCar = new DomElement('input', '', '', '', createCar.node);
    const colorCar = new DomElement('input', '', '', '', createCar.node);
    colorCar.node.setAttribute('type', 'color');
    colorCar.node.setAttribute('value', '#e6c300');
    const createButton = new DomElement('button', '', 'Create', '', createCar.node);
    const changeCar = new DomElement('div', '', '', '', wrapper.node);
    const nameChange = new DomElement('input', '', '', '', changeCar.node);
    const colorChange = new DomElement('input', '', '', '', changeCar.node);
    colorChange.node.setAttribute('type', 'color');
    const changeButton = new DomElement('button', '', 'Update', '', changeCar.node);
    const create100 = new DomElement('button', '', 'Generate 100 cars', '', wrapper.node);

    this.node = block.node;
  }
}

const createCars = new CreateCar();

class Garage {
  public node: HTMLElement;
  public title: HTMLElement;
  constructor(createCarBlock: HTMLElement) {
    const main = new DomElement('main', '', '');
    const wrapper = new DomElement('div', '', '', '', main.node);
    wrapper.node.append(createCarBlock);
    const buttons = new DomElement('div', '', '', '', wrapper.node);
    const startButton = new DomElement('button', '', 'Race', '', buttons.node);
    const resettButton = new DomElement('button', '', 'Reset', '', buttons.node);
    const title = new DomElement('h2', '', 'Garage (4)', '', wrapper.node);
    const pageCount = new DomElement('h3', '', 'Page #1', '', wrapper.node);
    const garage = new DomElement('div', '', '', '', wrapper.node);
    garage.node.dataset.garage = 'garage';
    const buttonsPug = new DomElement('div', '', '', '', wrapper.node);
    const prevButton = new DomElement('button', '', 'Prev', '', buttonsPug.node);
    const nexstButton = new DomElement('button', '', 'Next', '', buttonsPug.node);

    this.node = main.node;
    this.title = title.node;
  }

  changeTitle(num: number) {
    this.title.innerHTML = `Garage (${num})`
  }
}

export const garage = new Garage(createCars.node);