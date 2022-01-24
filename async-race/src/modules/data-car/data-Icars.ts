export interface ICar {
  name: string;
  color: string;
  id: string;
}

export type Cars = ICar[];

export interface ICarCreate {
  name: string;
  color: string;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IEngineResponse {
  data: IEngine;
  status: number | string | undefined;
}

export interface IEngineDrive {
  success: boolean;
}

export interface IRaceResult {
  id: string;
  time: number;
  status: number | string | undefined;
}

export type ResultRace = IRaceResult[];

export interface IWinner {
  id: string;
  wins: number;
  time: number;
}

export interface IWinnerCreate {
  id?: string;
  wins: number;
  time: string;
}

export type Winners = IWinner[];

export interface IqueryParametr {
  key: string;
  value: string | number;
}

export type queryParametrs = IqueryParametr[] | []
