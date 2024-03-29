import { Toys, dataToys } from "./data-toys";
import { AlertNoCoincidence } from './warning';
import { IFilters } from './data-flters'

export const filterShapeToys = function (filtersParametrs: IFilters, dataToys: Toys): Toys {
  let rightToys: Toys = [];
  const toysOnPage: Toys = [];
  const allSerchingToys: Toys = dataToys;
  
  if(filtersParametrs.shape.bell) {
    rightToys = allSerchingToys.filter(el => el.shape === 'колокольчик');
    rightToys.forEach(el => toysOnPage.push(el));
  }
  if(filtersParametrs.shape.ball) {
    rightToys = allSerchingToys.filter(el => el.shape === 'шар');
    rightToys.forEach(el => toysOnPage.push(el));
  }
  if(filtersParametrs.shape.cone) {
    rightToys = allSerchingToys.filter(el => el.shape === 'шишка');
    rightToys.forEach(el => toysOnPage.push(el));
  }
  if(filtersParametrs.shape.snow) {
    rightToys = allSerchingToys.filter(el => el.shape === 'снежинка');
    rightToys.forEach(el => toysOnPage.push(el));
  }
  if(filtersParametrs.shape.figure) {
    rightToys = allSerchingToys.filter(el => el.shape === 'фигурка');
    rightToys.forEach(el => toysOnPage.push(el));
  }
  if(toysOnPage.length === 0) {
    return dataToys
  } else {return toysOnPage}
}

export const filterColorToys= function (filtersParametrs: IFilters, filtredToys: Toys = []): Toys {
  let rightToys: Toys = [];
  const toysOnPage: Toys = [];
  const allSerchingToys: Toys = filtredToys;

  if(filtersParametrs.color.white) {
    rightToys = allSerchingToys.filter(el => el.color === 'белый');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.color.yellow) {
    rightToys = allSerchingToys.filter(el => el.color === 'желтый');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.color.red) {
    rightToys = allSerchingToys.filter(el => el.color === 'красный');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.color.green) {
    rightToys = allSerchingToys.filter(el => el.color === 'зелёный');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.color.blue) {
    rightToys = allSerchingToys.filter(el => el.color === 'синий');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(toysOnPage.length === 0) {
    return filtredToys
  } else {return toysOnPage}
}

export const filterSizeToys = function (filtersParametrs: IFilters, filtredToys: Toys = []): Toys {
  const toysOnPage: Toys = [];
  let rightToys: Toys = [];
  const allSerchingToys: Toys = filtredToys;
  if(allSerchingToys.length === 0) {
    dataToys.forEach(el => allSerchingToys.push(el))
  }
  if(filtersParametrs.size.big) {
    rightToys = allSerchingToys.filter(el => el.size === 'большой');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.size.medium) {
    rightToys = allSerchingToys.filter(el => el.size === 'средний');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(filtersParametrs.size.small) {
    rightToys = allSerchingToys.filter(el => el.size === 'малый');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(toysOnPage.length === 0) {
    return filtredToys
  } else {return toysOnPage}
}


export const filterFavoriteToys = function(filtersParametrs: IFilters, filtredToys: Toys = []): Toys {
  const toysOnPage: Toys = [];
  let rightToys: Toys = [];
  const allSerchingToys: Toys = filtredToys;
  
  if(filtersParametrs.favorite.favorite) {
    rightToys = allSerchingToys.filter(el => el.favorite === 'Да');
    if (rightToys.length === 0) {
      AlertNoCoincidence()
    } else {
      rightToys.forEach(el => toysOnPage.push(el));
    }
  }
  if(toysOnPage.length === 0) {
    return filtredToys
  } else {return toysOnPage}
}

export function filterToys(toysFilters: IFilters, dataToys: Toys): Toys {
  const filterShapeToysResult: Toys = filterShapeToys(toysFilters, dataToys);
  const filterPlusColorToysResult: Toys = filterColorToys(toysFilters, filterShapeToysResult);
  const filterPlusSizeToysResult: Toys = filterSizeToys(toysFilters, filterPlusColorToysResult);
  const filterPlusFavoriteToysResult: Toys = filterFavoriteToys(toysFilters, filterPlusSizeToysResult);
  return filterPlusFavoriteToysResult
}