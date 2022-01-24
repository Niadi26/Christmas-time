import { header } from "./DOM/header";
import { footer } from "./DOM/footer";
import { garage, createCars } from "./DOM/garage-page";
import { winners } from "./DOM/winners-page";
import { NAVITEMS } from "./DOM/navigation";
import { CreateCar, DeleteCar, GetOneCar, ChangeCar, GetAllCars } from "./create-car";
import {  DriveAllCars, StopAllCars, StopCar, DriveCar, GetAllWinners, makeChangeWinners } from './create-car';
import { DisabledButtons, DisabledButton, StopPendingInputs, chooseOrder } from './additional-func';
import * as carTypes from "./data-car/data-Icars";

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
      GetAllWinners();
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
        const idCar = localStorage.getItem('changeCarId'); 
        ChangeCar(idCar!, name, color);
        elementClick.setAttribute('disabled', 'true');
        StopPendingInputs(idCar!, inputName, inputColor);
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
      DeleteCar(idCar!);
      const garage = document.querySelector('[data-garage=garage]');
      garage!.innerHTML = '';
      GetAllCars();
    } else if (elementClick.dataset.action === 'update') {
      const changeButton = document.getElementById('change');
      localStorage.setItem('changeCarId', idCar);
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
    DisabledButtons(elementClick);
    raceCar();
  } else if (elementClick.id === 'reset') {
    StopAllCars();
    DisabledButtons(elementClick);
  }
})

async function raceCar () {
    const winner = await DriveAllCars();
    makeChangeWinners(winner!.id, winner!.time);
}

//WINNERS SORT BUTTONS
winners.tableHeader.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  if (elementClick.id === 'winsSort') {
    localStorage.setItem('sortName', 'wins');
    chooseOrder(elementClick);
    GetAllWinners();
  } else if (elementClick.id === 'timeSort') {
    localStorage.setItem('sortName', 'time');
    chooseOrder(elementClick);
    GetAllWinners();
  }
})

