let imgIndex = 0;
const width = 100;
const images = document.querySelectorAll('.img');
const slider = document.querySelector('.slide');

showSlides();
function showSlides() {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    moveSlide();
    timer = setTimeout(showSlideNext, 3000);

}

function showSlideNext() {
    clearTimeout(timer);
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    moveSlide();
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
//-------------end Slider------------//
async function getCars() {
    const response = await fetch('static/cars.json');
    let data = await response.json();

    showCars(data);

}

// форма і кнопка додати для людей
const btnAddPeople = document.querySelector('.addNewPeople');
btnAddPeople.addEventListener('click', createNewPeople);

function createNewPeople(){
    const form = document.querySelector('.editAddPeople');
    form.style.display = 'block';

    const btnClose = document.querySelector('.btnClose');
    btnClose.addEventListener('click', closeForm);
}

// форма і кнопка додати для товарів для машини
const btnAddAccessories = document.querySelector('.addNewAccessories');
btnAddAccessories.addEventListener('click', createNewAccessories);

function createNewAccessories(){
    const form = document.querySelector('.editAddGoods');
    form.style.display = 'block';

    const btnClose = document.querySelector('.btnCloseGoods');
    btnClose.addEventListener('click', closeForm);
}

// форма і кнопка додати для машини
const btnAddCar = document.querySelector('.addCar');
btnAddCar.addEventListener('click', createNewCar);

function createNewCar(){
    const form = document.querySelector('.editAddCar');
    form.style.display = 'block';
    
    const btnClose = document.querySelector('.btnCloseCar');
    btnClose.addEventListener('click', closeForm);
}

// кнопка закрити
function closeForm(){
    const formPeople = document.querySelector('.editAddPeople');
    formPeople.style.display = 'none';
    const formAccessories = document.querySelector('.editAddGoods');
    formAccessories.style.display = 'none';
    const formCar = document.querySelector('.editAddCar');
    formCar.style.display = 'none';
}

