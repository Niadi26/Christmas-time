import {DomElement} from './createElement';
import { navigationHeader } from './navigation';

export class Header {
  public favorite: HTMLElement
  constructor(arrayFavoriteToys) {
    const parent = document.querySelector('.header') as HTMLElement;
    const wrapperHeader = new DomElement('div', 'wrapper_header', '', 'header')
    const navHeader = new DomElement('nav', '', '', '', wrapperHeader.node);
    const serchHeader = new DomElement('div', '', '', '',  wrapperHeader.node);
    const serchInput = new DomElement( 'input', 'search_items', '', '', serchHeader.node);
    const favoriteToys = new DomElement( 'div', 'favorite_items', arrayFavoriteToys.length, '', serchHeader.node);
    navHeader.node.append(navigationHeader.node)

  this.favorite = favoriteToys.node as HTMLElement;

  window.onscroll = function FixHeader(): void {
    if(window.pageYOffset > 100) {
      parent.classList.add('header_fixed');
    } else {
      parent.classList.remove('header_fixed');
    }
  }
  }

  changeFavorite(text: string): void {
    this.favorite.innerHTML= text;
  }
}