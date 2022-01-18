export interface ICar {
    'name': string,
    'color': string,
    'id'?: number,
}

export type Cars = [ICar];

export interface IEngine {
    "velocity": number,
    "distance": number,
}

export interface IEngineGrive {
    "success": boolean
}

export interface IWinner {
    "id"?: number,
    "wins": number,
    "time": number,
}

export type Winners = [IWinner]

export type queryParametrs = [{[key: string]: string}] | [];