import { IFilters } from "./data-flters";

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