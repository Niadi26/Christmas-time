import { DomElement } from "./createElement"

export class StartPage {
  public node: HTMLElement;
  public buttonGame: HTMLElement;
  public buttonTree: HTMLElement;
  constructor() {
    const startContainer = new DomElement('div', 'start__wrapper', '', 'main');
    const nameOfGame = new DomElement('div', 'start__name', '', '', startContainer.node);
    const textOfGame = new DomElement('h1', 'start_txt', 'Помогите бабушке нарядить елку', '', nameOfGame.node);
    const buttonOfGame = new DomElement('button', 'start__button', 'Начать игру', '', startContainer.node);
    const buttonOfTree = new DomElement('button', 'start__button', 'Ёлочка', '', startContainer.node);

    this.node = startContainer.node as HTMLElement;
    this.buttonGame = buttonOfGame.node as HTMLElement
    this.buttonTree = buttonOfTree.node as HTMLElement
  }
  
  delete(): void {
    this.node.remove()
  }

}
