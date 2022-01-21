import { header } from "./DOM/header";
import { footer } from "./DOM/footer";
import { garage, createCars } from "./DOM/garage-page";
import { winners } from "./DOM/winners-page";
import { NAVITEMS } from "./DOM/navigation";
import { GetAllCars } from "./create-car";
import * as carTypes from "./data-car/data-Icars";
import {CreateCar, DeleteCar, GetOneCar, ChangeCar,  DriveAllCars, StopAllCars, StopCar, DriveCar } from './create-car';
import { DisabledButtons, DisabledButton } from './additional-func';

export function createPage(page: HTMLElement = garage.node): void {
    document.body.append(header.node);
    document.body.append(page);
    document.body.append(footer.node);
}

//navigation
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

//buttons CREATE, CHANGE, GENERATE 100 CARS
createCars.node.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  if (!elementClick.id) return;
  else {
    if (elementClick.id === 'create' || elementClick.id === 'change') {
      const inputName = document.querySelector(`[data-name=${elementClick.id}]`) as HTMLInputElement;
      const inputColor = document.querySelector(`[data-color=${elementClick.id}]`) as HTMLInputElement;
      const name = inputName.value;
      const color = inputColor.value;
      if(elementClick.id === 'create') {
        if(!name) inputName.style.border = '2px solid red';
        else {
          inputName.style.border = '';
          CreateCar(name, color);
        } 
      } else if (elementClick.id === 'change') {
        const idCar = elementClick.dataset.carID?.slice(1);
        ChangeCar(idCar!, name, color);
        elementClick.setAttribute('disabled', 'true');
        //StopPendingInputs(idCar!, inputName, inputColor);   //how reset listener
      }
      inputName.value = '';
    } else if (elementClick.id === 'create100') {
      console.log('100')                                    //make this
    }
  }
})

//buttons UPDATE, DELETE, START, STOP
garage.garage.addEventListener('click', async (e) => {
  const elementClick = e.target as HTMLElement;
  const parent = elementClick.closest('.wrapper');
  const idCar = (parent) ? parent!.id : null;
  if(idCar === null) return;
  else{
    if (elementClick.dataset.action === 'delete') {
      parent?.remove();
      DeleteCar(idCar!);
    } else if (elementClick.dataset.action === 'update') {
      const changeButton = document.getElementById('change');
      changeButton!.dataset.carID = `c${idCar}`;
      GetOneCar(idCar!);
    } else if (elementClick.dataset.action === 'start') {
      DriveCar(idCar);
      DisabledButtons(elementClick);
      DisabledButton('race');
    } else if (elementClick.dataset.action === 'reset') {
      StopCar(idCar);
      DisabledButtons(elementClick);
      DisabledButton('race');
    }
  }
})

//RASE BUTTONS
garage.race.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  if (elementClick.id === 'race') {
    DriveAllCars();
    DisabledButtons(elementClick);
  } else if (elementClick.id === 'reset') {
    StopAllCars();
    DisabledButtons(elementClick);
  }
})
