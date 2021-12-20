import {DomElement} from './createElement';

const SORTITEMS: Array<string> = [
    'От А до Я',
    'От Я до А',
    'От старых к новым',
    'От новых к старым'
]

class SortField {
    public node: HTMLElement;
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
  }
}

export const sortField = new SortField(SORTITEMS);