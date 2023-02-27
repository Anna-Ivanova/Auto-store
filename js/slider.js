let imgIndex = 0;
const width = 100;
const images = document.querySelectorAll('.img');
const slider = document.querySelector('.slide');

function slidesNext(){
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    moveSlide();
}

showSlides();
function showSlides() {
    slidesNext();
    timer = setTimeout(showSlideNext, 3000);

}

function showSlideNext() {
    clearTimeout(timer);
    slidesNext();
    timer = setTimeout(showSlides, 3000);
}

function showSlidePrev() {
    clearTimeout(timer);
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    }
    moveSlide();
    timer = setTimeout(showSlideNext, 3000);

}

const btnNext = document.querySelector('.next');
btnNext.addEventListener('click', showSlideNext);
const btnBack = document.querySelector('.back');
btnBack.addEventListener('click', showSlidePrev);
function moveSlide() {
    slider.style.transform = `translateX(${-imgIndex * width}%)`;
}
