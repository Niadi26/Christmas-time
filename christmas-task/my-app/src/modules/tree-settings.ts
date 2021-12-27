import { DomElement } from "./createElement";

enum TreeSettingsNumbers {
    three = 6,
    bg = 10,
    garland = 6,
}

export const settingsTree = {
  tree: 1,
  bg: 1,
  garland: 1,
  sound: false,
  snow: false,
}

class Setting {
  public node: HTMLElement;
  public imputsContainer: HTMLElement;
  constructor(settingsCount: number, settingsTitle: string, settingsType: string) {
    const parent = new DomElement('div', 'form__items', '');
    const title = new DomElement('h3', 'form__titles', settingsTitle, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
    //inputsCont.node.setAttribute('id', `${settingsType}`)
    for (let i = 1; i <= settingsCount; i++) {
      const label = new DomElement('label', `settings__input-${settingsType}`, '', '', inputsCont.node);
      const img = new Image();
      img.src = `./assets/${settingsType}/${i}.webp`;      
      img.onload = () => {  
        label.node.style.backgroundImage = `url('${img.src}')`;

      }
      label.node.setAttribute('data-num', `${i}`);
      label.node.setAttribute('data-type', `${settingsType}`);
      const input = new DomElement('input', '', '', '', label.node);
      input.node.setAttribute('type', 'radio');
      label.node.setAttribute('value', `${i}`);
      label.node.setAttribute('name', `${settingsType}`);
    }

    this.node = parent.node as HTMLElement;
    this.imputsContainer = inputsCont.node as HTMLElement;
  }
}

const settingTree = new Setting(TreeSettingsNumbers.three, 'Выберите  ёлку', 'tree')
const backgroundTree = new Setting(TreeSettingsNumbers.bg, 'Выберите фон', 'bg')
const garlandTree = new Setting(TreeSettingsNumbers.garland, 'Гирлянда' ,'garland')


export class SettingsContainer {
    public node: HTMLElement;
  constructor() {
    const form = new DomElement('form', 'tree__form', '', 'main');
    const music = new DomElement('button', 'form__sound', '', '', form.node);
    const snow = new DomElement('button', 'form__snow', '', '', form.node);
    form.node.append(settingTree.node);
    form.node.append(backgroundTree.node);
    form.node.append(garlandTree.node);
    const settingsRecet = new DomElement('button', 'form__button', 'Сбросить настройки', '', form.node)
    
    this.node = form.node as HTMLElement;

    music.node.addEventListener('click', () => {
      debugger
      const audio = new Audio();
      audio.src = './assets/audio/audio.mp3';
      audio.currentTime = 0;
      audio.play()
    })
  }
}