let carInf = JSON.parse(localStorage.getItem('cars')) || [];
let goodsInf = JSON.parse(localStorage.getItem('accessories')) || [];
let peopleInf = JSON.parse(localStorage.getItem('people')) || [];

getCarstoLocalStor();
getGoodstoLocalStor();
getPeopletoLocalStor();

const viewCars = document.querySelector('.viewCars');
viewCars.addEventListener('click', showCars);

const viewGoods = document.querySelector('.viewAccessories');
viewGoods.addEventListener('click', showGoods);

const viewClients = document.querySelector('.viewClients');
viewClients.addEventListener('click', showPeople);

const btnAddPeople = document.querySelector('.addNewPeople');
btnAddPeople.addEventListener('click', createNewPeople);

const btnAddAccessories = document.querySelector('.addNewAccessories');
btnAddAccessories.addEventListener('click', createNewAccessories);

const btnAddCar = document.querySelector('.addCar');
btnAddCar.addEventListener('click', createNewCar);

const tableHead = document.querySelector('.headrow-cars');
const tableHeadGoods = document.querySelector('.headrow-goods');
const tableHeadPeople = document.querySelector('.headrow-people');
let columnDir = true;
tableHead.addEventListener('click', function (event) {
    let prop = event.target.getAttribute('data-col');
    columnDir = !columnDir;
    console.log(columnDir);
    if (prop !== null) {
        sortDetails(carInf, prop, columnDir);
        showCars();
    }
})
tableHeadGoods.addEventListener('click', function (event) {
    let prop = event.target.getAttribute('data-col');
    console.log(prop);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(goodsInf, prop, columnDir);
        showGoods();
    }
})
tableHeadPeople.addEventListener('click', function (event) {
    let prop = event.target.getAttribute('data-col');
    console.log(prop);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(peopleInf, prop, columnDir);
        showPeople();
    }
})


function sortDetails(arr, prop, columnDir) {
    //const copyCarinf = [...carInf];
    return arr.sort(function (carA, carB) {
        if (prop === 'id' || prop === 'model' || prop === 'transmission' || prop === 'price' || prop === 'quantity' || prop === 'part_number' || prop === 'age' || prop === 'phone_number') {
            if (!columnDir ? Number(carA[prop]) < Number(carB[prop]) : Number(carA[prop]) > Number(carB[prop])) return -1;
        }
        else {
            if (!columnDir ? carA[prop].toLowerCase() < carB[prop].toLowerCase() : carA[prop].toLowerCase() > carB[prop].toLowerCase()) return -1;
        }
    })
}







