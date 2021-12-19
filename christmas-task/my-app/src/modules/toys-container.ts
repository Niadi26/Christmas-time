import {DomElement} from './createElement';
import { Header } from './header';

export const favoriteToys: Array<string> = [];

export class ToysContainer {
    public node: HTMLElement
  constructor(data) {
    const parent = document.querySelector('.main') as HTMLElement;
    const toysCont = new DomElement('div', '', '', '', parent);
    data.forEach(element => {
      const toyItem = new DomElement('div', 'zzz', '', '', toysCont.node);
      toyItem.node.setAttribute('id' , element.num);
      const toyName = new DomElement('h4', '' , element.name, '', toyItem.node);
      const toyImg = new DomElement('h4', '' , '', '', toyItem.node);
      const img = new Image();
      img.src = `../assets/toys/${element.num}.webp`;
      img.onload = () => {  
        toyImg.node.style.backgroundImage = `url('${img.src}')`;
      }
      const toycount = new DomElement('p', '' , `Количество: ${element.count}`, '', toyItem.node);
      const toyYear = new DomElement('p', '' , `Год покупки:${element.year}`, '', toyItem.node);
      const toyShape = new DomElement('p', '' , `Форма игрушки:${element.shape}`, '', toyItem.node);
      const toyColor = new DomElement('p', '' , `Цвет игрушки:${element.color}`, '', toyItem.node);
      const toySize = new DomElement('p', '' , `Размер игрушки:${element.size}`, '', toyItem.node);
      const toyLove = new DomElement('p', '' , `Любимая:${element.favorite}`, '', toyItem.node);
    });
    this.node = toysCont.node as HTMLElement;
  }

}
