async function getCars() {
    const response = await fetch('static/cars.json');
    let data = await response.json();
    const dataCars = data.cars;
    if (localStorage.getItem("cars") === null) {
        localStorage.setItem('cars', JSON.stringify(dataCars));
    }
}

getCars();

let carInf = JSON.parse(localStorage.getItem('cars')) || [];
console.log(carInf);

showCars();

// форма і кнопка додати для машини
const btnAddCar = document.querySelector('.addCar');
btnAddCar.addEventListener('click', createNewCar);

// featForm
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

// кнопка закрити
function closeForm(){
    const formPeople = document.querySelector('.editAddPeople');
    formPeople.style.display = 'none';
    const formAccessories = document.querySelector('.editAddGoods');
    formAccessories.style.display = 'none';
    const formCar = document.querySelector('.editAddCar');
    formCar.style.display = 'none';
}




