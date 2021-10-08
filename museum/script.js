
const ticketShow = document.querySelector('.tickets_btn');
    ticketHide = document.querySelector('.exit');
    ticketOwerlay = document.querySelector('.buy_active');
    ticketBox = document.querySelector('.my_form');


const showTickets = () => {
ticketBox.classList.remove('buy');
ticketBox.classList.add('buy_active');
}

const hideTickets = () => {
ticketBox.classList.remove('buy_active');
ticketBox.classList.add('buy');
}

ticketShow.addEventListener('click', showTickets);
ticketHide.addEventListener('click', hideTickets);
ticketOwerlay.addEventListener('click', hideTickets);

//Вызов бургер-меню
const burgerOpen = document.querySelector('.burger_open');
    burgerBtnViev = document.querySelector('.slice');
    burgerMenu = document.querySelector('.burger_menu');

const showBurger = () => {
burgerOpen.classList.toggle('close');
burgerBtnViev.classList.toggle('hide');
burgerMenu.classList.toggle('burger_menu_open');
}

burgerOpen.addEventListener('click', showBurger);

//слайдер в секции Велком
const leftArrWelcome = document.querySelector('.left');
    rightArrWelcome = document.querySelector('.right');
    slides = document.querySelectorAll('.slide');
    cubes = document.querySelectorAll('.cub');
    numbs = document.querySelectorAll('.item');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeNumb = n => {
    for (numb of numbs) {
        numb.classList.remove('active');
    }
    numbs[n].classList.add('active');
}

const activeCub = n => {
    for (cub of cubes) {
        cub.classList.remove('active');
    }
    cubes[n].classList.add('active');
}

const makeActiveWelcome = ind => {
    activeCub(ind);
    activeSlide(ind);
    activeNumb(ind);
}

const nextSlideWelcome = () => {
    if (index == slides.length - 1) {
        index = 0;
        makeActiveWelcome(index);
    } else {
        index++;
        makeActiveWelcome(index);
    }
}

const predSlideWelcome = () => {
    if (index == 0) {
        index = slides.length - 1;
        makeActiveWelcome (index);
    } else {
        index--;
        makeActiveWelcome (index);
    }
}

rightArrWelcome.addEventListener('click', nextSlideWelcome);
leftArrWelcome.addEventListener('click', predSlideWelcome);

cubes.forEach((item, indexCub) => {
    item.addEventListener('click', () => {
    index = indexCub;
    makeActiveWelcome(index);
    });
})

//Прогресс-бар в секции видео
const progress = document.querySelector('.video_control_pr');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
