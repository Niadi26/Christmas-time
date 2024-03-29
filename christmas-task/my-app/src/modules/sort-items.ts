import {DomElement} from './createElement';
import { Toys } from "./data-toys";

const SORTITEMS: Array<string> = [
    'От А до Я',
    'От Я до А',
    'От старых к новым',
    'От новых к старым'
]

class SortField {
    public node: HTMLElement;
    public select: HTMLSelectElement
  constructor(sortList: Array<string>) {
    const sort = new DomElement('div', 'form__items', '');
    const title = new DomElement('h2', 'form__titles', 'Сортировка', '', sort.node);
    const sortSelect = new DomElement('select', 'form__select', '', '', sort.node);
    sortSelect.node.setAttribute('size', '1');
    const sortOptions = sortList.forEach((el)=> {
        const sortItems = new DomElement( 'option', '', el, '', sortSelect.node);
        sortItems.node.setAttribute('value', el);
      })
    this.node = sort.node as HTMLElement;
    this.select = sortSelect.node  as HTMLSelectElement
  }

}

export const sortField = new SortField(SORTITEMS);

export function sortToys (index: string, dataToys: Toys): Toys {
  if(index == '0') {
    dataToys.sort((a, b) => a.name > b.name ? 1 : -1);
  } else if (index == '1') {
    dataToys.sort((a, b) => a.name < b.name ? 1 : -1);
  } else if (index == '2') {
    dataToys.sort((a, b) => a.year > b.year ? 1 : -1);
  }  else if (index == '3') {
    dataToys.sort((a, b) => a.year < b.year ? 1 : -1);
  }
  return dataToys
}

export function addOptionCheck(checktIndex: string): void {
  if (checktIndex == '-1') return
  else {
  const selectedOptionsArray = sortField.select.options;
  const selectedOption = selectedOptionsArray[+checktIndex];
  selectedOption.selected = true;
  }
}