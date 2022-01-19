export interface ICar {
    'name': string,
    'color': string,
    'id': number,
}
export interface ICarCreate {
    'name': string,
    'color': string
}

export type Cars = ICar[];

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

export type Winners = IWinner[]

export type queryParametrs = IqueryParametr[] | [];

export interface IqueryParametr {
    key: string,
    value: string,
}