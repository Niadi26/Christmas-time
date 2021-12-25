import { DomElement } from "./createElement";


export class TreeContainer {
  public node: HTMLElement;
  constructor(bgNumber: number | string = 1, treeNumber: number | string = 1) {
    const parent = new DomElement('div', 'tree', '', 'main');
    parent.node.onload = () => {  
      parent.node.style.backgroundImage = `url('./assets/bg/${bgNumber}.webp')`;
    }
    const tree = new DomElement('div', '', '', '', parent.node);
    tree.node.onload = () => {  
      tree.node.style.backgroundImage = `url('./assets/tree/${treeNumber}.webp')`;
    }
    
    this.node = parent.node as HTMLElement;
  }
}