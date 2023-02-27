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
clickButton('.headrow-cars', sortCars);
clickButton('.headrow-goods', sortGoods);
clickButton('.headrow-people', sortPeople);

