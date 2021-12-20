import './style.sass';
import { dataToys } from './modules/data-toys';
import { favoriteToys } from './modules/toys-container';
import { Header } from './modules/header';
import { Form } from './modules/form';
import { ToysContainer } from './modules/toys-container';
import { DomElement } from './modules/createElement';
import { AlertLimit } from './modules/warning';
import { toysFilters } from './modules/data-flters';

const header = new Header(favoriteToys);
const form =  new Form();
const toys = new ToysContainer(dataToys);

toys.node.addEventListener('click', (e) => {
  const elementClick = e!.target as HTMLElement;
  const parentElementClick = elementClick.parentElement as HTMLElement;
  if (parentElementClick.classList.contains('toy')) {

    const num = parentElementClick.id;
    if (parentElementClick.classList.contains('toy_favorite')) {
      parentElementClick.classList.remove('toy_favorite');
      const indexInFavorite = favoriteToys.indexOf(num);
      favoriteToys.splice(indexInFavorite, 1);
    } else {
        if (favoriteToys.length == 20) {
          AlertLimit(header.favorite);
          return
        }
      parentElementClick.classList.add('toy_favorite');
      favoriteToys.push(num);
    }
    header.changeFavorite(String(favoriteToys.length));
  }
})

form.node.addEventListener('click', function(e): void {
  const elementClick = e!.target as HTMLElement;
  if (elementClick.tagName == 'LABEL') {
  const filtersObject = toysFilters;
  const checkboxes = document.querySelectorAll('input[type=checkbox]') as NodeListOf<HTMLInputElement>;
  //console.log(checkboxes)
  checkboxes.forEach((el) => {
    const valueFilter = el.id;
    const typeFilter = el.closest('div')!.id;
    if(el.checked === true) {
      console.log(`${el.id} true!`)
      filtersObject[typeFilter][valueFilter] = true;
      localStorage.setItem(`${typeFilter}.${valueFilter}`, 'true');
    } else {
      filtersObject[typeFilter][valueFilter] = false;
      //localStorage.setItem(`${typeFilter}.${valueFilter}`, 'false');  delete
    }
    elementClick.classList.toggle('form__input-checks_checked');
  })
  console.log(filtersObject)  
  //toys.clear();
  //toys = new ToysContainer     
  }
}) 

const a: {[key: string]: {[key: string]: boolean}} = {}

a.form = {}
a.form.ball = true
