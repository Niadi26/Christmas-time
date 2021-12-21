(()=>{"use strict";var e={9:(e,o,t)=>{t.r(o)},683:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.DomElement=void 0,o.DomElement=class{constructor(e,o="",t="",n,r){const a=document.createElement(e);a.className=o,a.innerHTML=t,n?document.querySelector(n).append(a):r&&r.append(a),this.node=a}delete(){this.node.remove()}listen(e){this.node.addEventListener("click",e)}}},33:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.toysFilters=void 0,o.toysFilters={shape:{bell:!1,ball:!1,cone:!1,snow:!1,figure:!1},color:{white:!1,yellow:!1,red:!1,blue:!1,green:!1},size:{big:!1,medium:!1,small:!1},favorite:{favorite:!1},count:["1","12"],string:["1940","2021"]}},942:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.dataToys=void 0,o.dataToys=[{num:"1",name:"Большой шар с рисунком",count:"2",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:"Нет"},{num:"2",name:"Зелёный шар с цветами",count:"5",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:"Нет"},{num:"3",name:"Красный матовый шар",count:"3",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"4",name:"Сосулька красная",count:"2",year:"1980",shape:"фигурка",color:"красный",size:"большой",favorite:"Нет"},{num:"5",name:"Красный виноград",count:"4",year:"1980",shape:"фигурка",color:"красный",size:"средний",favorite:"Да"},{num:"6",name:"Красный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"7",name:"Молочно-белый шар",count:"12",year:"1960",shape:"шар",color:"белый",size:"средний",favorite:"Да"},{num:"8",name:"Красный шар",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"9",name:"Колокольчик старинный",count:"2",year:"1950",shape:"колокольчик",color:"белый",size:"большой",favorite:"Нет"},{num:"10",name:"Белый шар ретро",count:"7",year:"1960",shape:"шар",color:"белый",size:"большой",favorite:"Нет"},{num:"11",name:"Шишка еловая белая",count:"11",year:"1960",shape:"шишка",color:"белый",size:"малый",favorite:"Нет"},{num:"12",name:"Белый шар с цветами",count:"5",year:"1980",shape:"шар",color:"белый",size:"большой",favorite:"Нет"},{num:"13",name:"Шар расписной Река",count:"3",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:"Да"},{num:"14",name:"Шар расписной Деревня",count:"4",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:"Да"},{num:"15",name:"Колокольчик расписной",count:"3",year:"1970",shape:"колокольчик",color:"синий",size:"средний",favorite:"Нет"},{num:"16",name:"Шишка расписная Пейзаж",count:"3",year:"1970",shape:"шишка",color:"синий",size:"средний",favorite:"Да"},{num:"17",name:"Шишка расписная",count:"7",year:"1970",shape:"шишка",color:"красный",size:"средний",favorite:"Нет"},{num:"18",name:"Желтый шар с бантом",count:"2",year:"2010",shape:"шар",color:"желтый",size:"большой",favorite:"Нет"},{num:"19",name:"Желтый шар с паетками",count:"12",year:"1980",shape:"шар",color:"желтый",size:"большой",favorite:"Нет"},{num:"20",name:"Красный шар с бантом",count:"8",year:"1950",shape:"шар",color:"красный",size:"средний",favorite:"Да"},{num:"21",name:"Красный шар с звёздами",count:"4",year:"1970",shape:"шар",color:"красный",size:"большой",favorite:"Да"},{num:"22",name:"Шишка еловая золотая",count:"11",year:"1990",shape:"шишка",color:"желтый",size:"малый",favorite:"Нет"},{num:"23",name:"Колокольчик старинный",count:"9",year:"1950",shape:"колокольчик",color:"желтый",size:"большой",favorite:"Нет"},{num:"24",name:"Снежинка изящная",count:"1",year:"1940",shape:"снежинка",color:"белый",size:"большой",favorite:"Нет"},{num:"25",name:"Розовый шар с блёстками",count:"12",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"26",name:"Рубиново-золотой шар",count:"8",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:"Нет"},{num:"27",name:"Красный шар с узором",count:"4",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"28",name:"Бордовый шар с узором",count:"10",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"29",name:"Старинный шар с цветами",count:"5",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:"Да"},{num:"30",name:"Старинный шар с узором",count:"8",year:"1950",shape:"шар",color:"желтый",size:"большой",favorite:"Да"},{num:"31",name:"Красный шар с блёстками",count:"8",year:"2010",shape:"шар",color:"красный",size:"большой",favorite:"Нет"},{num:"32",name:"Синий шар Вселенная",count:"11",year:"1970",shape:"шар",color:"синий",size:"большой",favorite:"Нет"},{num:"33",name:"Синий шар со снежинкой",count:"6",year:"2010",shape:"шар",color:"синий",size:"средний",favorite:"Нет"},{num:"34",name:"Зелёный  шар с узором",count:"8",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:"Нет"},{num:"35",name:"Фигурка Лис в шарфе",count:"8",year:"1950",shape:"фигурка",color:"желтый",size:"средний",favorite:"Да"},{num:"36",name:"Сиреневый шар Метель",count:"1",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:"Нет"},{num:"37",name:"Зелёный  шар Метель",count:"6",year:"2000",shape:"шар",color:"зелёный",size:"большой",favorite:"Нет"},{num:"38",name:"Голубой  шар Метель",count:"6",year:"2000",shape:"шар",color:"синий",size:"большой",favorite:"Нет"},{num:"39",name:"Красная снежинка",count:"6",year:"1990",shape:"снежинка",color:"красный",size:"большой",favorite:"Нет"},{num:"40",name:"Снежинка золотая",count:"12",year:"2020",shape:"снежинка",color:"желтый",size:"большой",favorite:"Нет"},{num:"41",name:"Снежинка арктическая",count:"11",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:"Нет"},{num:"42",name:"Зелёный шар",count:"10",year:"1980",shape:"шар",color:"зелёный",size:"средний",favorite:"Нет"},{num:"43",name:"Снежинка двухцветная",count:"6",year:"1960",shape:"снежинка",color:"красный",size:"большой",favorite:"Нет"},{num:"44",name:"Фигурка Ангела",count:"11",year:"1940",shape:"фигурка",color:"красный",size:"средний",favorite:"Да"},{num:"45",name:"Снежинка новогодняя",count:"1",year:"1980",shape:"снежинка",color:"белый",size:"большой",favorite:"Нет"},{num:"46",name:"Фигурка Мухомор",count:"10",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:"Нет"},{num:"47",name:"Фигурка Колодец",count:"6",year:"1950",shape:"фигурка",color:"красный",size:"малый",favorite:"Нет"},{num:"48",name:"Желтый шар с бантом",count:"6",year:"1960",shape:"шар",color:"желтый",size:"большой",favorite:"Нет"},{num:"49",name:"Снежинка с бирюзой",count:"4",year:"1980",shape:"снежинка",color:"желтый",size:"большой",favorite:"Нет"},{num:"50",name:"Колокольчик большой",count:"3",year:"2020",shape:"колокольчик",color:"красный",size:"большой",favorite:"Нет"},{num:"51",name:"Шишка с изморозью",count:"12",year:"1970",shape:"шишка",color:"красный",size:"малый",favorite:"Нет"},{num:"52",name:"Красный шар с надписью",count:"12",year:"1990",shape:"шар",color:"красный",size:"большой",favorite:"Да"},{num:"53",name:"Снежинка серебристая",count:"6",year:"2020",shape:"снежинка",color:"белый",size:"большой",favorite:"Нет"},{num:"54",name:"Зелёный шар с рисунком",count:"6",year:"2010",shape:"шар",color:"зелёный",size:"большой",favorite:"Нет"},{num:"55",name:"Пряничный домик",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"большой",favorite:"Нет"},{num:"56",name:"Пряничный теремок",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"малый",favorite:"Нет"},{num:"57",name:"Пряничная избушка",count:"1",year:"1940",shape:"фигурка",color:"желтый",size:"средний",favorite:"Нет"},{num:"58",name:"Фигурка белого медведя",count:"2",year:"1980",shape:"фигурка",color:"белый",size:"средний",favorite:"Нет"},{num:"59",name:"Желтый шар с надписью",count:"10",year:"1990",shape:"шар",color:"желтый",size:"средний",favorite:"Нет"},{num:"60",name:"Фигурка Голубь",count:"12",year:"1940",shape:"фигурка",color:"белый",size:"средний",favorite:"Да"}]},799:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.filterToys=o.filterFavoriteToys=o.filterSizeToys=o.filterColorToys=o.filterShapeToys=void 0;const n=t(942),r=t(636);o.filterShapeToys=function(e,o){let t=[];const n=[],r=o;return e.shape.bell&&(t=r.filter((e=>"колокольчик"===e.shape)),t.forEach((e=>n.push(e)))),e.shape.ball&&(t=r.filter((e=>"шар"===e.shape)),t.forEach((e=>n.push(e)))),e.shape.cone&&(t=r.filter((e=>"шишка"===e.shape)),t.forEach((e=>n.push(e)))),e.shape.snow&&(t=r.filter((e=>"снежинка"===e.shape)),t.forEach((e=>n.push(e)))),e.shape.figure&&(t=r.filter((e=>"фигурка"===e.shape)),t.forEach((e=>n.push(e)))),0===n.length?o:n},o.filterColorToys=function(e,o=[]){let t=[];const n=[],a=o;return e.color.white&&(t=a.filter((e=>"белый"===e.color)),0===t.length?(0,r.AlertNoCoincidence)():t.forEach((e=>n.push(e)))),e.color.yellow&&(t=a.filter((e=>"желтый"===e.color)),0===t.length?(0,r.AlertNoCoincidence)():t.forEach((e=>n.push(e)))),e.color.red&&(t=a.filter((e=>"красный"===e.color)),0===t.length?(0,r.AlertNoCoincidence)():t.forEach((e=>n.push(e)))),e.color.green&&(t=a.filter((e=>"зеленый"===e.color)),0===t.length?(0,r.AlertNoCoincidence)():t.forEach((e=>n.push(e)))),e.color.blue&&(t=a.filter((e=>"синий"===e.color)),0===t.length?(0,r.AlertNoCoincidence)():t.forEach((e=>n.push(e)))),0===n.length?o:n},o.filterSizeToys=function(e,o=[]){const t=[];let a=[];const i=o;return 0===i.length&&n.dataToys.forEach((e=>i.push(e))),e.size.big&&(a=i.filter((e=>"большой"===e.size)),0===a.length?(0,r.AlertNoCoincidence)():a.forEach((e=>t.push(e)))),e.size.medium&&(a=i.filter((e=>"средний"===e.size)),0===a.length?(0,r.AlertNoCoincidence)():a.forEach((e=>t.push(e)))),e.size.small&&(a=i.filter((e=>"малый"===e.size)),0===a.length?(0,r.AlertNoCoincidence)():a.forEach((e=>t.push(e)))),0===t.length?o:t},o.filterFavoriteToys=function(e,o=[]){const t=[];let n=[];const a=o;return e.favorite.favorite&&(n=a.filter((e=>"Да"===e.favorite)),0===n.length?(0,r.AlertNoCoincidence)():n.forEach((e=>t.push(e)))),0===t.length?o:t},o.filterToys=function(e,t){const n=(0,o.filterShapeToys)(e,t),r=(0,o.filterColorToys)(e,n),a=(0,o.filterSizeToys)(e,r);return(0,o.filterFavoriteToys)(e,a)}},494:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.filterField=void 0;const n=t(683);class r{constructor(e,o,t){const r=new n.DomElement("div","",""),a=(new n.DomElement("h3","form__input-titles",o,"",r.node),new n.DomElement("div","","","",r.node));a.node.setAttribute("id",`${t}`),e.forEach((e=>{const o=new n.DomElement("label",`form__input-checks form__input-${e}`,"","",a.node);o.node.setAttribute("for",e);const t=new n.DomElement("input","","","",o.node);t.node.setAttribute("type","checkbox"),t.node.setAttribute("id",e)})),this.node=r.node,this.imputsContainer=a.node}}class a{constructor(e,o,t){const r=new n.DomElement("div","",""),a=(new n.DomElement("h3","form__input-titles",o,"",r.node),new n.DomElement("div","form__select-container","","",r.node));e.forEach((e=>{const o=new n.DomElement("input","","","",a.node);o.node.setAttribute("type","range"),o.node.setAttribute("min","1"),o.node.setAttribute("step","1"),o.node.setAttribute("max","12"),o.node.setAttribute("value",e)})),new n.DomElement("div","","","",r.node),this.node=r.node}}const i=new r(["bell","ball","cone","snow","figure"],"Форма","shape"),s=new r(["white","yellow","red","blue","green"],"Цвет","color"),l=new r(["big","medium","small"],"Размер","size"),c=new r(["favorite"],"Любимое","favorite"),m=new a([1,12],"Количество экземпляров","count"),u=new a([1940,2021],"Год приобретения","year");o.filterField=new class{constructor(){const e=new n.DomElement("div","form__items","");new n.DomElement("h2","form__titles","Фильтры","",e.node),this.node=e.node}},o.filterField.node.append(i.node),o.filterField.node.append(s.node),o.filterField.node.append(l.node),o.filterField.node.append(c.node),o.filterField.node.append(m.node),o.filterField.node.append(u.node)},435:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Form=void 0;const n=t(683),r=t(57),a=t(494);o.Form=class{constructor(){const e=new n.DomElement("form","form","","main");e.node.append(a.filterField.node),e.node.append(r.sortField.node);const o=new n.DomElement("div","form__items","","",e.node),t=new n.DomElement("button","form__button","Сброс фильтров","",o.node);t.node.setAttribute("id","filterBtn");const i=new n.DomElement("button","form__button","Сброс настроек","",o.node);i.node.setAttribute("id","resetBtn"),this.node=e.node,this.buttonFilter=t.node,this.buttonReset=i.node}}},704:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.Header=void 0;const n=t(683),r=t(69);o.Header=class{constructor(e){const o=document.querySelector(".header"),t=new n.DomElement("div","wrapper_header","","header"),a=new n.DomElement("nav","","","",t.node),i=new n.DomElement("div","","","",t.node),s=new n.DomElement("input","search_items","","",i.node);s.node.setAttribute("type","search"),s.node.setAttribute("autofocus","autofocus"),s.node.setAttribute("placeholder","Найти..."),s.node.setAttribute("autocomplete","off"),s.node.setAttribute("id","search");const l=new n.DomElement("div","favorite_items",e.length,"",i.node);a.node.append(r.navigationHeader.node),this.favorite=l.node,this.search=s.node,window.onscroll=function(){window.pageYOffset>100?o.classList.add("header_fixed"):o.classList.remove("header_fixed")}}changeFavorite(e){this.favorite.innerHTML=e}}},69:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.navigationHeader=void 0;const n=t(683);o.navigationHeader=new class{constructor(e){const o=new n.DomElement("ul","","");e.forEach((e=>{const t=new n.DomElement("li","nav__items","","",o.node);new n.DomElement("a","",e,"",t.node)})),this.node=o.node}}(["Старт","Игрушки","Ёлка"])},57:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.sortToys=o.sortField=void 0;const n=t(683);o.sortField=new class{constructor(e){const o=new n.DomElement("div","form__items",""),t=(new n.DomElement("h2","form__titles","Сортировка","",o.node),new n.DomElement("select","form__select","","",o.node));t.node.setAttribute("size","1"),e.forEach((e=>{new n.DomElement("option","",e,"",t.node).node.setAttribute("value",e)})),this.node=o.node,this.select=t.node}}(["От А до Я","От Я до А","От старых к новым","От новых к старым"]),o.sortToys=function(e,o){return"0"==e?o.sort(((e,o)=>e.name>o.name?1:-1)):"1"==e?o.sort(((e,o)=>e.name<o.name?1:-1)):"2"==e?o.sort(((e,o)=>e.year>o.year?1:-1)):"3"==e&&o.sort(((e,o)=>e.year<o.year?1:-1)),o}},680:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.ToysContainer=o.favoriteToys=void 0;const n=t(683);o.favoriteToys=[],o.ToysContainer=class{constructor(e){const o=document.querySelector(".main"),t=new n.DomElement("div","main__container","","",o);e.forEach((e=>{const o=new n.DomElement("div","toy","","",t.node);o.node.setAttribute("id",e.num),new n.DomElement("h4","toy__title",e.name,"",o.node);const r=new n.DomElement("h4","toy__img","","",o.node),a=new Image;a.src=`./assets/toys/${e.num}.webp`,a.onload=()=>{r.node.style.backgroundImage=`url('${a.src}')`},new n.DomElement("p","toy__txt",`Количество: ${e.count}`,"",o.node),new n.DomElement("p","toy__txt",`Год покупки: ${e.year}`,"",o.node),new n.DomElement("p","toy__txt",`Форма игрушки: ${e.shape}`,"",o.node),new n.DomElement("p","toy__txt",`Цвет игрушки: ${e.color}`,"",o.node),new n.DomElement("p","toy__txt",`Размер игрушки: ${e.size}`,"",o.node),new n.DomElement("p","toy__txt",`Любимая: ${e.favorite}`,"",o.node)})),this.node=t.node}clear(){this.node.remove()}}},636:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.AlertNoCoincidence=o.AlertLimit=void 0;const n=t(683);o.AlertLimit=function(e){e.getBoundingClientRect();const o=new n.DomElement("div","alert","","main");new n.DomElement("p","","Лимит 20 игрушек!","",o.node),setTimeout((()=>o.delete()),1e3)},o.AlertNoCoincidence=function(){const e=new n.DomElement("div","alert","","main");new n.DomElement("p","","Совпрадений не обнаружено!","",e.node),setTimeout((()=>e.delete()),1300)}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(9);const e=t(942),o=t(33),n=t(704),r=t(435),a=t(680),i=t(680),s=t(636),l=t(799),c=t(57),m=t(636);window.addEventListener("load",(function(){localStorage.getItem("FilterObject")||localStorage.setItem("FilterObject",JSON.stringify(o.toysFilters)),localStorage.getItem("sortFilter")||localStorage.setItem("sortFilter","-1")}));const u=new n.Header(i.favoriteToys),d=new r.Form;let f=new a.ToysContainer(e.dataToys);function h(o){const t=localStorage.getItem("sortFilter");f.clear();const n=(0,l.filterToys)(o,e.dataToys),r=(0,c.sortToys)(t,n);f=new a.ToysContainer(r)}f.node.addEventListener("click",(e=>{const o=e.target.parentElement;if(o.classList.contains("toy")){const e=o.id;if(o.classList.contains("toy_favorite")){o.classList.remove("toy_favorite");const t=i.favoriteToys.indexOf(e);i.favoriteToys.splice(t,1),localStorage.setItem("favoriteLength",String(i.favoriteToys.length))}else{if(20==i.favoriteToys.length)return void(0,s.AlertLimit)(u.favorite);o.classList.add("toy_favorite"),i.favoriteToys.push(e),localStorage.setItem("favoriteLength",String(i.favoriteToys.length))}u.changeFavorite(String(i.favoriteToys.length))}})),d.node.addEventListener("click",(function(e){const o=e.target;if("LABEL"==o.tagName){const e=localStorage.getItem("FilterObject");let t=JSON.parse(e);const n=document.querySelectorAll("input[type=checkbox]"),r=o.children[0];o.classList.toggle("form__input-checks_checked"),n.forEach((e=>{const o=e.id,n=e.closest("div").id;e.id===r.id&&(t=Object.assign(Object.assign({},t),{[n]:Object.assign(Object.assign({},t[n]),{[o]:!t[n][o]})}))})),localStorage.setItem("FilterObject",JSON.stringify(t)),h(t)}})),c.sortField.select.addEventListener("change",(e=>{const o=e.target.options.selectedIndex;localStorage.setItem("sortFilter",String(o));const t=localStorage.getItem("FilterObject");h(JSON.parse(t))})),u.search.addEventListener("keyup",(function(o){const t=o.target,n=new RegExp(t.value,"i");e.dataToys.filter((e=>n.test(e.name))).length||(0,m.AlertNoCoincidence)()})),d.buttonReset.addEventListener("click",(()=>{localStorage.setItem("FilterObject",JSON.stringify(o.toysFilters)),localStorage.setItem("sortFilter","-1"),localStorage.setItem("favoriteLength","0"),h(o.toysFilters)})),d.buttonFilter.addEventListener("click",(()=>{localStorage.setItem("FilterObject",JSON.stringify(o.toysFilters)),h(o.toysFilters)})),console.log("125/200 буду дорабатывать поиск и кнопки сброса фильтров, локал стор отрисовку при перезагрузке. требования к вёрстке +10 Карточка игрушки +10 Добавление игрушек в избранное +20 Сортировка +20 Фильтры в указанном диапазоне от и до +0 Фильтры по значению +30 По фильтрам разного типа +20 Сброс фильтров +0 Сохранение настроек в local storage +5 (сохраняются но не отрисовываются при перезагрузке, кнопка работает) Поиск +10(осталась отрисовка) Дополнительный функционал на выбор +0")})()})();