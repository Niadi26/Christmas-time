
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
const sound = document.querySelector('#sound');
const not_sound = document.querySelector('#not-sound');
const full = document.querySelector('#full');
const not_full = document.querySelector('#not-full');
let video = document.querySelector('#video_player');
let videoDiv = document.querySelector('.video_main');

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

function volumeVideo() {
    video.volume = 1;
    sound.classList.toggle('hide');
    not_sound.classList.toggle('hide');
}

sound.addEventListener('click', muteV);
not_sound.addEventListener('click', volumeVideo);

function fullV () {
    videoDiv.requestFullscreen();
    full.classList.add('hide');
    not_full.classList.remove('hide');
}

function fullOutV () {
    document.exitFullscreen();
    full.classList.remove('hide');
    not_full.classList.add('hide');
}

full.addEventListener('click', fullV);
not_full.addEventListener('click', fullOutV);

const KEY_CODES = {
    F: 70,
    M: 77,
    SPACE: 32,
};

document.documentElement.addEventListener("keydown", function(e) {
    e.preventDefault();

    switch(e.keyCode) {
        case KEY_CODES.SPACE: {
            video.paused ? playV() : pauseV();
            break;
        }
        case KEY_CODES.M: {
            video.volume == 0 ? volumeVideo() : muteV();
            break;
        }
        case KEY_CODES.F: {
            document.fullscreenElement ? fullOutV() : fullV();
            break;
        }
        default:
    }
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

//slider

function initComparisons() {
    let x, i;
    /* Найти все элементы с "overlay" класс: */
    x = document.getElementsByClassName("img_overlay");
    for (i = 0; i < x.length; i++) {
      /* Один раз для каждого элемента "overlay":
      передайте элемент "overlay" в качестве параметра при выполнении функции сравнения изображений: */
      compareImages(x[i]);
    }
    function compareImages(img) {
      /* Получить ширину и высоту элемента img */
    let w = img.offsetWidth;
    let h = img.offsetHeight;
      /* Установите ширину элемента img равным 50%: */
      img.style.width = (w / 2) + "px";
      /* Создать слайдер: */
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img_slider");
      /* Вставить ползунок */
      img.parentElement.insertBefore(slider, img);
      /* Расположите ползунок по середине: */
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /* Выполнение функции при нажатии кнопки мыши: */
      slider.addEventListener("mousedown", slideReady);
      /* И еще одна функция, когда кнопка мыши отпущена: */
      window.addEventListener("mouseup", slideFinish);
      /* Или коснулся (для сенсорных экранов: */
      slider.addEventListener("touchstart", slideReady);
       /* И выпустили (для сенсорных экранов: */
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
        /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению: */
        e.preventDefault();
        /* Теперь ползунок нажат и готов к перемещению: */
        clicked = 1;
        /* Выполнение функции при перемещении ползунка: */
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /* Ползунок больше не нажимается: */
        clicked = 0;
      }
      function slideMove(e) {
        let pos;
        /* Если ползунок больше не нажимается, выйдите из этой функции: */
        if (clicked == 0) return false;
        /* Получить позицию курсора x: */
        pos = getCursorPos(e)
        /* Не допускайте позиционирования ползунка за пределами изображения: */
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /* Выполните функцию, которая изменит размер наложенного изображения в соответствии с курсором: */
        slide(pos);
      }
      function getCursorPos(e) {
        let a, x = 0;
        e = e || window.event;
        /* Получить x позиции изображения: */
        a = img.getBoundingClientRect();
        /* Вычислить координату x курсора относительно изображения: */
        x = e.pageX - a.left;
        /* Рассмотрим любую прокрутку страницы: */
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /* Измените размер изображения: */
        img.style.width = x + "px";
        /* Расположите ползунок: */
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
initComparisons();

// MAP

mapboxgl.accessToken = `pk.eyJ1IjoibmlhZGkyNiIsImEiOiJja3Vtc25hMHIwbW51Mm90aGs0cmU4dGI2In0.iQK4vFnkhikBr1_56sqbIg`;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/niadi26/ckumuznxe1eww17m0axzf8ksm', // style URL
    center: [2.3364, 48.86091], // starting position [lng, lat]
    zoom: 16 // starting zoom
    });

    const marker1 = new mapboxgl.Marker({ color: 'black'})
    .setLngLat([2.3364, 48.86091])
    .addTo(map);
     
    const marker2 = new mapboxgl.Marker({ color: 'gray'})
    .setLngLat([2.3333, 48.8602])
    .addTo(map);
    
    const marker3 = new mapboxgl.Marker({ color: 'gray'})
    .setLngLat([2.3397, 48.8607])
    .addTo(map);   
    
    const marker4 = new mapboxgl.Marker({ color: 'gray'})
    .setLngLat([2.3330, 48.8619])
    .addTo(map);

    const marker5 = new mapboxgl.Marker({ color: 'gray'})
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

    map.addControl(new mapboxgl.NavigationControl());

const recalculateTotal = () => {
    const basicCount = +document.getElementById('basicCount').value;
    const seniorCount = +document.getElementById('seniorCount').value;
    const price = +document.getElementById('calculationForm')
        .querySelector('input:checked').value;

    const result = price * basicCount + price * seniorCount / 2;

    const totalPrice = document.getElementById('total_price_id');
    totalPrice.innerHTML = `Total: ${result} €`;

}

recalculateTotal();
const ticketsCountContainer = document.getElementById('ticketsCountContainer');
ticketsCountContainer.addEventListener('click', e => {
    if (e.target && e.target.tagName === 'BUTTON') {
        recalculateTotal();
    }
});

const calculationForm = document.getElementById('calculationForm');
calculationForm.addEventListener('click', e => {
    if (e.target && e.target.tagName === 'INPUT') {
        recalculateTotal();
    }
});

function checkbox () {
    let prise = document.querySelectorAll('input[name="ticketType"]:checked');
    prise.onclick = function(e){
        if (e.is(':checked')){
            console.log(e.value);
        }
    }
}

// Анимация выплывания

function debounse (func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

const galleryImgs = document.querySelectorAll('.gallery_img');
const gallery = document.querySelector('.gallery_content');
function checkSlide (e) {
    galleryImgs.forEach(sliderImg => {
        const slideInAt = (window.scrollY + window.innerHeight);
        const isHalfShow = slideInAt > gallery.offsetTop;
        if (isHalfShow) {
            sliderImg.classList.add('gallery_active');
        } else {sliderImg.classList.remove('gallery_active');}
    })
}
window.addEventListener('scroll', debounse(checkSlide));

console.log('Дневник с фронта. У нас следующие потерянные войны: 1. Плавная анимация в велком (-4балла),  2.при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них (-2балла)')
console.log('Дневник с фронта. У нас следующие несделанные войны: 3. Видео-слайдер, не хватило сил (-20баллов); 4.Калькулятор продажи билетов в форме продажи билетов -14; 5.Валидация формы -16; 6.Любой собственный дополнительный функционал -10');
console.log('Итого:90 баллов :(')