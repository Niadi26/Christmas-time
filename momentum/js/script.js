
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const dateOptions = {weekday: 'long', month: 'long', day: 'numeric',}

const dateAll = new Date();
const currentTime = dateAll.toLocaleTimeString();
const currentDate = dateAll.toLocaleDateString('en-En', dateOptions);

const greeting = document.querySelector('.greeting');
const hour = dateAll.getHours();
let timeOfDay;

function getTimeOfDay(x) {
    if (x < 6) {
        timeOfDay = 'night';
    }
    else if (x > 6 && x < 12) {
        timeOfDay = 'morning';
    }
    else if (x > 12 &&  x < 18) {
        timeOfDay = 'afternoon';
    }
    else {
        timeOfDay = 'evening';
    }
    return  timeOfDay;
}

timeOfDay = getTimeOfDay(hour);

const greetingText = `Good ${timeOfDay},`;


function showTime() {
    time.textContent = currentTime;
    date.textContent = currentDate;
    greeting.textContent = greetingText;
    setTimeout(showTime, 1000);
}
showTime();

const userName = document.getElementById('name'); 

function setLocalStorage () {
    localStorage.setItem('nameUser', userName.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage () {
    if (localStorage.getItem('nameUser')) {
        userName.value = localStorage.getItem('nameUser'); 
    }
}

window.addEventListener('load', getLocalStorage);

//работа с бэкграундом
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev')
let bgImg;

function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNum(1,20);

function getBg(randomNum, timeOfDay) {
    if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }
    bgImg =`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    body.style.backgroundImage = `url('${bgImg}')`;
};

//getBg(randomNum, timeOfDay);

function getSlideNext(randomNum, timeOfDay) {
    console.log(randomNum);
    if (randomNum === 20) {
        return getBg(1, timeOfDay);
    }
    else {
        randomNumNext = randomNum + 1;
        console.log(randomNumNext)
        return getBg(randomNumNext, timeOfDay);
    }
}

function getSlidePrev(randomNum, timeOfDay) {
    if (randomNum === 1) {
        return getBg(20, timeOfDay);
    }
    else {
    NumPrev = randomNum - 1;    
    return getBg(NumPrev, timeOfDay);
    }
}

slideNext.addEventListener('click', getSlideNext(randomNum, timeOfDay));
slidePrev.addEventListener('click', getSlidePrev(randomNum, timeOfDay));
