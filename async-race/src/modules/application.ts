import { header } from "./DOM/header";
import { footer } from "./DOM/footer";
import { garage, createCars } from "./DOM/garage-page";
import { winners } from "./DOM/winners-page";
import { NAVITEMS } from "./DOM/navigation";
import { GetAllCars } from "./create-car";
import * as carTypes from "./data-car/data-Icars";
import {CreateCar, DeleteCar, GetOneCar, ChangeCar, StartEngine,  STATUS } from './create-car';
import { StopPendingInputs, StartAnimation, StopAnimation, ResetAnimation, DisabledButtons } from './additional-func';

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
        ChangeCar('1', name, color);                        //how get id???     -ls
        elementClick.setAttribute('disabled', 'true');
        StopPendingInputs('1', inputName, inputColor);      //how get id???
      }
      inputName.value = '';
    } else if (elementClick.id === 'create100') {
      console.log('100')                                    //make this
    }
  }
})

//buttons UPDATE, DELETE, START, STOP
garage.node.addEventListener('click', async (e) => {
  const elementClick = e.target as HTMLElement;
  const parent = elementClick.closest('.wrapper');
  const idCar = parent!.id;
  if(idCar === null) return;
  else{
    if (elementClick.dataset.action === 'delete') {
      parent?.remove();
      DeleteCar(idCar!);
    } else if (elementClick.dataset.action === 'update') {
      GetOneCar(idCar!);
    } else if (elementClick.dataset.action === 'start') {
      const dataStart = await StartEngine(idCar, STATUS.started) as unknown as carTypes.IEngineResponse;
      DisabledButtons(elementClick)
      const dataDrive = StartEngine(idCar, STATUS.drive);
      StartAnimation(idCar, dataStart.data);
      if((await dataDrive).status === 500) {
        StopAnimation(idCar)};
    } else if (elementClick.dataset.action === 'reset') {
      StartEngine(idCar, STATUS.stopped);
      ResetAnimation(idCar);
      DisabledButtons(elementClick)
    }
  }
})

