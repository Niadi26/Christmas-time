import '/style.sass';
import { createPage } from "./modules/application";
import { GetAllCars} from "./modules/create-car";

localStorage.setItem('sortName', 'id');
localStorage.setItem('sortOrder', 'ASC');
localStorage.setItem('garagePage', '1');
localStorage.setItem('winnersPage', '1');
createPage();
GetAllCars();