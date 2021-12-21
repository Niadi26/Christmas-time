import {DomElement} from './createElement';
import { toysFilters } from './data-flters';

const SHAPESNAME = [
  'bell',
  'ball',
  'cone',
  'snow',
  'figure',
]

const COLORSNAME = [
  'white',
  'yellow',
  'red',
  'blue',
  'green',
]

const SIZENAME = [
  'big',
  'medium',
  'small',
]

const FAVORITENAME = [
  'favorite'
]

const COUNTCOUNTS = [
    1,
    12
]

const YEARCOUNTS = [
    1940,
    2021
]

//take array whith names of filters (N: red, green) and type of filter (N: color)
class CheckboxFilter {
    public node: HTMLElement;
    public imputsContainer: HTMLElement;
  constructor(filtersName, filtersTitle: string, filtersType: string) {
    const parent = new DomElement('div', '', '');
    const title = new DomElement('h3', 'form__input-titles', filtersTitle, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
    inputsCont.node.setAttribute('id', `${filtersType}`)
    const inputsItems = filtersName.forEach((el) => {
        const label = new DomElement('label', `form__input-checks form__input-${el}`, '', '', inputsCont.node);
        label.node.setAttribute('for', el);
        const input = new DomElement('input', '', '', '', label.node);
        input.node.setAttribute('type', 'checkbox');
        input.node.setAttribute('id', el);
    })

    this.node = parent.node as HTMLElement;
    this.imputsContainer = inputsCont.node as HTMLElement;
  }
}

//take array whith min and max counts of filter (N: 1990, 2021) and type of filter (N: year)
class CountFilter {
    public node: HTMLElement;
  constructor(filtersCount, filtersTitle: string, filtersType: string) {
    const parent = new DomElement('div', '', '');
    const title = new DomElement('h3', 'form__input-titles', filtersTitle, '', parent.node);
    const inputsCont = new DomElement('div', 'form__select-container', '', '', parent.node);
    const inputsItems = filtersCount.forEach((el) => {
      const input = new DomElement('input', '', '', '', inputsCont.node);
      input.node.setAttribute('type', 'range');
      input.node.setAttribute('min', '1');
      input.node.setAttribute('step', '1');
      input.node.setAttribute('max', '12');
      input.node.setAttribute('value', el);
    })
    const inputsValues = new DomElement('div', '', '', '', parent.node);
    const inputsMin = new DomElement('div', '', '1', '', inputsValues.node);
    const inputsMax = new DomElement('div', '', '2', '', inputsValues.node);

    /*const sliders = document.querySelectorAll('input[type="range"]') as NodeListOf<HTMLInputElement>;

    sliders[0].addEventListener('input', (e) => {
    if(+sliders[0].value > +sliders[1].value){
        sliders[1].value = sliders[0].value;
      }
    });

    sliders[1].addEventListener('input', (e) => {
    if(+sliders[1].value < +sliders[0].value){
        sliders[0].value = sliders[1].value;
      }
    });

    sliders.forEach((slider) => {
      slider.addEventListener('change', () => {
        console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
      })
    });
*/
    this.node = parent.node as HTMLElement;
  }
}

const formFilter = new CheckboxFilter(SHAPESNAME, 'Форма', 'shape');
const colorFilter = new CheckboxFilter(COLORSNAME, 'Цвет', 'color');
const sizeFilter = new CheckboxFilter(SIZENAME, 'Размер', 'size');
const favoriteFilter = new CheckboxFilter(FAVORITENAME, 'Любимое', 'favorite');
//const countFilter = new CountFilter(COUNTCOUNTS, 'Количество экземпляров', 'count');
//const yearFilter = new CountFilter(YEARCOUNTS, 'Год приобретения', 'year');


class FilterField {
    public node: HTMLElement;
    constructor() {
      const filtrCont = new DomElement('div', 'form__items', '');
      const title = new DomElement('h2', 'form__titles', 'Фильтры', '', filtrCont.node);
      this.node = filtrCont.node as HTMLElement;
    }
  }

export const filterField = new FilterField();

  filterField.node.append(formFilter.node)
  filterField.node.append(colorFilter.node)
  filterField.node.append(sizeFilter.node)
  filterField.node.append(favoriteFilter.node)
  //filterField.node.append(countFilter.node)
  //filterField.node.append(yearFilter.node)
