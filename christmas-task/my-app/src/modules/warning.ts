import {DomElement} from './createElement';

export function AlertLimit (elementClick: HTMLElement): void {
    const coords = elementClick.getBoundingClientRect();
    const alert = new DomElement('div', 'alert', '', 'main')
    const alertTxt = new DomElement ('p', '', 'Лимит 20 игрушек!', '', alert.node);
    setTimeout(()=> alert.delete(), 1000);
}

export function AlertNoCoincidence (): void {
    const alert = new DomElement('div', 'alert', '', 'main')
    const alertTxt = new DomElement ('p', '', 'Совпрадений не обнаружено!', '', alert.node);
    setTimeout(()=> alert.delete(), 1000);
}