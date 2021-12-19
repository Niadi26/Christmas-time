import {DomElement} from './createElement';

const NAVITEMS: Array<string> = [
  'Старт', 
  'Игрушки', 
  'Ёлка'
]

class Navigation {
    public node: HTMLElement;
    constructor(navigationList: Array<string>) {
      const ul = new DomElement('ul', '', '');
      const linkList = navigationList.forEach((el)=> {
        const link = new DomElement( 'li', 'nav_items', '', '', ul.node);
        const item = new DomElement( 'a', '', el, '', link.node);
      })
      this.node = ul.node as HTMLElement
    }
}

export const navigationHeader = new Navigation(NAVITEMS);