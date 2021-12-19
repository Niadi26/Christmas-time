import './style.sass';
import { dataToys } from './modules/data-toys';
import { favoriteToys } from './modules/toys-container';
import { Header } from './modules/header';
import { Form } from './modules/form';
import { ToysContainer } from './modules/toys-container';
import { DomElement } from './modules/createElement';
import { AlertLimit } from './modules/warning';

const header = new Header(favoriteToys);
const form =  new Form();
const toys = new ToysContainer(dataToys);

toys.node.addEventListener('click', (e) => {
  const elementClick = e!.target as HTMLElement;
  const parentElementClick = elementClick.parentElement as HTMLElement;
  if (elementClick.classList.contains('zzz') || parentElementClick.classList.contains('zzz')) {

    const num = parentElementClick.id;
    if (parentElementClick.classList.contains('favorite')) {
      parentElementClick.classList.remove('favorite');
      const indexInFavorite = favoriteToys.indexOf(num);
      favoriteToys.splice(indexInFavorite, 1);
    } else {
        if (favoriteToys.length == 4) {
          AlertLimit(parentElementClick);
          return
        }
      parentElementClick.classList.add('favorite');
      favoriteToys.push(num);
    }
    header.changeFavorite(String(favoriteToys.length));
  }
})