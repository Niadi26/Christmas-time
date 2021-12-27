import { dataToys } from "./data-toys";    
import { IFilters, toysFilters } from "./data-flters";

import { Header } from "./header";              
import { Form } from "./form";
import { ToysContainer, favoriteToys } from "./toys-container";

import { AlertLimit, AlertNoCoincidence } from "./warning";
import { filterToys } from "./filter-function";
import { sortToys, sortField, addOptionCheck } from "./sort-items";
import { DomElement } from "./createElement"
import { addClassCheck } from "./local-storage"

const loadStringFilters = localStorage.getItem('FilterObject') as string;
const sortIndex = localStorage.getItem('sortFilter');
const loadFilters = JSON.parse(loadStringFilters);

export class ToysPage {
    public header: HTMLElement;
    public main: HTMLElement;
    public form: HTMLElement;
  constructor() {
    const header = new Header(favoriteToys);
    const form = new Form();
    let toys: DomElement;
    toys = makeOurToys(loadFilters);
    addClassCheck(loadFilters);
    addOptionCheck(sortIndex!);

    function makeOurToys(filtersObject: IFilters, searchFilter?: RegExp): DomElement {
    const index = localStorage.getItem('sortFilter') as string;
    if (toys) toys.delete()
    const filterResult = filterToys(filtersObject, dataToys);
    const sortResult = sortToys(index, filterResult);
    if (searchFilter) {
        const searchResult = sortResult.filter(el => searchFilter.test(el.name));
        if(!searchResult.length) { 
        AlertNoCoincidence()
        toys = new ToysContainer(sortResult); 
        } else {
        toys = new ToysContainer(searchResult);
    }
    } else {
        toys = new ToysContainer(sortResult);
    }  
    toys.node.addEventListener("click", (e: Event) => makeToyFavorite(e));
    return toys
    }

    function makeToyFavorite(e: Event) {
    const elementClick = e!.target as HTMLElement;
    const parentElementClick = elementClick.parentElement as HTMLElement;
    if (parentElementClick.classList.contains("toy")) {
        const num = parentElementClick.id;
        if (parentElementClick.classList.contains("toy_favorite")) {
        parentElementClick.classList.remove("toy_favorite");
        const indexInFavorite = favoriteToys.indexOf(num);
        favoriteToys.splice(indexInFavorite, 1);
        localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys))
        } else {
        if (favoriteToys.length == 20) {
            AlertLimit(header.favorite);
            return;
        }
        parentElementClick.classList.add("toy_favorite");
        favoriteToys.push(num);
        localStorage.setItem('favoriteToys', JSON.stringify(favoriteToys))
        }
        header.changeFavorite(String(favoriteToys.length));
    }
    console.log(favoriteToys)
    }

    form.node.addEventListener("click", function (e): void {
    const elementClick = e!.target as HTMLElement;
    if (elementClick.tagName == "LABEL") {
        const dataObject = localStorage.getItem('FilterObject') as string;
        let filtersObject = JSON.parse(dataObject) as IFilters;
        const checkboxes = document.querySelectorAll(
        "input[type=checkbox]"
        ) as NodeListOf<HTMLInputElement>;
        const checkbox = elementClick.children[0];
        elementClick.classList.toggle("form__input-checks_checked");
        checkboxes.forEach((el) => {
        const valueFilter = el.id;
        const typeFilter = el.closest("div")!.id;
        if (el.id === checkbox.id) {
            filtersObject = {
            ...filtersObject,
            [typeFilter]: {
                ...filtersObject[typeFilter],
                [valueFilter]: !filtersObject[typeFilter][valueFilter],
            },
            };
        }
        });
        localStorage.setItem('FilterObject', JSON.stringify(filtersObject));
        makeOurToys(filtersObject);
    }
    });

    sortField.select.addEventListener('change', (e) => {
    const elementClick = e.target as HTMLSelectElement;
    const selectedOption: number = elementClick.options.selectedIndex;
    localStorage.setItem('sortFilter', String(selectedOption));
    const dataObject = localStorage.getItem('FilterObject') as string;
    const filtersObject = JSON.parse(dataObject) as IFilters;
    makeOurToys(filtersObject);
    })

    header.search.addEventListener('keyup', function (e) {
    const element = e.target as HTMLInputElement;
    const filter = new RegExp(element.value, 'i');
    makeOurToys(loadFilters, filter)
    })

    form.buttonReset.addEventListener('click', () => {
    localStorage.setItem('FilterObject', JSON.stringify(toysFilters));
    localStorage.setItem('sortFilter', '-1');
    localStorage.setItem('favoriteToys', JSON.stringify([]))
    makeOurToys(toysFilters);
    })

    form.buttonFilter.addEventListener('click', () => {
    localStorage.setItem('FilterObject', JSON.stringify(toysFilters))
    makeOurToys(toysFilters);
    })

    this.header = header.node as HTMLElement;
    this.form = form.node as HTMLElement
    this.main = toys.node as HTMLElement
  }
  
  delete(): void {
    this.header.remove()
    this.main.remove()
    this.form.remove()
  }

}

