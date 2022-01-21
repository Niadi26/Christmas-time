export interface ICar {
    'name': string,
    'color': string,
    'id': string,
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

export interface IEngineResponse {
    data: IEngine,
    status: number | string | undefined
}

export interface IRaceResult {
    id: string,
    time: number,
    status: number | string | undefined
}

export type ResultRace = IRaceResult[]

export interface IEngineDrive {
    "success": boolean
}

export interface IWinner {
    "id": number,
    "wins": number,
    "time": number,
}

export interface IWinnerCreate {
    "wins": number,
    "time": number,
}

export type Winners = IWinner[]

export type queryParametrs = IqueryParametr[] | [];

export interface IqueryParametr {
    key: string,
    value: string | number,
}