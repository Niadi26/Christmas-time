import { DomElement } from "./createElement";


export class TreeContainer {
  public node: HTMLElement;
  constructor(bgNumber: number | string = 1, treeNumber: number | string = 1) {
    const parent = new DomElement('div', 'tree__container', '', 'main');
    const bg = new Image();
    bg.src = `./assets/bg/${bgNumber}.webp`
    bg.onload = () => {  
      parent.node.style.backgroundImage = `url('${bg.src}')`;
    }
    const tree = new DomElement('div', 'tree__element', '', '', parent.node);
    const img = new Image();
    img.src = `./assets/tree/${treeNumber}.webp`
    img.onload = () => {  
      tree.node.style.backgroundImage = `url('${img.src}')`;
    }
    
    this.node = parent.node as HTMLElement;
  }
}