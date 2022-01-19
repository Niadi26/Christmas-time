import '/style.sass';
import './images/car.svg';
import { createPage } from "./modules/application";
import { GetAllCars} from "./modules/create-car"
import { Car } from "./modules/data-classCar";

createPage();
GetAllCars()

// const svg = document.createElement('div');
// svg.innerHTML = "<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'width='485.838px' height='485.839px' viewBox='0 0 485.838 485.839' style='enable-background:new 0 0 485.838 485.839;xml:space='preserve'fill=red stroke='#FFFFFF'>"
// document.body.append(svg)

// const svg = new Image();
// svg.src = './images/car.svg';
// document.body.append(svg);
