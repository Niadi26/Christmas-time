import { DomElement } from '../create-element';

export class TableLine {
  public node: HTMLElement;

  public wins: HTMLElement;

  public time: HTMLElement;

  constructor(
    number: number | string,
    car: string,
    name: string,
    winsCount: string | number,
    bestTime: number | string,
    id?: string,
  ) {
    const wrapper = new DomElement('div', 'table_wrapper', '');
    const numberLine = new DomElement('div', 'table__number', `${number}`, '', wrapper.node);
    const carImg = new DomElement('div', 'table_car', car, '', wrapper.node);
    const carName = new DomElement('div', 'table_name', name, '', wrapper.node);
    const count = new DomElement('div', 'table_wins', `${winsCount}`, '', wrapper.node);
    const time = new DomElement('div', 'table_wins', `${bestTime}`, '', wrapper.node);

    this.node = wrapper.node;
    this.wins = count.node;
    this.time = time.node;
  }
}
