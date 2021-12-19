import {DomElement} from './createElement';

export function AlertLimit (elementClick: HTMLElement): void {
    const coords = elementClick.getBoundingClientRect();
    const alert = new DomElement('div', '', '', 'main')
    const alertTxt = new DomElement ('p', 'z', 'Лимит 20 игрушек!', '', alert.node);
    alert.node.style.top = coords.top + 'px';
    alert.node.style.left = coords.left + 'px';
    alert.node.style.color = `green`;
    setTimeout(()=> alert.delete(), 1000);
}