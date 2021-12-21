import './style.sass';
import { toy, Toys, dataToys } from './modules/data-toys';               //our data
import { toysFilters } from './modules/data-flters';

import { Header } from './modules/header';                   //our page
import { Form } from './modules/form';
import { ToysContainer } from './modules/toys-container';

import { favoriteToys } from './modules/toys-container';    //dinamic items
import { AlertLimit } from './modules/warning';
import { filterToys } from './modules/filter-function';

import { DomElement } from './modules/createElement';
alert('Привет! Если есть возможность, прошу проверить в четверг, еще дорабатываю множество деталей. Одна из ошибок, которые не могу побороть - фильтры работают только на второй клик. Если есть варианты почему так - напиши обязательно в фитбек, спасибо!')

const header = new Header(favoriteToys);
const form =  new Form();
let toys = new ToysContainer(dataToys);

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
    elementClick.classList.toggle('form__input-checks_checked');
  //console.log(checkboxes)
  checkboxes.forEach((el) => {
    const valueFilter = el.id;
    const typeFilter = el.closest('div')!.id;
    if(el.checked === true) {
      console.log(`${el.id} true`)
      filtersObject[typeFilter][valueFilter] = true;
    } else {
      filtersObject[typeFilter][valueFilter] = false;
    }
  })  
  //console.log(filtersObject)
  toys.clear();
  const filterResult = filterToys(filtersObject, dataToys)
  toys = new ToysContainer(filterResult)
  }
}) 