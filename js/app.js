let carInf = JSON.parse(localStorage.getItem('cars')) || [];
let goodsInf = JSON.parse(localStorage.getItem('accessories')) || [];
let peopleInf = JSON.parse(localStorage.getItem('people')) || [];
let purchaseCarsInf, purchaseGoodsInf;

initApplication();

const viewCars = document.querySelector('.viewCars');
viewCars.addEventListener('click', showCars);

const viewGoods = document.querySelector('.viewAccessories');
viewGoods.addEventListener('click', showGoods);

const viewClients = document.querySelector('.viewClients');
viewClients.addEventListener('click', showPeople);

const viewBoughtCars = document.querySelector('.viewBoughtCars');
viewBoughtCars.addEventListener('click', showBoughtCars);

const viewBoughtAccessories = document.querySelector('.viewBoughtAccessories');
viewBoughtAccessories.addEventListener('click', showBoughtAccessories);

const btnAddPeople = document.querySelector('.addNewPeople');
btnAddPeople.addEventListener('click', createNewPeople);

const btnAddAccessories = document.querySelector('.addNewAccessories');
btnAddAccessories.addEventListener('click', createNewAccessories);

const btnAddCar = document.querySelector('.addCar');
btnAddCar.addEventListener('click', createNewCar);

const btnCleaningCarsFilter = document.querySelector('.btnCleaningCarsFilter');
btnCleaningCarsFilter.addEventListener('click', cleaningCarsFilter);

const btnCleaningGoodsFilter = document.querySelector('.btnCleaningGoodsFilter');
btnCleaningGoodsFilter.addEventListener('click', cleaningGoodsFilter);

const btnCleaningPeopleFilter = document.querySelector('.btnCleaningPeopleFilter');
btnCleaningPeopleFilter.addEventListener('click', cleaningPeopleFilter);

const btnCleaningBoughtCarsFilter = document.querySelector('.btnCleaningBoughtCarsFilter');
btnCleaningBoughtCarsFilter.addEventListener('click', cleaningBoughtCarsFilter);

const btnCleaningBoughtGoodsFilter = document.querySelector('.btnCleaningBoughtGoodsFilter');
btnCleaningBoughtGoodsFilter.addEventListener('click', cleaningBoughtGoodsFilter);


const tableHead = document.querySelector('.headrow-cars');
const tableHeadGoods = document.querySelector('.headrow-goods');
const tableHeadPeople = document.querySelector('.headrow-people');
let columnDir = true;
function moveArrows(event) {
    let thProperties = document.querySelectorAll('.arr-sort');
    thProperties.forEach(element => {
        element.classList.remove('arr-up');
        element.classList.remove('arr-down');

        if (element == event.target) {
            if (columnDir == false) {

                element.classList.add('arr-down');
            } else {

                element.classList.add('arr-up');
            }
        }

    })
}

tableHead.addEventListener('click', function (event) {

    let prop = event.target.getAttribute('data-col');

    moveArrows(event);
    columnDir = !columnDir;
    console.log(columnDir);

    if (prop !== null) {
        sortDetails(carInf, prop, columnDir);
        showCars();
    }
})
tableHeadGoods.addEventListener('click', function (event) {

    let prop = event.target.getAttribute('data-col');
    moveArrows(event);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(goodsInf, prop, columnDir);
        showGoods();
    }
})
tableHeadPeople.addEventListener('click', function (event) {
    let prop = event.target.getAttribute('data-col');
    moveArrows(event);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(peopleInf, prop, columnDir);
        showPeople();
    }
})


function sortDetails(arr, prop, columnDir) {

    return arr.sort(function (propA, propB) {
        if (prop === 'id' || prop === 'model' || prop === 'transmission' || prop === 'date' || prop === 'price' || prop === 'quantity' || prop === 'part_number' || prop === 'age' || prop === 'phone_number') {
            if (columnDir == false) {
                return Number(propA[prop]) - Number(propB[prop])
            }

            if (columnDir == true) {
                return Number(propB[prop]) - Number(propA[prop])
            }

        }
        if (prop === 'intended_for_cars') {
            if (!columnDir ? Number(propA[prop].split(' ').slice(-1)) < Number(propB[prop].split(' ').slice(-1)) : Number(propA[prop].split(' ').slice(-1)) > Number(propB[prop].split(' ').slice(-1))) return -1;
        }
        else {
            if (!columnDir ? propA[prop].toLowerCase() < propB[prop].toLowerCase() : propA[prop].toLowerCase() > propB[prop].toLowerCase()) return -1;
        }
    })
}







