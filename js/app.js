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





