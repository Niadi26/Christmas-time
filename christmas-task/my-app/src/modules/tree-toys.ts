import { DomElement } from "./createElement";
import { Toys, toy, dataToys } from "./data-toys";   


export class FavoriteContainer {
    public node: HTMLElement;
    constructor(favoriteArray: Array<string>, dataToys: Toys) {
      const parent = new DomElement('div', 'tree__toys-container ', '', 'main');
      const title = new DomElement('h3', 'form__titles', 'Игрушки', '', parent.node)
      if(favoriteArray.length) {
        favoriteArray.forEach((el) => {
          const favoriteToy = new FavoriteToy(el, dataToys, parent.node)
        })
      } else {
        for(let i = 1; i <= 20; i++) {
            const favoriteToy = new FavoriteToy(i, dataToys, parent.node)
        }
      }
      
      this.node = parent.node as HTMLElement;
    }
  }

class FavoriteToy {
  constructor(number: number | string, dataToys: Toys, container: HTMLElement) {
    const parent = new DomElement('div', 'toy', '', '', container);
    const toy = new DomElement('div', 'toy__img', '', '', parent.node)
    const img = new Image();
    img.src = `./assets/toys/${number}.webp`;
    img.onload = () => {  
      toy.node.style.backgroundImage = `url('${img.src}')`;
    }
    const toyData = dataToys.find(item => item.num == number) as toy;
    const count = new DomElement('div', 'toy__count', `${toyData.count}`, '', parent.node);
  }
}  