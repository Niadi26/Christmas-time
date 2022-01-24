import { DomElement } from '../create-element';

class Footer {
  public node: HTMLElement;

  constructor() {
    const footer = new DomElement('footer', '', '');
    const wrapper = new DomElement('div', '', '', '', footer.node);
    const school = new DomElement('a', '', 'Rs-school', '', wrapper.node);
    const year = new DomElement('a', '', '2022', '', wrapper.node);
    const git = new DomElement('a', '', 'gitHub', '', wrapper.node);
    school.node.setAttribute('href', 'https://rs.school');
    git.node.setAttribute('href', 'https://github.com/Niadi26');
    school.node.setAttribute('target', 'blank');
    git.node.setAttribute('target', 'blank');

    this.node = footer.node;
  }
}

export const footer = new Footer();
