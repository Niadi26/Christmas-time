import { header } from "./DOM/header";
import { footer } from "./DOM/footer";
import { garage } from "./DOM/garage-page";
import { winners } from "./DOM/winners-page";
import { NAVITEMS } from "./DOM/navigation";
import { GetAllCars} from "./create-car";

export function createPage(page: HTMLElement = garage.node): void {
    document.body.append(header.node);
    document.body.append(page);
    document.body.append(footer.node);
}

header.node.addEventListener('click', (e) => {
    const elementClick = e.target as HTMLElement;
    const parent = document.querySelector('body');
    if(elementClick.id == NAVITEMS[0]) {
      parent!.innerHTML = '';
      createPage();
      GetAllCars();
    } else if(elementClick.id == NAVITEMS[1]) {
      parent!.innerHTML = '';
      createPage(winners.node);
    }
  })