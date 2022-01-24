import {DomElement} from '../create-element';

export class TableLine {
  public node: HTMLElement
  public wins: HTMLElement
  public time: HTMLElement
  constructor(number: number| string, car: string, name: string, winsCount: string | number, bestTime: number | string, id?: string, ) {
    const wrapper = new DomElement('div', 'flex_table', '');
    const numberLine = new DomElement('div', '', `${number}`, '', wrapper.node);
    const carImg = new DomElement('div', '', car, '', wrapper.node);
    const carName = new DomElement('div', '', name, '', wrapper.node);
    const count = new DomElement('div', '', `${winsCount}`, '', wrapper.node);
    const time = new DomElement('div', '', `${bestTime}`, '', wrapper.node);

    this.node = wrapper.node;
    this.wins = count.node;
    this.time = time.node;
  }
}

class Winners {
  public node: HTMLElement
  public table: HTMLElement
  public title: HTMLElement
  public winsSort: HTMLElement
  public timeSort: HTMLElement
  public tableHeader: HTMLElement
  constructor() {
    const main = new DomElement('main', '', '');
    const wrapper = new DomElement('div', '', '', '', main.node);
    const title = new DomElement('h2', '', 'Winners (1)', '', wrapper.node);
    const pageCount = new DomElement('h3', '', 'Page #1', '', wrapper.node);
    const table = new DomElement('div', '', '', '', wrapper.node);
    const tableHeader = new TableLine('№', 'Car', 'Name', 'Wins number', 'Best time');
    const winsSort = new DomElement('button', '', '@', '', tableHeader.wins);
    winsSort.node.setAttribute('id', 'winsSort');
    const timeSort = new DomElement('button', '', '@', '', tableHeader.time);
    timeSort.node.setAttribute('id', 'timeSort');
    table.node.append(tableHeader.node);
    const tableBody = new DomElement('div', '', '', '', table.node);
    tableBody.node.dataset.table = 'table';
    const buttonsPug = new DomElement('div', '', '', '', wrapper.node);
    const prevButton = new DomElement('button', '', 'Prev', '', buttonsPug.node);
    const nexstButton = new DomElement('button', '', 'Next', '', buttonsPug.node);
  
    this.node = main.node;
    this.tableHeader = tableHeader.node;
    this.table = tableBody.node;
    this.title = title.node;
    this.winsSort = winsSort.node;
    this.timeSort = timeSort.node;
  }

  changeTitle(num: number) {
    this.title.innerHTML = `Winners (${num})`
  }
}

export const winners = new Winners();