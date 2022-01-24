import { DomElement } from '../create-element';

export function showWinner(name: string): void {
  const alert = new DomElement('div', 'message-wrapper', '', '.body');
  const alertTxt = new DomElement('p', '', `${name} wins!`, '', alert.node);
  setTimeout(() => alert.delete(), 3000);
}

export function pageAttention(page: string): void {
  const alert = new DomElement('div', 'message-wrapper', '', '.body');
  const alertTxt = new DomElement('p', '', `Its ${page} page!`, '', alert.node);
  setTimeout(() => alert.delete(), 1000);
}
