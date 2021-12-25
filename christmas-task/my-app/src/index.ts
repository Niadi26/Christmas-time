import "./style.sass";   
import { toysFilters } from "./modules/data-flters";
import { favoriteToys } from "./modules/toys-container";
import { StartPage } from "./modules/start-page";
import { ToysPage} from "./modules/toys-page";
import { TreePage } from "./modules/tree-page"

function setLocalStorage () {
  if (!localStorage.getItem('FilterObject')) {
    localStorage.setItem('FilterObject', JSON.stringify(toysFilters))
  }
  if (!localStorage.getItem('sortFilter')) {
    localStorage.setItem('sortFilter', '-1')
  }
  if (!localStorage.getItem('favoriteToys')) {
    localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys))
  }
}
setLocalStorage()
makePage()

export function makePage():void {
  const pageStart = new StartPage();

  pageStart.buttonGame.addEventListener('click', () => {
    pageStart.delete();
    const pageToys = new ToysPage();
  })

  pageStart.buttonTree.addEventListener('click', () => {
    pageStart.delete();
    const pageTree = new TreePage();
  })
}

