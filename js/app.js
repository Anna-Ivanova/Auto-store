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
let columnDir = true;
tableHead.addEventListener('click', function (event) {
    let prop = event.target.getAttribute('data-col');
    columnDir = !columnDir;
    console.log(columnDir);
    sortCars(prop, columnDir);
    showCars();
    console.log(carInf);
})


function sortCars(prop, columnDir) {
    //const copyCarinf = [...carInf];
    return carInf.sort(function (carA, carB) {

        if (!columnDir ? carA[prop] < carB[prop] : carA[prop] > carB[prop]) return -1;


    })
}

//console.log(sortCars('price'));





