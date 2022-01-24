import { DomElement } from '../create-element';

class CreateCarBlock {
  public node: HTMLElement;

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
    const createButton = new DomElement(
      'button',
      '',
      'Create',
      '',
      createCar.node,
    );
    createButton.node.setAttribute('id', 'create');
    const changeCar = new DomElement('div', '', '', '', wrapper.node);
    const nameChange = new DomElement('input', '', '', '', changeCar.node);
    nameChange.node.dataset.name = 'change';
    const colorChange = new DomElement('input', '', '', '', changeCar.node);
    colorChange.node.setAttribute('type', 'color');
    colorChange.node.dataset.color = 'change';
    const changeButton = new DomElement(
      'button',
      '',
      'Update',
      '',
      changeCar.node,
    );
    changeButton.node.setAttribute('id', 'change');
    changeButton.node.setAttribute('disabled', 'true');
    const create100 = new DomElement(
      'button',
      '',
      'Generate 100 cars',
      '',
      wrapper.node,
    );
    create100.node.setAttribute('id', 'create100');

    this.node = block.node;
  }
}

export const createCars = new CreateCarBlock();
