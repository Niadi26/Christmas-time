import {DomElement} from './createElement';

export const favoriteToys: Array<string> = [];

export class ToysContainer {
    public node: HTMLElement
  constructor(data) {
    const parent = document.querySelector('.main') as HTMLElement;
    const toysCont = new DomElement('div', 'main__container', '', '', parent);
    data.forEach(element => {
      const toyItem = new DomElement('div', 'toy', '', '', toysCont.node);
      toyItem.node.setAttribute('id' , element.num);
      const toyName = new DomElement('h4', 'toy__title' , element.name, '', toyItem.node);
      const toyImg = new DomElement('p', 'toy__img' , '', '', toyItem.node);
      const img = new Image();
      img.src = `./assets/toys/${element.num}.webp`;
      img.onload = () => {  
        toyImg.node.style.backgroundImage = `url('${img.src}')`;
      }
      const toycount = new DomElement('p', 'toy__txt' , `Количество: ${element.count}`, '', toyItem.node);
      const toyYear = new DomElement('p', 'toy__txt' , `Год покупки: ${element.year}`, '', toyItem.node);
      const toyShape = new DomElement('p', 'toy__txt' , `Форма игрушки: ${element.shape}`, '', toyItem.node);
      const toyColor = new DomElement('p', 'toy__txt' , `Цвет игрушки: ${element.color}`, '', toyItem.node);
      const toySize = new DomElement('p', 'toy__txt' , `Размер игрушки: ${element.size}`, '', toyItem.node);
      const toyLove = new DomElement('p', 'toy__txt' , `Любимая: ${element.favorite}`, '', toyItem.node);

      const getFavoriteToys = localStorage.getItem('favoriteToys');
      const favoriteToys = JSON.parse(getFavoriteToys!)
      if(favoriteToys.includes(element.num)) toyItem.node.classList.add('toy_favorite');
    });
    this.node = toysCont.node as HTMLElement;
  }

  delete(): void {
    this.node.remove()
  }

}
