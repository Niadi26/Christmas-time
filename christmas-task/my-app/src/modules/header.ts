import {DomElement} from './createElement';
import { navigationHeader } from './navigation';

export class Header {
  public node: HTMLElement
  public favorite: HTMLElement
  public search: HTMLInputElement
  public navigation: HTMLElement
  constructor(arrayFavoriteToys: Array<string>) {
    const parent = document.querySelector('.header') as HTMLElement;
    const wrapperHeader = new DomElement('div', 'wrapper', '', 'header')
    const navHeader = new DomElement('nav', '', '', '', wrapperHeader.node);
    const serchHeader = new DomElement('div', '', '', '',  wrapperHeader.node);
    const searchInput = new DomElement( 'input', 'search_items', '', '', serchHeader.node);
    searchInput.node.setAttribute('type', 'search');
    searchInput.node.setAttribute('autofocus', 'autofocus');
    searchInput.node.setAttribute('placeholder', 'Найти...');
    searchInput.node.setAttribute('autocomplete', 'off');
    searchInput.node.setAttribute('id', 'search');
    searchInput.node.focus()

    const favoriteToysCont = new DomElement( 'div', 'favorite_items', String(arrayFavoriteToys.length), '', serchHeader.node);
    navHeader.node.append(navigationHeader.node)
  
  this.node = parent;
  this.favorite = favoriteToysCont.node as HTMLElement;
  this.search = searchInput.node as HTMLInputElement;
  this.navigation = navHeader.node as HTMLElement;

  const getFavoriteToys = localStorage.getItem('favoriteToys');
  const favoriteToys = JSON.parse(getFavoriteToys!);
  if(favoriteToys.length) favoriteToysCont.node.innerHTML= favoriteToys.length;
  }

  changeFavorite(text: string): void {
    this.favorite.innerHTML= text;
  }
}