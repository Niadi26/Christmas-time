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
    const header = new Header(favoriteToys);
    const settings = new SettingsContainer();
    const tree = new TreeContainer();
    const favorite = new FavoriteContainer(favoriteToys, dataToys);

    this.header = header.node as HTMLElement;
    this.settings = settings.node as HTMLElement
    this.tree = tree.node as HTMLElement
    this.favorite = favorite.node as HTMLElement
  }
  delete(): void {
    this.header.remove()
    this.settings.remove()
    this.tree.remove()
    this.favorite.remove()
  }
}