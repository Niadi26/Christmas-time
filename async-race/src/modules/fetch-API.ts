import * as carTypes from "./data-car/data-Icars";

const homeURL = "http://127.0.0.1:3000";

const queryParametrs = (parametrs: carTypes.queryParametrs = []): string => {
  return parametrs.length
    ? `?${parametrs.map((item) => `${item.key}=${item.value}`).join("&")}`
    : "";
};

export const getCars = async (
  path: string,
  parametrs: carTypes.queryParametrs = []
) => {
  try {
    const response = await fetch(
      `${homeURL}${path}${queryParametrs(parametrs)}`
    );
    const allCars = response.headers.get("X-Total-Count");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCarsCount = async (
  path: string,
  parametrs: carTypes.queryParametrs = []
) => {
  try {
    const response = await fetch(
      `${homeURL}${path}${queryParametrs(parametrs)}`
    );
    const allCars = response.headers.get("X-Total-Count");
    return allCars;
  } catch (error) {
    console.log(error);
  }
};

export const getCar = async (path: string, id: string) => {
  try {
    const response = await fetch(`${homeURL}${path}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createCar = async (
  path: string,
  body: carTypes.ICarCreate | carTypes.IWinnerCreate
) => {
  try {
    const response = await fetch(`${homeURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = async (path: string, id: number | string) => {
  try {
    const response = await fetch(`${homeURL}${path}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCar = async (
  path: string,
  id: string,
  body: carTypes.ICarCreate | carTypes.IWinnerCreate
) => {
  try {
    const response = await fetch(`${homeURL}${path}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const engineCar = async (
  path: string,
  parametrs: carTypes.queryParametrs
) => {
  let response;
  try {
    response = await fetch(`${homeURL}${path}${queryParametrs(parametrs)}`, {
      method: "PATCH",
    });
    const data = await response.json();
    const result = {
      data: data,
      status: response.status,
    };
    return result;
  } catch (error) {
    if (response?.status === 500) {
      return { status: response.status };
    }
  }
};
