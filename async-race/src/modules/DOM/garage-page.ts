import { DomElement } from '../create-element';
import { createCars } from './imputs-blok';

class Garage {
  public node: HTMLElement;

  public title: HTMLElement;

  public garage: HTMLElement;

  public race: HTMLElement;

  public pagesChoose: HTMLElement;

  public page: HTMLElement;

  public raceButton: HTMLElement;

  constructor(createCarBlock: HTMLElement) {
    const main = new DomElement('main', '', '');
    const wrapper = new DomElement('div', '', '', '', main.node);
    wrapper.node.append(createCarBlock);
    const buttons = new DomElement('div', '', '', '', wrapper.node);
    const startButton = new DomElement('button', '', 'Race', '', buttons.node);
    startButton.node.setAttribute('id', 'race');
    const resettButton = new DomElement(
      'button',
      '',
      'Reset',
      '',
      buttons.node,
    );
    resettButton.node.setAttribute('id', 'reset');
    resettButton.node.setAttribute('disabled', 'true');
    const title = new DomElement('h2', '', 'Garage (4)', '', wrapper.node);
    const pageCount = new DomElement('h3', '', 'Page #1', '', wrapper.node);
    const garage = new DomElement('div', '', '', '', wrapper.node);
    garage.node.dataset.garage = 'garage';
    const buttonsPug = new DomElement('div', '', '', '', wrapper.node);
    const prevButton = new DomElement(
      'button',
      '',
      'Prev',
      '',
      buttonsPug.node,
    );
    prevButton.node.setAttribute('id', 'prev');
    const nextButton = new DomElement(
      'button',
      '',
      'Next',
      '',
      buttonsPug.node,
    );
    nextButton.node.setAttribute('id', 'next');

    this.node = main.node;
    this.title = title.node;
    this.garage = garage.node;
    this.race = buttons.node;
    this.pagesChoose = buttonsPug.node;
    this.page = pageCount.node;
    this.raceButton = startButton.node;
  }

  changeTitle(num: number) {
    this.title.innerHTML = `Garage (${num})`;
  }

  changePage() {
    const num = localStorage.getItem('garagePage');
    this.page.innerHTML = `Page #${num}`;
  }
}

export const garage = new Garage(createCars.node);
