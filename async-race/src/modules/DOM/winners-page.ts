import {DomElement} from '../create-element';

class Winners {
  public node: HTMLElement
  constructor() {
    const main = new DomElement('main', '', '');
    const wrapper = new DomElement('div', '', '', '', main.node);
    const title = new DomElement('h2', '', 'Winners (1)', '', wrapper.node);
    const pageCount = new DomElement('h3', '', 'Page #1', '', wrapper.node);
    const garage = new DomElement('div', '', 'Now empty..........', '', wrapper.node);
    const buttonsPug = new DomElement('div', '', '', '', wrapper.node);
    const prevButton = new DomElement('button', '', 'Prev', '', buttonsPug.node);
    const nexstButton = new DomElement('button', '', 'Next', '', buttonsPug.node);
  
    this.node = main.node;
  }
}

export const winners = new Winners();