import { DomElement } from "./createElement"

export class StartPage {
  public node: HTMLElement;
  public buttonGame: HTMLElement;
  public buttonTree: HTMLElement;
  constructor() {
    const startContainer = new DomElement('div', '', '', 'main');
    const nameOfGame = new DomElement('div', '', '', '', startContainer.node);
    const textOfGame = new DomElement('h1', '', 'Помогите бабушке нарядить елку', '', nameOfGame.node);
    const buttonOfGame = new DomElement('button', '', 'Начать игру', '', startContainer.node);
    const buttonOfTree = new DomElement('button', '', 'Ёлочка', '', startContainer.node);

    this.node = startContainer.node as HTMLElement;
    this.buttonGame = buttonOfGame.node as HTMLElement
    this.buttonTree = buttonOfTree.node as HTMLElement
  }
  
  delete(): void {
    this.node.remove()
  }

}
