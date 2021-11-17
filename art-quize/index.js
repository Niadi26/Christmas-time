//settings

const settingsButtonOn = document.querySelector('.in_settings');
const settingsBlock = document.querySelector('.settings');
const settingsButtonOff = document.querySelector('.arrow');
const settingsButtonOff1 = document.querySelector('.cross');
const settingsButtonSave = document.querySelector('.save');
const settingsButtonDefault = document.querySelector('.default');

//function addClass(htmlElement, cssElement) {
//    htmlElement.classList.toggle(cssElement);
//}

//settingsButtonOn.addEventListener('click', addClass(settingsBlock,'settings_on'));
settingsButtonOn.addEventListener('click', ()=> settingsBlock.classList.toggle('settings_on'));
settingsButtonOff.addEventListener('click', ()=> settingsBlock.classList.toggle('settings_on'));
settingsButtonOff1.addEventListener('click', ()=> settingsBlock.classList.toggle('settings_on'));
settingsButtonSave.addEventListener('click', ()=> settingsBlock.classList.toggle('settings_on'));
settingsButtonDefault.addEventListener('click', ()=> settingsBlock.classList.toggle('settings_on'));

//mainnav
const artistQuizButton = document.querySelector('.artist_quiz');
const picturesQuizButton = document.querySelector('.pictures_quiz');
const headerBlock = document.querySelector('.header_main'); 
const mainBlock = document.querySelector('.main');
const artistBlock = document.querySelector('.artist_category');
const picturesBlock = document.querySelector('.pictures_category');
const footerBlock = document.querySelector('.footer');

const navHeader = document.createElement('div');
navHeader.classList.add('navigation_header');
navHeader.innerHTML = "<a id='home_logo' class='header_logo' href='#'></a><nav class='navigation'><ul class='navigation_container'><li class=''><a href='#' id='home' class='navigation_item'>Home</a> </li><li class=''><a href='#' id='categories' class='navigation_item'>Categories</a></li></ul></nav>"
   

artistQuizButton.addEventListener('click', ()=> {
    headerBlock.classList.add('header_category');
    headerBlock.prepend(navHeader);
    mainBlock.classList.add('hide');
    artistBlock.classList.remove('hide');
    footerBlock.classList.add('footer_black');
});

picturesQuizButton.addEventListener('click', ()=> {
    headerBlock.classList.add('header_category');
    headerBlock.prepend(navHeader);
    mainBlock.classList.add('hide');
    picturesBlock.classList.remove('hide');
    footerBlock.classList.add('footer_black');
});

headerBlock.addEventListener('click', (e) => {
    if(e.target.id === 'home_logo' || e.target.id === 'home') {
        headerBlock.classList.remove('header_category');
        navHeader.remove();
        artistBlock.classList.add('hide');
        picturesBlock.classList.add('hide');
        mainBlock.classList.remove('hide');
        footerBlock.classList.remove('footer_black');
    } 
})

let getInfo = async function() {
    let result = await fetch('./image-data/data.json');
    let arr = await result.json();
    return arr;
}

getInfo().then((arr) => {
    console.log(arr[0].author);
})

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }