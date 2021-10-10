
const ticketShow = document.querySelector('.tickets_btn');
    ticketHide = document.querySelector('.exit');
//    ticketOwerlay = document.querySelector('.buy_active');
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
//ticketOwerlay.addEventListener('click', hideTickets);

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

let el = document.querySelector('.welcome_container');
const swipeWelcome = (el) => {
    let surfase = el;
    let startX = 0;
    let startY = 0;
    let distX = 0;
    let distY = 0;
    let startTime = 0;
    let elapsedTime = 0;
    let thrashold = 150; //дистанция по оси Х
    let retraind = 100; //дистанция по оси У
    let allowedTime = 300; //максимальное время свайпа
    
    surfase.addEventListener('mousedown', function(e){
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
    })

    surfase.addEventListener('mouseup', function(e){
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if(elapsedTime <= allowedTime){
            if(Math.abs(distX >= thrashold) && Math.abs(distY<= retraind)) {
                if(distX > 0) {predSlideWelcome()}
                else {console.log(distX);
                    nextSlideWelcome()};
            }
        }
    })
    
    surfase.addEventListener('touchstart', function(e){
        let touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault()
    })
    surfase.addEventListener('touchstart', function(e){e.preventDefault()})
    surfase.addEventListener('touchend', function(e){
        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        e.preventDefault()
        if(elapsedTime <= allowedTime){
            if(Math.abs(distX >= thrashold) && Math.abs(distY<= retraind)) {
                if(distX > 0) {predSlideWelcome()}
                else {nextSlideWelcome()};
            }
        }
    })
}
swipeWelcome(el);

//Вuдеоплеер
const play = document.querySelector('#play');
const playBtn = document.querySelector('.video_play_btn');
const pause = document.querySelector('#pause');
    sound = document.querySelector('#sound');
    not_sound = document.querySelector('#not-sound');
    full = document.querySelector('#full');
    not_full = document.querySelector('#not-full');
    let video = document.querySelector('#video_player');

function playV() {
    video.play();
    play.classList.add('hide');
    playBtn.classList.add('hide');
    pause.classList.remove('hide');
}

function pauseV() {
    video.pause();
    pause.classList.add('hide');
    play.classList.remove('hide');
    playBtn.classList.remove('hide');
}
play.addEventListener('click', playV);
playBtn.addEventListener('click', playV);
pause.addEventListener('click', pauseV);
video.addEventListener('click', pauseV);

document.querySelector('#volume').oninput = volume;

function volume (){
    let v = this.value;
    video.volume = v / 100;
    if (v == 0) {
        muteV();
    } else {
    sound.classList.remove('hide');
    not_sound.classList.add('hide');
    }
}

function muteV() {
    video.volume = 0;
    sound.classList.add('hide');
    not_sound.classList.remove('hide');
}

function volumeV() {
    video.volume = 1;
    sound.classList.toggle('hide');
    not_sound.classList.toggle('hide');
}

sound.addEventListener('click', muteV);
not_sound.addEventListener('click', volumeV);

function fullV () {
    video.requestFullscreen();
    full.classList.add('.hide');
    not_full.classList.remove('.hide');
}

function fullOutV () {
    video.canselFullscreen();
    full.classList.remove('.hide');
    not_full.classList.add('.hide');
}

full.addEventListener('click', fullV);
not_full.addEventListener('click', fullOutV);

//работа с клавиатурой
document.documentElement.addEventListener("keyup", function(e) {
    let ev = e || window.event;
    console.log(ev.keyCode);
    if(ev.keyCode == 32) {
        ev.preventDefault();
        if(video.paused) { playV(); }
        else { pauseV(); }
    } 
    else if (ev.keyCode == 77) {
        if (video.volume == 0) {volumeV();}
        else {muteV()}
    } 
    else if(ev.keyCode == 70) {
        if(video.fullscreenEnabled) {fullOutV();}                            //НЕ ВЫХОДИТ 
        else {fullV()}
    } 
 //   else if(ev.keyCode == 188) {
 //       for(let speed = 1; speed >= 0; speed - 0.2) {
 //       video.playbackRate = speed  
  //      }

});

//Прогресс-бар в секции видео
const progress = document.querySelector('.video_control_pr');
progress.onclick = WindV;
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

video.ontimeupdate = progressV;

function progressV () {
    let allTime = video.duration;
    let nowTime = video.currentTime;
    progress.value = nowTime / allTime * 100;
    if (progress.value == 100) {
        pauseV();
    }
}

function WindV () {
    let widthV = this.offsetWidth;
    let myWidthV = event.offsetX;
    video.pause();
    video.currentTime = video.duration * (myWidthV / widthV);
    playV();
}


//console.log('Дневник с фронта. У нас следующие потерянные войны: 1. Плавная анимация в велком (-4балла), 2. Панель управления в полноэкранном режиме (-2балла),')