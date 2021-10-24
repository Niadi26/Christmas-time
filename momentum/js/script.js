
import playList from './playList.js';

//перевод

const LANGUAGES = {
    RU: 'RU',
    EN: 'EN',
};

const TRANSLATIONS = {
    [LANGUAGES.EN]:{
        DATE: 'en-En',
        NIGHT: 'Good night,',
        MORNING: 'Good morning,',
        AFTERNOON: 'Good afternoon,',
        EVENING: 'Good evening,',
    },
    [LANGUAGES.RU]:{
        DATE: 'ru-Ru',
        NIGHT: 'Прекрасная ночь,',
        MORNING: 'Доброго утра,',
        AFTERNOON: 'Надеюсь у тебя хороший день,',
        EVENING: 'Славного вечера,',
    },
};

function setLang(event) {
    if(event.target && event.target.tagName === 'INPUT'){
       currentLanguage = event.target.value;
    }
}

const checkLANG = document.getElementById('LANG');
const checkEN = document.getElementById('EN');
const checkRU = document.getElementById('RU');
let currentLanguage = LANGUAGES.EN;
checkLANG.addEventListener('click', setLang);

// info
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const dateOptions = {weekday: 'long', month: 'long', day: 'numeric',}


let timeOfDay;
function getTimeOfDay(x) {
    if (x < 6) {
        timeOfDay = TRANSLATIONS[currentLanguage].NIGHT;
    }
    else if (x > 6 && x < 12) {
        timeOfDay = TRANSLATIONS[currentLanguage].MORNING;
    }
    else if (x > 12 &&  x < 18) {
        timeOfDay = TRANSLATIONS[currentLanguage].AFTERNOON;
    }
    else {
        timeOfDay = TRANSLATIONS[currentLanguage].EVENING;
    }
    return  timeOfDay;
}
getTimeOfDay(new Date().getHours());


function showTime() {
    time.textContent = new Date().toLocaleTimeString();
    date.textContent = new Date().toLocaleDateString(`${TRANSLATIONS[currentLanguage].DATE}`, dateOptions);
    greeting.textContent = getTimeOfDay(new Date().getHours());
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


let timeOfBG;
function getTimeOfBG(x) {
    if (x < 6) {
        timeOfBG = 'night';
    }
    else if (x > 6 && x < 12) {
        timeOfBG = 'morning';
    }
    else if (x > 12 &&  x < 18) {
        timeOfBG = 'afternoon';
    }
    else {
        timeOfBG = 'evening';
    }
    return  timeOfBG;
}
getTimeOfBG(new Date().getHours());

function getBg() {
    randomNum = getRandomNum(1,20);
    if (randomNum < 10) {
        randomNum = '0' + randomNum;
    }
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Niadi26/stage1-tasks/assets/images/${timeOfBG}/${randomNum}.jpg`;
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

async function getWeather(city) {
    const currentCity = city || 'Minsk';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&lang=en&appid=1cac88b1a4110319c96b4fc22457c7a7&units=metric`;
    const response = await fetch(url);
    const air = await response.json(); 
    if (air.cod == 404) {
        weatherErr.textContent = "Please, write correct city";
        temperature.textContent = ``;
        weatherDescription.textContent = ``;
        weatherHumidity.textContent = ``;
        windSpeed.textContent = ``;
    } else {
        weatherErr.textContent = "";
        temperature.textContent = `${Math.round(air.main.temp)}°C`;
        weatherDescription.textContent = `${air.weather[0].description}`;
        weatherHumidity.textContent = `Humidity: ${Math.round(air.main.humidity)}%`;
        windSpeed.textContent = `Wind speed: ${Math.round(air.wind.speed)}m/s`;
    
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${air.weather[0].id}`);
    }
  }

  console.log('test', typeof localStorage.getItem('cityUser'))
  getWeather(localStorage.getItem('cityUser'));
  userCity.addEventListener('change', (e) => {
    getWeather(e.target.value);
  });
  
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


playList.forEach((el, index) => {
const li = document.createElement('li');
const playListContainer = document.querySelector('.play-list')
li.classList.add('play-item');
li.textContent = playList[index].title;
playListContainer.append(li);
})

const liList = document.querySelectorAll('li');
const audioName = document.querySelector('.audio-name')
const nowTime = document.querySelector('.now');
const allTime = document.querySelector('.all');

let playNum = 0;
function playAudio() {
    audioName.textContent = playList[playNum].title;
    allTime.textContent = `/ ${playList[playNum].duration}`;
    audio.src = playList[playNum].src;
    if (!isPlay) {
        liList.forEach((el)=>{
            el.classList.remove('item-active');})
        liList[playNum].classList.add('item-active');
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
            el.classList.remove('item-active');
        });
    }
}

function playnextAudio () {
    if (playNum === playList.length - 1) {
        playNum = 0;
        audio.src = playList[playNum].src;
    } else {
        playNum ++;
        audio.src = playList[playNum].src;
    }
    audioName.textContent = playList[playNum].title;
    allTime.textContent = `/ ${playList[playNum].duration}`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    liList.forEach((el)=>{
        el.classList.remove('item-active');})
    liList[playNum].classList.add('item-active');    
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
    audioName.textContent = playList[playNum].title;
    allTime.textContent = `/ ${playList[playNum].duration}`;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add('pause');
    liList.forEach((el)=>{
        el.classList.remove('item-active');})
    liList[playNum].classList.add('item-active');   
}

audio.addEventListener('ended', playnextAudio);
play.addEventListener('click', playAudio);
prevAudio.addEventListener('click', playprevAudio);
nextAudio.addEventListener('click', playnextAudio);

//player pro

document.querySelector('#laught').oninput = laught;
const inp = document.querySelector('#laught');
const volume = document.querySelector('.volume');

function laught (){
    let v = this.value;
    audio.volume = v / 100;
    if (v == 0) {
        muteAudio();
    } else {
    volume.classList.remove('mute');
    }
}

function muteAudio() {
    if (volume.classList.contains('mute')) {
        audio.volume = inp.value / 100;
    }
    else {
    audio.volume = 0;
    }
    volume.classList.toggle('mute');
}

volume.addEventListener('click',  muteAudio);


const progress = document.querySelector('.progress');
audio.ontimeupdate = progressAudio;

function progressAudio () {
    let allT = audio.duration;
    let nowT = audio.currentTime;
    progress.value = nowT / allT * 100;
    nowTime.textContent = formatTime(nowT);
    function formatTime(seconds) {
        let min = Math.floor((seconds / 60));
        let sec = Math.floor(seconds - (min * 60));
        if (sec < 10){ 
            sec  = `0${sec}`;
        };
        return `0${min}:${sec}`;
    };
    if (progress.value == 100) {
        playnextAudio();
    }
}

/*
function WindV () {                                                         //!!!
    let w = this.offsetWidth;
    let o = event.offsetX;
    console.log(w);
    console.log(o);
    audio.pause();
    audio.currentTime = audio.duration * (o / w);
    audio.play();
}
progress.addEventListener('click', WindV);
*/
//menu

const settingsBTN = document.querySelector('.settings');
const foot = document.querySelector('footer');
const menu = document.querySelector('.menu-settings');

function showMenu () {
    settingsBTN.classList.toggle('settings-active');
    foot.classList.toggle('footer-active');
    menu.classList.toggle('menu-active');
}

settingsBTN.addEventListener('click', showMenu);

