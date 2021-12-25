import { DomElement } from "./createElement";

enum TreeSettingsNumbers {
    three = 6,
    bg = 10,
    garland = 6,
}

class Setting {
  public node: HTMLElement;
  public imputsContainer: HTMLElement;
  constructor(settingsCount: number, settingsTitle: string, settingsType: string) {
    const parent = new DomElement('div', '', '');
    const title = new DomElement('h3', 'settings__input-titles', settingsTitle, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
    inputsCont.node.setAttribute('id', `${settingsType}`)
    for (let i = 1; i <= settingsCount; i++) {
      const label = new DomElement('label', `settings__input-${settingsType}`, '', '', inputsCont.node);      
      label.node.onload = () => {  
        label.node.style.backgroundImage = `url('./assets/toys/${i}.webp')`;
      }
      label.node.setAttribute('for', `${settingsType}${i}`);
      const input = new DomElement('input', '', '', '', label.node);
      input.node.setAttribute('type', 'checkbox');
     input.node.setAttribute('id', `${settingsType}${i}`);
    }

    this.node = parent.node as HTMLElement;
    this.imputsContainer = inputsCont.node as HTMLElement;
  }
}

const settingTree = new Setting(TreeSettingsNumbers.three, 'Выберите  ёлку', 'tree')
const backgroundTree = new Setting(TreeSettingsNumbers.bg, 'Выберите фон', 'background')
const garlandTree = new Setting(TreeSettingsNumbers.garland, 'Гирлянда' ,'garland')


export class SettingsContainer {
    public node: HTMLElement;
  constructor() {
    const form = new DomElement('form', 'form', '', 'main');
    const music = new DomElement('button', '', '', '', form.node);
    const snow = new DomElement('button', '', '', '', form.node);
    form.node.append(settingTree.node);
    form.node.append(backgroundTree.node);
    form.node.append(garlandTree.node);
    const settingsRecet = new DomElement('button', '', 'Сбросить настройки', '', form.node)
    
    this.node = form.node as HTMLElement;
  }
}