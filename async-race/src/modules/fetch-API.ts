import * as carTypes from "./data-Icars";

const homeURL = 'http://127.0.0.1:3000';

const queryParametrs = (parametrs: carTypes.queryParametrs = []): string => {
  return parametrs.length ? `?${parametrs.map((item) => `${item.key}=[${item.value}]`).join('&')}` : '';
}

export const getCars = async (path: string, parametrs: carTypes.queryParametrs = []) =>{
  try {
    const response = await fetch(`${homeURL}${path}${queryParametrs(parametrs)}`);
    const data = await response.json();
    return data;
  } catch(error) {
     console.log(error)
  }
} 

export const getCar = async (path: string, id: number) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}`);
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error)
  }
} 

export const createCar = async (path: string, body: carTypes.ICarCreate) =>{
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

export const deleteCar = async (path: string,id: number) =>{
  try {
    const response = await fetch(`${homeURL}${path}/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch(error) {
     console.log(error)
  }
}

export const updateCar = async (path: string, id: number, body: carTypes.ICar | carTypes.IWinner) =>{
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

export const startCar = async (path: string, id: number,  parametrs: carTypes.queryParametrs) =>{
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

export const switchCar = async (path: string, id: number,  parametrs: carTypes.queryParametrs) =>{
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