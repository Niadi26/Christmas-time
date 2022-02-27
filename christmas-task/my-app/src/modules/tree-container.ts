import { DomElement } from "./createElement";


export class TreeContainer {
  public node: HTMLElement;
  constructor(bgNumber: number | string = 1, treeNumber: number | string = 1) {
    const parent = new DomElement('div', 'tree__container', '', 'main');
    parent.node.setAttribute('id', 'changeBg');
    const bg = new Image();
    bg.src = `./assets/bg/${bgNumber}.webp`
    bg.onload = () => {  
      parent.node.style.backgroundImage = `url('${bg.src}')`;
    }

    const tree = new DomElement('img', 'tree__element', '', '', parent.node);
    tree.node.setAttribute('id', 'changeTree');
    const img = new Image();
    img.src = `./assets/tree/${treeNumber}.webp`
    img.onload = () => {  
      tree.node.setAttribute('src', `${img.src}`);
      tree.node.setAttribute('alt', `tree`);
      tree.node.setAttribute('usemap', '#treemap');
    }

    const map = new DomElement('map', '', '', '', parent.node);
    map.node.setAttribute('name', 'treemap');
    const mapArea = new DomElement('area', '', '', '', map.node);
    mapArea.node.setAttribute('shape', 'poly');
    mapArea.node.setAttribute('alt', 'tree-map');
    mapArea.node.setAttribute('coords', '247,1,500,624,424,780,72,780,0,622');

    this.node = parent.node as HTMLElement;
  }
  
  delete(): void {
    this.node.remove()
  }
}