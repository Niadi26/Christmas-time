const pred = document.querySelector('.left');
    next = document.querySelector('.right');
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

const makeActive = ind => {
    activeCub(ind);
    activeSlide(ind);
    activeNumb(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        makeActive(index);
    } else {
        index++;
        makeActive(index);
    }
}

const predSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        makeActive (index);
    } else {
        index--;
        makeActive (index);
    }
}

next.addEventListener('click', nextSlide);
pred.addEventListener('click', predSlide);

cubes.forEach((item, indexCub) => {
    item.addEventListener('click', () => {
    index = indexCub;
    makeActive(index);
    });
})


const progress = document.querySelector('.video_control_pr');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
