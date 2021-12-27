import { DomElement } from "./createElement";
import { SettingsContainer} from "./tree-settings";
import { TreeContainer } from "./tree-container";
import { FavoriteContainer } from "./tree-toys";
import { favoriteToys } from "./toys-container";
import { Toys, toy, dataToys } from "./data-toys";   
import { Header } from "./header";

export class TreePage {
    public header: HTMLElement;
    public settings: HTMLElement;
    public tree: HTMLElement;
    public favorite: HTMLElement;
  constructor() {
    
    const dataObject = localStorage.getItem('settingsTree') as string;
    const settingsObject = JSON.parse(dataObject);

    const header = new Header(favoriteToys);
    const settings = new SettingsContainer();
    const tree = new TreeContainer( settingsObject.bg, settingsObject.tree);
    const favorite = new FavoriteContainer(dataToys);

    this.header = header.node as HTMLElement;
    this.settings = settings.node as HTMLElement
    this.tree = tree.node as HTMLElement
    this.favorite = favorite.node as HTMLElement


    settings.node.addEventListener('click', (e) => {
      const elementClick = e!.target as HTMLElement;
      if (elementClick.tagName == "LABEL") {
        const dataObject = localStorage.getItem('settingsTree') as string;
        const settingsObject = JSON.parse(dataObject);
        const valueSetting = elementClick.dataset.num;
        const typeSetting = elementClick.dataset.type;
        //elementClick.classList.toggle("form__input-checks_checked");
        settingsObject[typeSetting!] = valueSetting;
        localStorage.setItem('settingsTree', JSON.stringify(settingsObject));
        if(typeSetting == 'tree') {
          const treeImg = document.getElementById('changeTree');
          treeImg!.setAttribute('src', `./assets/tree/${valueSetting}.webp`);
        } else if(typeSetting == 'bg') {
          const bg = document.getElementById('changeBg');
          bg!.style.backgroundImage = `url('./assets/bg/${valueSetting}.webp')`;
        } else if(typeSetting == 'garland') {
          const treeImg = document.getElementById('changeBg');
          treeImg?.append()
        }
      }
      })
  }
  delete(): void {
    this.header.remove()
    this.settings.remove()
    this.tree.remove()
    this.favorite.remove()
  }
}


