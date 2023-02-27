function closeForm() {
    const formPeople = document.querySelector('.editAddPeople');
    formPeople.style.display = 'none';

    const formAccessories = document.querySelector('.editAddGoods');
    formAccessories.style.display = 'none';

    const formCar = document.querySelector('.editAddCar');
    formCar.style.display = 'none';

    const formSell = document.querySelector('.sellGoods');
    formSell.style.display = 'none';
    
    cleanOrdersHistory();

}

function cleanOrdersHistory() {
    const historyInfo = document.querySelector('.order-history-info');
    historyInfo.innerHTML = '';
    historyInfo.style.display = 'none';
}

function closeTableCars() {
    document.querySelector('.details-cars').style.display = 'none';
    cleaningCarsFilter();

}

function closeTableGoods() {
    document.querySelector('.details-goods').style.display = 'none';
    cleaningGoodsFilter();
}

function closeTableCustomers() {
    document.querySelector('.details-clients').style.display = 'none';
    cleaningPeopleFilter();
}

function closeTableBoughtCars() {
    document.querySelector('.details-bought-car').style.display = 'none';
    cleaningBoughtCarsFilter();
}

function closeTableBoughtGoods() {
    document.querySelector('.details-bought-goods').style.display = 'none';
    cleaningBoughtGoodsFilter();
}