import { DomElement } from '../create-element';
import { navigation } from './navigation';

class Header {
  public node: HTMLElement;

  public nav: HTMLElement;

  constructor() {
    const header = new DomElement('header', '', '');
    const navigationBlock = new DomElement('nav', '', '', '', header.node);
    this.node = header.node;
    this.nav = navigationBlock.node;
  }
}

export const header = new Header();
header.nav.append(navigation.node);
