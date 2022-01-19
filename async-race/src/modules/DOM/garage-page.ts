import {DomElement} from '../create-element';
import {CreateCar, DeleteCar, GetOneCar, ChangeCar} from '../create-car'

class CreateCarBlock {
  public node: HTMLElement
  constructor() {
    const block = new DomElement('div', '', '');
    const wrapper = new DomElement('div', '', '', '', block.node);
    const title = new DomElement('h2', '', 'Create car', '', wrapper.node);
    const createCar = new DomElement('div', '', '', '', wrapper.node);
    const nameCar = new DomElement('input', '', '', '', createCar.node);
    nameCar.node.dataset.name = 'create';
    const colorCar = new DomElement('input', '', '', '', createCar.node);
    colorCar.node.setAttribute('type', 'color');
    colorCar.node.setAttribute('value', '#e6c300');
    colorCar.node.dataset.color = 'create';
    const createButton = new DomElement('button', '', 'Create', '', createCar.node);
    createButton.node.setAttribute('id', 'create');
    const changeCar = new DomElement('div', '', '', '', wrapper.node);
    const nameChange = new DomElement('input', '', '', '', changeCar.node);
    nameChange.node.dataset.name = 'change';
    const colorChange = new DomElement('input', '', '', '', changeCar.node);
    colorChange.node.setAttribute('type', 'color');
    colorChange.node.dataset.color = 'change';
    const changeButton = new DomElement('button', '', 'Update', '', changeCar.node);
    changeButton.node.setAttribute('id', 'change');
    changeButton.node.setAttribute('disabled', 'true');
    const create100 = new DomElement('button', '', 'Generate 100 cars', '', wrapper.node);
    create100.node.setAttribute('id', 'create100');

    this.node = block.node;
  }
}

const createCars = new CreateCarBlock();

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

createCars.node.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement
  if (elementClick.id === 'create' || elementClick.id === 'change') {
    const inputName = document.querySelector(`[data-name=${elementClick.id}]`) as HTMLInputElement;
    const inputColor = document.querySelector(`[data-color=${elementClick.id}]`) as HTMLInputElement;
    const name = inputName.value;
    const color = inputColor.value;
    if(elementClick.id === 'create') {
      if(!name) inputName.style.border = '2px solid red';
      else {
        inputName.style.border = '';
        CreateCar(name, color);
      } 
    } else if (elementClick.id === 'change') {
      ChangeCar('1', name, color);                        //how get id???
      elementClick.setAttribute('disabled', 'true');
    }
    inputName.value = '';
  } else if (elementClick.id === 'create100') {
    console.log('100')
  }
})

garage.node.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  if (elementClick.dataset.action === 'delete') {
    const parent = elementClick.closest('.wrapper');
    const idCar = parent?.id;
    parent?.remove();
    DeleteCar(idCar!);
  } else if (elementClick.dataset.action === 'update') {
    const parent = elementClick.closest('.wrapper');
    const idCar = parent?.id;
    GetOneCar(idCar!);
  }
})