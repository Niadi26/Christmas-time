const body = document.querySelector('body');
const category = document.querySelector('.category');
let counter;
let firstNum;
let randomNum;
const imgArr = makeImgArr('https://raw.githubusercontent.com/Niadi26/image-data/master/full/', 'full.jpg');
const infoImgArr = makeImgArr('https://raw.githubusercontent.com/Niadi26/image-data/master/img/', '.jpg');
const trueAnswers = [];

function makeImgArr(url, end) {
    let arr = [];
    for(i=0; i < 240; i++) {
        arr.push(`${url}${i}${end}`)
    }
    return arr
}

let getInfo = async function() {
    let result = await fetch('./image-data/data.json');
    let arr = await result.json();
    return arr;
}

category.addEventListener('click', (e) => {
    if (e.target.className === 'category_img' || e.target.className === 'category_img img_black') {
        firstNum = +e.target.id;
        counter = +e.target.id;
        let ind = +e.target.id;
        getInfo().then((arr) => {
            makePossibleAnswers(ind, arr);
        })
    }
})

function makePossibleAnswers(ind, arr) {
            let imgSrc = imgArr[ind];
            const autorArray = [];
            autorArray.push([arr[ind].author, true]);
            while(autorArray.length < 4) {
                randomNum = getRandomNum(0, 239);
               if(!(arr[ind].author === arr[randomNum].author)) {
                    autorArray.push(arr[randomNum].author);
               }
            }
            shuffle(autorArray);
            createAnswers(autorArray, imgSrc);
}

function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

let divQwestion;

  function createQwestion(newAns, imgSrc) {
    divQwestion = document.createElement('div');
        let newQw = document.createElement('div');
        let newImg = document.createElement('div');
        let exitButton = document.createElement('button')

        divQwestion.className = 'qwestion';
        exitButton.className = 'qwestion_exit'
        newQw.className = 'qwestion_el qwestion_txt';
        newImg.className = 'qwestion_el qwestion_img';
        newAns.className = 'qwestion_el answer_container';

        newQw.innerHTML = 'Кто автор этой фотографии?'
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {  
            newImg.style.backgroundImage = `url('${img.src}')`;
        }

        divQwestion.append(exitButton);
        divQwestion.append(newQw);
        divQwestion.append(newImg)
        divQwestion.append(newAns);
        category.append(divQwestion);                                //razmeschenie
  }

  function createAnswers(arr, imgSrc) {
    let inner = document.createElement('div');
    arr.forEach((el, index) => {
        const butt = document.createElement('button');
        butt.className = 'answer_el';
        if(Array.isArray(el)){
            butt.textContent = arr[index][0];
            butt.id = arr[index][1];
        } else {
            butt.textContent = arr[index];
        }
        inner.append(butt);
        })
    createQwestion(inner, imgSrc);
  } 

body.addEventListener('click', (e) => {
    if (e.target.className === 'answer_el') {
        if (e.target.id === 'true') {
            e.target.className = 'answer_el right'
            createInfo(counter, true);
        } else {
            e.target.className = 'answer_el wrong'
            createInfo(counter, false);
        }
    }
})

let divInfo;

function createInfo(index, result) {
    divInfo = document.createElement('div');
    divInfo.className = 'info_cont';
    getInfo().then((arr) => {

        let trueInfo = document.createElement('div');
        let imgInfo = document.createElement('div');
        let nameInfo = document.createElement('div');
        let autorInfo = document.createElement('div');
        let nextInfo = document.createElement('button');
        if(result) {
            trueInfo.className = 'info_result true_index';
            trueAnswers.push(infoImgArr[index]);
        } else {
            trueInfo.className = 'info_result false_index';
        }
        imgInfo.className = 'info_img';
        nameInfo.className = 'info_name';
        autorInfo.className = 'info_autor';
        nextInfo.className = 'info_button';

        const img = new Image();
        img.src = infoImgArr[index];
        img.onload = () => {  
            imgInfo.style.backgroundImage = `url('${img.src}')`;
        };
        nameInfo.innerHTML = arr[index].name;
        autorInfo.innerHTML = `${arr[index].author}, ${arr[index].year}`;
        nextInfo.innerHTML = 'Следующий вопрос';

        divInfo.append(trueInfo);
        divInfo.append(imgInfo);
        divInfo.append(nameInfo);
        divInfo.append(autorInfo);
        divInfo.append(nextInfo);
        divQwestion.append(divInfo);
    });
}

body.addEventListener('click', (e) => {
    if (e.target.className === 'info_button') {
        console.log(`${counter} - счет; ${trueAnswers.length} - правильные ответы` );
        if(counter == +firstNum + 9) {
            divInfo.remove();
            createResult(trueAnswers.length)
        } else {
        divQwestion.remove();
        ++counter;
        let ind = counter;
        getInfo().then((arr) => {
            makePossibleAnswers(ind, arr);
        })
        }
    }
})

function createResult(index) {
        let blockResult = document.createElement('div');
        let textResult = document.createElement('div');
        let scoreResult = document.createElement('div');
        let buttonResult = document.createElement('button');

        blockResult.className = 'info_cont';
        textResult.className = 'result_txt';
        scoreResult.className = 'result_score';
        buttonResult.className = 'result_button';

    if (index < 1) {
        textResult.innerHTML = 'Try again!';
        scoreResult.innerHTML = `0/10`;

    } else if (index === 10) {
        textResult.innerHTML = 'Great result!'
        scoreResult.innerHTML = `10/10`;

    } else {
        textResult.innerHTML = 'Congratulations!';
        scoreResult.innerHTML = `${index}/10`;
    }
    buttonResult.innerHTML = 'Home'

    blockResult.append(textResult);
    blockResult.append(scoreResult);
    blockResult.append(buttonResult);

    divQwestion.append(blockResult);
}



body.addEventListener('click', (e) => {
    if (e.target.className === 'result_button') {
        let changeCategory = document.getElementById(`${firstNum}`);
        let actual_score = changeCategory.getElementsByTagName("button")[0];
        divQwestion.remove();
        actual_score.innerHTML = `${trueAnswers.length}/10`;
        actual_score.classList.remove('hide')
        changeCategory.classList.remove('img_black');
    }
})
let blockExit;
body.addEventListener('click', (e) => {
    if (e.target.className === 'qwestion_exit') {
        blockExit = document.createElement('div');
        let textExit = document.createElement('div');
        let buttonExitYes = document.createElement('button');
        let buttonExitNo = document.createElement('button');

        blockExit.className = 'qwestion_block';
        textExit.className = 'qwestion_exit_txt'
        buttonExitYes.className = 'qwestion_exit_block';
        buttonExitYes.id = 'qwestion_yes'
        buttonExitNo.className = 'qwestion_exit_block';
        buttonExitNo.id = 'qwestion_no'

        textExit.innerHTML = 'Do you really want to quit the game?'
        buttonExitYes.innerHTML = 'Yes'
        buttonExitNo.innerHTML = 'No'

        blockExit.append(textExit);
        blockExit.append(buttonExitYes);
        blockExit.append(buttonExitNo);

        divQwestion.append(blockExit);
    }
})

body.addEventListener('click', (e) => {
    if (e.target.className === 'qwestion_exit_block') {
        if (e.target.id === 'qwestion_yes') {
        divQwestion.remove();
        } else if (e.target.id === 'qwestion_no') {
        blockExit.remove();
        }
    }
})