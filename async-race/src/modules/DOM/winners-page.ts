import { DomElement } from '../create-element';
import { TableLine } from './table-line';

class Winners {
  public node: HTMLElement;

  public table: HTMLElement;

  public title: HTMLElement;

  public tableHeader: HTMLElement;

  public pagesChoose: HTMLElement;

  public page: HTMLElement;

  constructor() {
    const main = new DomElement('main', 'main', '');
    const wrapper = new DomElement('div', '', '', '', main.node);
    const title = new DomElement('h2', '', 'Winners (1)', '', wrapper.node);
    const pageCount = new DomElement('h3', 'page-txt', 'Page #1', '', wrapper.node);
    const table = new DomElement('div', 'table', '', '', wrapper.node);
    const tableHeader = new TableLine(
      '№',
      'Car',
      'Name',
      'Wins',
      'Best time',
    );
    const winsSort = new DomElement('button', 'button-sort', '', '', tableHeader.wins);
    winsSort.node.setAttribute('id', 'winsSort');
    const timeSort = new DomElement('button', 'button-sort', '', '', tableHeader.time);
    timeSort.node.setAttribute('id', 'timeSort');
    table.node.append(tableHeader.node);
    const tableBody = new DomElement('div', '', '', '', table.node);
    tableBody.node.dataset.table = 'table';
    const buttonsPug = new DomElement('div', 'button-wrapper', '', '', wrapper.node);
    const prevButton = new DomElement(
      'button',
      'button_big',
      'Prev',
      '',
      buttonsPug.node,
    );
    prevButton.node.setAttribute('id', 'prev');
    const nextButton = new DomElement(
      'button',
      'button_big',
      'Next',
      '',
      buttonsPug.node,
    );
    nextButton.node.setAttribute('id', 'next');

    this.node = main.node;
    this.tableHeader = tableHeader.node;
    this.table = tableBody.node;
    this.title = title.node;
    this.page = pageCount.node;
    this.pagesChoose = buttonsPug.node;
  }

  changeTitle(num: number) {
    this.title.innerHTML = `Winners (${num})`;
  }

  changePage() {
    const num = localStorage.getItem('winnersPage');
    this.page.innerHTML = `Page #${num}`;
  }
}

export const winners = new Winners();
