interface typeFilter {string: boolean}
/*
interface IFilters: {[key: string]: {[key: string]: boolean}}

interface IFilters {
    form: {
      bell: boolean,
      ball: boolean,
      cone: boolean,
      star: boolean,
      snow: boolean,
      figure: boolean,
    },
    color: {
      white: boolean,
      yellow: boolean,
      red: boolean,
      blue: boolean,
      green: boolean
    },
    size: {
      big: boolean,
      medium: boolean,
      small: boolean
    },
    favorite: boolean,
    count: [string, string],
    string: [string, string],
  }
  */
  export const toysFilters = {
    shape: {
      bell: false,
      ball: false,
      cone: false,
      snow: false,
      figure: false,
     },
    color: {
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false
    },
    size: {
      big: false,
      medium: false,
      small: false
    },
    favorite: {
    favorite: false,   
    }, 
    count: ['1', '12'],
    string: ['1940', '2021'],
  }