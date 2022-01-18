import * as carTypes from "./data-cars";

const homeURL = 'http://127.0.0.1:3000';

const PATH = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
}

const queryParametrs = (parametrs: carTypes.queryParametrs = []) => {
  parametrs.length ? `${parametrs.map((item) => `${item.key}=[${item.value}]`).join('&')}` : '';
}

const getCars = async (path: string, parametrs: carTypes.queryParametrs) =>{
  try {
    const response = await fetch(`${homeURL}${path}${queryParametrs(parametrs)}`);
    const data = await response.json();
    return data
  } catch(error) {
     console.log(error)
  }
} 

const getCar = async (path: string, id: number) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}`);
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
} 

const createCar = async (path: string, body: carTypes.ICar) =>{
  try {
    const response = await fetch(`${homeURL}${path}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
         body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
} 

const deleteCar = async (id: number) =>{
  try {
    const response = await fetch(`${homeURL}${PATH.garage}/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch(error) {
     console.log(error)
  }
}

const updateCar = async (path: string, id: number, body: carTypes.ICar | carTypes.IWinner) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
}

const startCar = async (path: string, id: number,  parametrs: carTypes.queryParametrs) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}${queryParametrs(parametrs)}`, {
      method: "PATCH",
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
}
const switchCar = async (path: string, id: number,  parametrs: carTypes.queryParametrs) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}${queryParametrs(parametrs)}`, {
      method: "PATCH",
    });
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
}