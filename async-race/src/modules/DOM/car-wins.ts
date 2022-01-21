import {DomElement} from '../create-element';

export function Winner (name: string): void {
    const alert = new DomElement('div', 'message-wrapper', '', '.body')
    const alertTxt = new DomElement ('p', '', `${name} wins!`, '', alert.node);
    setTimeout(()=> alert.delete(), 3000);
}