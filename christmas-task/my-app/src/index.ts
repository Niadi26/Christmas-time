import "./style.sass";
import { Toys, dataToys } from "./modules/data-toys"; //our data
import { toysFilters } from "./modules/data-flters";

import { Header } from "./modules/header"; //our page
import { Form } from "./modules/form";
import { ToysContainer } from "./modules/toys-container";

import { favoriteToys } from "./modules/toys-container"; //dinamic items
import { AlertLimit } from "./modules/warning";
import { filterToys } from "./modules/filter-function";
import { sortToys, sortField } from "./modules/sort-items";
import { AlertNoCoincidence } from './modules/warning'

function setLocalStorage () {
  if (!localStorage.getItem('FilterObject')) {
    localStorage.setItem('FilterObject', JSON.stringify(toysFilters))
  }
  if (!localStorage.getItem('sortFilter')) {
    localStorage.setItem('sortFilter', '-1')
  }
}
window.addEventListener('load', setLocalStorage);

const header = new Header(favoriteToys);
const form = new Form();
let toys = new ToysContainer(dataToys);            //fix, при перезагрузке берет дефолтные данные

toys.node.addEventListener("click", (e) => {
  const elementClick = e!.target as HTMLElement;
  const parentElementClick = elementClick.parentElement as HTMLElement;
  if (parentElementClick.classList.contains("toy")) {
    const num = parentElementClick.id;
    if (parentElementClick.classList.contains("toy_favorite")) {
      parentElementClick.classList.remove("toy_favorite");
      const indexInFavorite = favoriteToys.indexOf(num);
      favoriteToys.splice(indexInFavorite, 1);
      localStorage.setItem('favoriteLength', String(favoriteToys.length))
    } else {
      if (favoriteToys.length == 20) {
        AlertLimit(header.favorite);
        return;
      }
      parentElementClick.classList.add("toy_favorite");
      favoriteToys.push(num);
      localStorage.setItem('favoriteLength', String(favoriteToys.length))
    }
    header.changeFavorite(String(favoriteToys.length));
  }
});

form.node.addEventListener("click", function (e): void {
  const elementClick = e!.target as HTMLElement;
  if (elementClick.tagName == "LABEL") {
    const dataObject = localStorage.getItem('FilterObject') as string;
    let filtersObject = JSON.parse(dataObject) as Toys;
    const checkboxes = document.querySelectorAll(
      "input[type=checkbox]"
    ) as NodeListOf<HTMLInputElement>;
    const checkbox = elementClick.children[0];
    elementClick.classList.toggle("form__input-checks_checked");
    checkboxes.forEach((el) => {
      const valueFilter = el.id;
      const typeFilter = el.closest("div")!.id;
      if (el.id === checkbox.id) {
        filtersObject = {
          ...filtersObject,
          [typeFilter]: {
            ...filtersObject[typeFilter],
            [valueFilter]: !filtersObject[typeFilter][valueFilter],
          },
        };
      }
    });
    localStorage.setItem('FilterObject', JSON.stringify(filtersObject));
    makeOurToys(filtersObject);
  }
});

sortField.select.addEventListener('change', (e) => {
  const elementClick = e.target as HTMLSelectElement;
  const selectedOption: number = elementClick.options.selectedIndex;
  localStorage.setItem('sortFilter', String(selectedOption));
  const dataObject = localStorage.getItem('FilterObject') as string;
  const filtersObject = JSON.parse(dataObject) as Toys;
  makeOurToys(filtersObject);
})
// fix - где автофокус? доделать
header.search.addEventListener('keyup', function (e) {
  const element = e.target as HTMLInputElement;
  const filter = new RegExp(element.value, 'i')
  const rightToys = dataToys.filter(el => filter.test(el.name));
  if(!rightToys.length) { AlertNoCoincidence()}
  //else {makeOurToys(rightToys) }
})

form.buttonReset.addEventListener('click', () => {
  localStorage.setItem('FilterObject', JSON.stringify(toysFilters));
  localStorage.setItem('sortFilter', '-1');
  localStorage.setItem('favoriteLength', '0')
  makeOurToys(toysFilters);
})

//fix - срабатывает как reset
form.buttonFilter.addEventListener('click', () => {
  localStorage.setItem('FilterObject', JSON.stringify(toysFilters))
  makeOurToys(toysFilters);
})

function makeOurToys (filtersObject): void {
  const index = localStorage.getItem('sortFilter') as string;
  toys.clear();
  const filterResult = filterToys(filtersObject, dataToys);
  const sortResult = sortToys(index, filterResult)
  toys = new ToysContainer(sortResult);
}

console.log('125/200 буду дорабатывать поиск и кнопки сброса фильтров, локал стор отрисовку при перезагрузке. требования к вёрстке +10 Карточка игрушки +10 Добавление игрушек в избранное +20 Сортировка +20 Фильтры в указанном диапазоне от и до +0 Фильтры по значению +30 По фильтрам разного типа +20 Сброс фильтров +0 Сохранение настроек в local storage +5 (сохраняются но не отрисовываются при перезагрузке, кнопка работает) Поиск +10(осталась отрисовка) Дополнительный функционал на выбор +0')