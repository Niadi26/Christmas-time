import {DomElement} from '../create-element';
import { createPage } from '../application';
import { winners } from './winners-page';

export const NAVITEMS: Array<string> = [
  'Garage', 
  'Winners'
]

class Navigation {
  public node: HTMLElement;
  constructor(navigationList: Array<string>) {
      const ul = new DomElement('ul', '', '');
      const linkList = navigationList.forEach((el)=> {
        const link = new DomElement( 'li', '', '', '', ul.node);
        const item = new DomElement( 'a', '', el, '', link.node);
        item.node.setAttribute('id', el);
      })
      this.node = ul.node as HTMLElement;
    }
}

export const navigation = new Navigation(NAVITEMS);