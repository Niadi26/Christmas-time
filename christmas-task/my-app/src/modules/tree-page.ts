import { SettingsContainer, makeSnow } from "./tree-settings";
import { TreeContainer } from "./tree-container";
import { FavoriteContainer } from "./tree-toys";
import { favoriteToys } from "./toys-container";
import { dataToys } from "./data-toys";   
import { Header } from "./header";
import { DomElement } from "./createElement";

const loadStringSettings = localStorage.getItem('settingsTree') as string;
export const loadSettings = JSON.parse(loadStringSettings);

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
          makeGarland(treeImg!, valueSetting);
        }
      }
      })

      if(loadSettings.sound) {
        settings.music.classList.add('form__input-checks_checked');
        document.addEventListener('onload', () => {
        const audio = new Audio();
        audio.src = './assets/audio/audio.mp3';
        audio.currentTime = 0;
        audio.play();
        })
      }
      if(loadSettings.snow) {
        settings.snow.classList.add('form__input-checks_checked');
        const timer = setInterval(makeSnow, 300);
      }
  }

  delete(): void {
    this.header.remove()
    this.settings.remove()
    this.tree.remove()
    this.favorite.remove()
  }
}

const garland = [
  6,
  8,
  12,
  16,
  18,
]
let container: DomElement;

function makeGarland(parent: HTMLElement, condition?: string):void {
  if(container) container.node.innerHTML = '';
  if(condition == '1') return
  else {
    container = new DomElement('div', 'garland', '', '', parent );
    for(let u = 0; u < garland.length; u++) { 
      const ul = new DomElement('ul', 'garland__thread', '', '', container.node);
      ul.node.style.top = 100 * u + 'px';
      if(condition == '6') {
        for(let i = 0; i < +garland[u]; i++ ) {
          const li = new DomElement('li', 'garland__ball', '', '', ul.node);
        }
      } else if(condition == '5') {
        for(let i = 0; i < +garland[u]; i++ ) {
          const li = new DomElement('li', 'garland__ball-green', '', '', ul.node);
        }
      } else if(condition == '4') {
        for(let i = 0; i < +garland[u]; i++ ) {
          const li = new DomElement('li', 'garland__ball-red', '', '', ul.node);
        }
      } else if(condition == '3') {
        for(let i = 0; i < +garland[u]; i++ ) {
          const li = new DomElement('li', 'garland__ball-blue', '', '', ul.node);
        }
      } else if(condition == '2') {
        for(let i = 0; i < +garland[u]; i++ ) {
          const li = new DomElement('li', 'garland__ball-yellow', '', '', ul.node);
        }
      }
    }
  }
}
