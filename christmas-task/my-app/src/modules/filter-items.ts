import {DomElement} from './createElement';

const FORMSNAME = [
  'bell',
  'ball',
  'cone',
  'star',
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
  constructor(filtersName, filtersType: string) {
    const parent = new DomElement('div', '', '');
    const title = new DomElement('h3', '', filtersType, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
    const inputsItems = filtersName.forEach((el) => {
        const input = new DomElement('input', '', '', '', inputsCont.node);
        input.node.setAttribute('type', 'checkbox');
        input.node.setAttribute('id', el);
        const label = new DomElement('label', el, '', '', inputsCont.node);
        label.node.setAttribute('for', el);
    })

    this.node = parent.node as HTMLElement;
  }
}

//take array whith min and max counts of filter (N: 1990, 2021) and type of filter (N: year)
class CountFilter {
    public node: HTMLElement;
  constructor(filtersCount, filtersType: string) {
    const parent = new DomElement('div', '', '');
    const title = new DomElement('h3', '', filtersType, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
    const inputsItems = filtersCount.forEach((el) => {
      const input = new DomElement('input', '', '', '', inputsCont.node);
      input.node.setAttribute('type', 'range');
      input.node.setAttribute('min', el[0]);
      input.node.setAttribute('step', '1');
      input.node.setAttribute('max', el[1]);
      input.node.setAttribute('value', el);
    })
    const inputsValues = new DomElement('div', '', '', '', parent.node);
    const inputsMin = new DomElement('div', '', '', '', inputsValues.node);
    const inputsMax = new DomElement('div', '', '', '', inputsValues.node);

    this.node = parent.node as HTMLElement;
  }
}

const formFilter = new CheckboxFilter(FORMSNAME, 'Форма');
const colorFilter = new CheckboxFilter(COLORSNAME, 'Цвет');
const sizeFilter = new CheckboxFilter(SIZENAME, 'Размер');
const favoriteFilter = new CheckboxFilter(FAVORITENAME, 'Любимое');
const countFilter = new CountFilter(COUNTCOUNTS, 'Количество экземпляров');
const yearFilter = new CountFilter(YEARCOUNTS, 'Год приобретения');


class FilterField {
    public node: HTMLElement;
    constructor() {
      const filtrCont = new DomElement('div', '', '');
      const title = new DomElement('h2', '', 'Фильтры', '', filtrCont.node);
      this.node = filtrCont.node as HTMLElement;
    }
  }

export const filterField = new FilterField();

  filterField.node.append(formFilter.node)
  filterField.node.append(colorFilter.node)
  filterField.node.append(sizeFilter.node)
  filterField.node.append(favoriteFilter.node)
  filterField.node.append(countFilter.node)
  filterField.node.append(yearFilter.node)