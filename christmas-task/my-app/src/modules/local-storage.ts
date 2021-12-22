 import { toysFilters } from "./data-flters"
 import { favoriteToys } from "./toys-container"
 
export function setLocalStorage () {
    if (!localStorage.getItem('FilterObject')) {
      localStorage.setItem('FilterObject', JSON.stringify(toysFilters))
    }
    if (!localStorage.getItem('sortFilter')) {
      localStorage.setItem('sortFilter', '-1')
    }
    if (!localStorage.getItem('favoriteToys')) {
      localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys))
    }
  }

export function addClassCheck(objectFilters): void {
    const checkboxes = document.querySelectorAll(
      "input[type=checkbox]"
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((el) => {
      const valueFilter = el.id;
      const typeFilter = el.closest("div")!.id;
      if (objectFilters[typeFilter][valueFilter] == true) {
        el.parentElement!.classList.add('form__input-checks_checked');
      }
    })
  }