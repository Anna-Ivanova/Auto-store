let carInf = JSON.parse(localStorage.getItem('cars')) || [];
let goodsInf = JSON.parse(localStorage.getItem('accessories')) || [];
let peopleInf = JSON.parse(localStorage.getItem('people')) || [];
let purchaseCarsInf, purchaseGoodsInf;

initApplication();

clickButton('.viewCars', showCars);
clickButton('.viewAccessories', showGoods);
clickButton('.viewClients', showPeople);
clickButton('.viewBoughtCars', showBoughtCars);
clickButton('.viewBoughtAccessories', showBoughtAccessories);
clickButton('.addNewPeople', createNewPeople);
clickButton('.addNewAccessories', createNewAccessories);
clickButton('.addCar', createNewCar);
clickButton('.btnCleaningCarsFilter', cleaningCarsFilterData);
clickButton('.btnCleaningGoodsFilter', cleaningGoodsFilterData);
clickButton('.btnCleaningPeopleFilter', cleaningPeopleFilterData);
clickButton('.btnCleaningBoughtCarsFilter', cleaningBoughtCarsFilterData);
clickButton('.btnCleaningBoughtGoodsFilter', cleaningBoughtGoodsFilterData);
clickButton('.headrow-cars', function (event) {
    sortTable(event, carInf, 'tbody');
});

clickButton('.headrow-goods', function (event) {
    sortTable(event, goodsInf, 'tbody-goods');
});
clickButton('.headrow-people', function (event) {
    sortTable(event, peopleInf, 'tbody-clients');
});
clickButton('.headrow_bought_car', function (event) {
    sortTable(event, purchaseCarsInf, 'tbody-bought-cars');
});
clickButton('.headrow_bought_goods', function (event) {
    sortTable(event, purchaseGoodsInf, 'tbody-bought-goods');
});   
