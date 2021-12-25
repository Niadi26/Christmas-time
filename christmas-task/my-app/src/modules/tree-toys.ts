import { DomElement } from "./createElement";
import { Toys, toy, dataToys } from "./data-toys";   


export class FavoriteContainer {
    public node: HTMLElement;
    constructor(favoriteArray: Array<string>, dataToys: Toys) {
      const parent = new DomElement('div', 'toys', '', 'main');
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
    const parent = new DomElement('div', '', '', '', container);
    const img = new Image();
    img.src = `./assets/toys/${number}.webp`;
    img.onload = () => {  
      parent.node.style.backgroundImage = `url('${img.src}')`;
    }
    const toy = dataToys.find(item => item.num == number) as toy;
    const count = new DomElement('div', '', `${toy.count}`);
  }
}  