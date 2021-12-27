import {DomElement} from './createElement';

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

//take array whith names of filters (N: red, green) and type of filter (N: color)
class CheckboxFilter {
    public node: HTMLElement;
    public imputsContainer: HTMLElement;
  constructor(filtersName: Array<string>, filtersTitle: string, filtersType: string) {
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

const formFilter = new CheckboxFilter(SHAPESNAME, 'Форма', 'shape');
const colorFilter = new CheckboxFilter(COLORSNAME, 'Цвет', 'color');
const sizeFilter = new CheckboxFilter(SIZENAME, 'Размер', 'size');
const favoriteFilter = new CheckboxFilter(FAVORITENAME, 'Любимое', 'favorite');


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
