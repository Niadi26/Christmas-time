import { DomElement } from "./createElement";
import { loadSettings } from "./tree-page"

enum TreeSettingsNumbers {
    three = 6,
    bg = 10,
    garland = 6,
}

export const settingsTree = {
  tree: 1,
  bg: 1,
  garland: 1,
}
export let timer;
class Setting {
  public node: HTMLElement;
  public imputsContainer: HTMLElement;
  constructor(settingsCount: number, settingsTitle: string, settingsType: string) {
    const parent = new DomElement('div', 'form__items', '');
    const title = new DomElement('h3', 'form__titles', settingsTitle, '', parent.node);
    const inputsCont = new DomElement('div', '', '', '', parent.node);
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
    public music: HTMLElement;
    public snow: HTMLElement;
  constructor() {
    const form = new DomElement('form', 'tree__form', '', 'main');
    const music = new DomElement('p', 'form__sound', '', '', form.node);
    const snow = new DomElement('p', 'form__snow', '', '', form.node);
    form.node.append(settingTree.node);
    form.node.append(backgroundTree.node);
    form.node.append(garlandTree.node);
    const settingsRecet = new DomElement('button', 'form__button', 'Сбросить настройки', '', form.node)
    
    this.node = form.node as HTMLElement;
    this.music = music.node as HTMLLIElement;
    this.snow = snow.node as HTMLLIElement;

    const audio = new Audio();
    audio.src = './assets/audio/audio.mp3';
    music.node.addEventListener('click', () => {
      if(audio.paused) {
        music.node.classList.toggle('form__input-checks_checked');
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
        music.node.classList.toggle('form__input-checks_checked');
      }
    })
    snow.node.addEventListener('click', () => {
      snow.node.classList.toggle('form__input-checks_checked');
      if(!timer) {
        timer = setInterval(makeSnow, 300);
      }  else {
        timer = clearInterval(timer);
      }
    })

    settingsRecet.node.addEventListener('click', () => {
      localStorage.setItem('settingsTree', JSON.stringify(settingsTree));
    })
  }
}

export function makeSnow(): void {
  const parent = document.getElementById('changeBg') as HTMLElement;
  const snowflake = new DomElement('div', 'snowflake', '', '', parent);
  snowflake.node.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.node.style.opacity = String(Math.random());

  setTimeout(() => {snowflake.delete()}, 10000)
}