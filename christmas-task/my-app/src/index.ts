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
  if (elementClick.classList.contains('toy') || parentElementClick.classList.contains('toy')) {

    const num = parentElementClick.id;
    if (parentElementClick.classList.contains('toy_favorite')) {
      parentElementClick.classList.remove('toy_favorite');
      const indexInFavorite = favoriteToys.indexOf(num);
      favoriteToys.splice(indexInFavorite, 1);
    } else {
        if (favoriteToys.length == 20) {
          AlertLimit(header.favorite);
          return
        }
      parentElementClick.classList.add('toy_favorite');
      favoriteToys.push(num);
    }
    header.changeFavorite(String(favoriteToys.length));
  }
})