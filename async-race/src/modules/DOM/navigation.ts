import { DomElement } from '../create-element';

export const NAVITEMS: Array<string> = ['Garage', 'Winners'];

class Navigation {
  public node: HTMLElement;

  constructor(navigationList: Array<string>) {
    const ul = new DomElement('ul', 'header__navigation', '');
    const linkList = navigationList.forEach((el) => {
      const link = new DomElement('li', '', '', '', ul.node);
      const item = new DomElement('a', 'navigation__item', el, '', link.node);
      item.node.setAttribute('id', el);
    });
    this.node = ul.node as HTMLElement;
  }
}

export const navigation = new Navigation(NAVITEMS);
