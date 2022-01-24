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
