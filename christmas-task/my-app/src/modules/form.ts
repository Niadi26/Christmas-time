import {DomElement} from './createElement';
import { sortField } from './sort-items';
import { filterField } from './filter-items';

export class Form {
  constructor() {
    const form = new DomElement('form', 'form', '', 'main')
    
    form.node.append(filterField.node);
    form.node.append(sortField.node);
    const buttonsCont = new DomElement('div', '', '', '', form.node);
    const buttonFilter = new DomElement('button', '', 'Сброс фильтров', '', buttonsCont.node);
    buttonFilter.node.setAttribute('id', 'filterBtn');
    const buttonReset = new DomElement('button', '', 'Сброс настроек', '', buttonsCont.node)
    buttonReset.node.setAttribute('id', 'resetBtn');
  }
}