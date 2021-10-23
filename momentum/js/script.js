
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const dateOptions = {weekday: 'long', month: 'long', day: 'numeric',}


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
getTimeOfDay(new Date().getHours());


function showTime() {
    time.textContent = new Date().toLocaleTimeString();
    date.textContent = new Date().toLocaleDateString('en-En', dateOptions);
    greeting.textContent = `Good ${timeOfDay},`;
    setTimeout(showTime, 1000);
}
showTime();

//локальное хранилище
const userName = document.getElementById('name'); 
const userCity = document.getElementById('city');

function setLocalStorage () {
    localStorage.setItem('nameUser', userName.value);
    localStorage.setItem('cityUser', userCity.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage () {
    if (localStorage.getItem('nameUser')) {
        userName.value = localStorage.getItem('nameUser'); 
    }
    if (localStorage.getItem('cityUser')) {
        userCity.value = localStorage.getItem('cityUser'); 
        return userCity.value
    }
}

window.addEventListener('load', getLocalStorage);

//работа с бэкграундом
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev')

let bgImg;
let randomNum;

function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBg() {
    randomNum = getRandomNum(1,20);
    if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Niadi26/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    img.onload = () => {  
    body.style.backgroundImage = `url('${img.src}')`;
    }
};
getBg();

function getSlideNext() {
    console.log(randomNum);
    if (randomNum === 20) {
        return getBg(1);
    }
    else {
        randomNumNext = randomNum + 1;
        console.log(randomNumNext)
        return getBg(randomNumNext);
    }
}

function getSlidePrev() {
    if (randomNum === 1) {
        return getBg(20, timeOfDay);
    }
    else {
    NumPrev = randomNum - 1;    
    return getBg(NumPrev, timeOfDay);
    }
}

slideNext.addEventListener('click', getBg);
slidePrev.addEventListener('click', getBg);

//weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherHumidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind');
const weatherErr = document.querySelector('.weather-error');

let x = userCity.value;
async function getWeather(x) {  
    if(x == undefined) {x = 'Minsk'};                                             //!!!!!!!!!!!!!!!!!!!!!!
    console.log(x);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&lang=en&appid=1cac88b1a4110319c96b4fc22457c7a7&units=metric`;
    const response = await fetch(url);
    const air = await response.json(); 
    if (air.cod == 404) {
        weatherErr.textContent = "Please, write correct city";
    }
    temperature.textContent = `${Math.round(air.main.temp)}°C`;
    weatherDescription.textContent = `${air.weather[0].description}`;
    weatherHumidity.textContent = `${Math.round(air.main.humidity)}%`;
    windSpeed.textContent = `${Math.round(air.wind.speed)}m/s`;

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${air.weather[0].id}`);
  }
  getWeather();

  userCity.addEventListener('change', getWeather(x));
  
  //цитатки
  const author = document.querySelector('.author');
  const quote = document.querySelector('.quote');
  const changeQ = document.querySelector('.change-quote');
  let quotes;

  async function getQuotes() {  
    const adress = './js/data.json';
    const result = await fetch(adress);
    quotes = await result.json(); 
    function getQuote() {
        let quoteNum = getRandomNum(0,quotes.length-1);
        author.textContent = quotes[quoteNum].author;
        quote.textContent = quotes[quoteNum].text;
  }
  getQuote();
  }
getQuotes();

changeQ.addEventListener('click', getQuotes);

//аууудио
const audio = new Audio();
const prevAudio = document.querySelector('.play-prev');
const nextAudio = document.querySelector('.play-next');
const play = document.querySelector('.play');
let isPlay = false;

import playList from './playList.js';
console.log(playList);

playList.forEach((el, index) => {
const li = document.createElement('li');
const playListContainer = document.querySelector('.play-list')
li.classList.add('play-item');
li.textContent = playList[index].title;
playListContainer.append(li);
})

const liList = document.querySelectorAll('li');
console.log(liList)

let playNum = 0;
function playAudio() {
    audio.src = playList[playNum].src;
    if (!isPlay) {
        liList.forEach((el)=>{
            el.classList.remove('.item-active');})
        liList[playNum].classList.add('.item-active');
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        play.classList.add('pause');
    }
    else {
        audio.pause();
        isPlay = false;
        play.classList.remove('pause');
        liList.forEach((el)=>{
            el.classList.remove('.item-active');})
    }
}

function playnextAudio () {
    if(playNum === playList.length - 1) {
        playNum = 0;
        audio.src = playList[playNum].src;
    }
    else{
        playNum ++;
        audio.src = playList[playNum].src;
    }
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    liList.forEach((el)=>{
        el.classList.remove('.item-active');})
    liList[playNum].classList.add('.item-active');    
}

function playprevAudio () {              
    if(playNum === 0) {
        playNum = playList.length - 1;
        audio.src = playList[playList.length - 1].src;
    }
    else{
        playNum--;
        audio.src = playList[playNum].src;
    }
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    liList.forEach((el)=>{
        el.classList.remove('.item-active');})
    liList[playNum].classList.add('.item-active');   
}

function autoNextSong () {    
    console.log(playList[playNum].duration)                                 //!!!!!!!!
    if (playList[playNum].currentTime == playList[playNum].duration) {
        playnextAudio ();
    }
}
autoNextSong ()

play.addEventListener('click', playAudio);
prevAudio.addEventListener('click', playprevAudio);
nextAudio.addEventListener('click', playnextAudio);
