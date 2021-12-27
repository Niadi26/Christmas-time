import { DomElement } from "./createElement";
import { Toys, toy, dataToys } from "./data-toys";   


export class FavoriteContainer {
    public node: HTMLElement;
    constructor( dataToys: Toys) {
      const parent = new DomElement('div', 'tree__toys-container ', '', 'main');
      const title = new DomElement('h3', 'form__titles', 'Игрушки', '', parent.node);
      const getFavoriteToys = localStorage.getItem('favoriteToys');
      const favoriteToys = JSON.parse(getFavoriteToys!);
      if(favoriteToys.length) {
        favoriteToys.forEach((el) => {
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
    const parent = new DomElement('div', 'tree__toys', '', '', container);
    const toyData = dataToys.find(item => item.num == number) as toy;
    const count = new DomElement('div', 'tree-toy__count', `${toyData.count}`, '', parent.node);
    for(let i = 0; i < +toyData.count; i++) {
      const toy = new DomElement('img', 'tree-toy__img', '', '', parent.node)
      const img = new Image();
      img.src = `./assets/toys/${number}.webp`;
      img.onload = () => {  
        toy.node.setAttribute('src', `${img.src}`);
        toy.node.setAttribute('alt', `tree`);
        toy.node.setAttribute('usemap', '#treemap');
      }
      toy.node.setAttribute('draggable', 'true');
        
      toy.node.onmousedown = function(event) {
        const elementClick = event.target as HTMLElement;
        const parentClick = elementClick.parentElement;
        let countOfToys = +count.node.textContent!;
        const dropElement = document.querySelector('area');
        let elemBelow;
        const shiftX = event.clientX - toy.node.getBoundingClientRect().left;
        const shiftY = event.clientY - toy.node.getBoundingClientRect().top;
        //start
        toy.node.style.position = 'absolute';
        toy.node.style.zIndex = '1000';
        document.body.append(toy.node);
        moveAt(event.pageX, event.pageY);
        //num in count -1
        if(parentClick?.tagName == 'DIV') {
          count.node.innerHTML = `${--countOfToys}`
        }
        //move
        document.addEventListener('mousemove', onMouseMove);
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);

          toy.node.hidden = true;
          elemBelow = document.elementFromPoint(event.clientX, event.clientY);
          toy.node.hidden = false;
        }
        // переносит мяч на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
          toy.node.style.left = pageX - shiftX + 'px';
          toy.node.style.top = pageY - shiftY + 'px';
        }
        //end
        toy.node.onmouseup = function() {
          if(!elemBelow || elemBelow != dropElement) {
            count.node.innerHTML = `${++countOfToys}`;
            parentClick!.append(toy.node);               //что делать если парент это ёлка?
            toy.node.style.left = 5 + 'px';
            toy.node.style.top = 5 + 'px';
            toy.node.style.zIndex = '0';
            document.removeEventListener('mousemove', onMouseMove);
            toy.node.onmouseup = null;
          }
          else if(elemBelow == dropElement) {
            document.removeEventListener('mousemove', onMouseMove);
            toy.node.onmouseup = null;
          }
        };
      
      };
      
      toy.node.ondragstart = function() {
        return false;
      };
    }

  }
}  
