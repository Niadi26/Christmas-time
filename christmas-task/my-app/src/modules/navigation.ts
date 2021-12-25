import {DomElement} from './createElement';
import { StartPage } from './start-page';
import { TreePage } from './tree-page';
import { ToysPage } from './toys-page';
import { makePage } from '..';

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
        const link = new DomElement( 'li', 'nav__items', '', '', ul.node);
        const item = new DomElement( 'a', '', el, '', link.node);
        item.node.setAttribute('id', el);
      })
      this.node = ul.node as HTMLElement;
    }

}

export const navigationHeader = new Navigation(NAVITEMS);