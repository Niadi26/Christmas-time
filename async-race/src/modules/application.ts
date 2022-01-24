import { header } from "./DOM/header";
import { footer } from "./DOM/footer";
import { garage, createCars } from "./DOM/garage-page";
import { winners } from "./DOM/winners-page";
import { NAVITEMS } from "./DOM/navigation";
import { pageAttention } from "./DOM/car-wins";
import { CreateCar, DeleteCar, GetOneCar, ChangeCar, GetAllCars, countMaxGaragePage, countMaxWinnersPage } from "./create-car";
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

//CHANGE GARAGE PAGE
garage.pagesChoose.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  const parent = document.querySelector('[data-garage=garage]');
  const pageCount = localStorage.getItem('garagePage');
  if (elementClick.id === 'prev') {
    const newPageCount = +pageCount! - 1;
    if(newPageCount === 0) {
      pageAttention('first');
      return
    }  
    localStorage.setItem('garagePage', `${newPageCount}`);
    parent!.innerHTML = '';
    GetAllCars();
    garage.changePage();
  } else if (elementClick.id === 'next') {
    const newPageCount = +pageCount! + 1;
    const maxPage = countMaxGaragePage();
    maxPage.then((maxPage) => {
      if(maxPage! < newPageCount) {
        pageAttention('last');
        return
      } else {
        localStorage.setItem('garagePage', `${newPageCount}`);
        parent!.innerHTML = '';
        GetAllCars();
        garage.changePage();
      }
    });
  }
})

//CHANGE WINNERS PAGE  
winners.pagesChoose.addEventListener('click', (e) => {
  const elementClick = e.target as HTMLElement;
  const pageCount = localStorage.getItem('winnersPage');
  if (elementClick.id === 'prev') {
    const newPageCount = +pageCount! - 1;
    if(newPageCount === 0) {
      pageAttention('first');
      return
    }  
    localStorage.setItem('winnersPage', `${newPageCount}`);
    winners.table.innerHTML = '';
    GetAllWinners();
    winners.changePage();
  } else if (elementClick.id === 'next') {
    const newPageCount = +pageCount! + 1;
    const maxPage = countMaxWinnersPage();
    maxPage.then((maxPage) => {
      if(maxPage! < newPageCount) {
        pageAttention('last');
        return
      } else {
        localStorage.setItem('winnersPage', `${newPageCount}`);
        winners.table.innerHTML = '';
        GetAllWinners();
        winners.changePage();
      }
    });
  }
})