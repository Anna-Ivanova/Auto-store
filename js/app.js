
async function getDetails(event) {

    const value = event.target.getAttribute('value');
    const detailsCars = document.querySelector('.details-cars');
    const detailsGoods = document.querySelector('.details-goods');
    const detailsClients = document.querySelector('.details-clients');


    if (value === 'accessories') {

        detailsGoods.style.display = 'block';
        detailsCars.style.display = 'none';
        detailsClients.style.display = 'none';
    }
    if (value === 'people') {
        detailsClients.style.display = 'block';
        detailsCars.style.display = 'none';
        detailsGoods.style.display = 'none';
    }

    document.getElementById('tbody').innerHTML = '';
    document.getElementById('tbody-goods').innerHTML = '';
    document.getElementById('tbody-clients').innerHTML = '';
    const response = await fetch(`static/${value}.json`);
    let data = await response.json();
    if (localStorage.getItem(value) === null) {
        localStorage.setItem(value, JSON.stringify(data));
    }
    let dat = JSON.parse(localStorage.getItem(value));
    if (value === 'cars') {
        detailsCars.style.display = 'block';
        detailsGoods.style.display = 'none';
        detailsClients.style.display = 'none';
        carInf = JSON.parse(localStorage.getItem('cars'));
    }
    console.log(dat);
    showCars(dat, value);
}
let carInf = JSON.parse(localStorage.getItem('cars')) || [];


const viewCars = document.querySelector('.viewCars');
viewCars.addEventListener('click', getDetails);
const viewGoods = document.querySelector('.viewAccessories');
viewGoods.addEventListener('click', getDetails);
const viewClients = document.querySelector('.viewClients');
viewClients.addEventListener('click', getDetails);

// featForm
// форма і кнопка додати для людей

const btnAddPeople = document.querySelector('.addNewPeople');
btnAddPeople.addEventListener('click', createNewPeople);

function createNewPeople() {
    const form = document.querySelector('.editAddPeople');
    form.style.display = 'block';

    const btnClose = document.querySelector('.btnClose');
    btnClose.addEventListener('click', closeForm);
}

// форма і кнопка додати для товарів для машини
const btnAddAccessories = document.querySelector('.addNewAccessories');
btnAddAccessories.addEventListener('click', createNewAccessories);

function createNewAccessories() {
    const form = document.querySelector('.editAddGoods');
    form.style.display = 'block';

    const btnClose = document.querySelector('.btnCloseGoods');
    btnClose.addEventListener('click', closeForm);
}

// форма і кнопка додати для машини
const btnAddCar = document.querySelector('.addCar');
btnAddCar.addEventListener('click', createNewCar);
/*
function createNewCar() {
    const form = document.querySelector('.editAddCar');
    form.style.display = 'block';

    const btnClose = document.querySelector('.btnCloseCar');
    btnClose.addEventListener('click', closeForm);
}*/

// кнопка закрити
function closeForm() {
    const formPeople = document.querySelector('.editAddPeople');
    formPeople.style.display = 'none';
    const formAccessories = document.querySelector('.editAddGoods');
    formAccessories.style.display = 'none';
    const formCar = document.querySelector('.editAddCar');
    formCar.style.display = 'none';
}




