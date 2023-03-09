async function getCarstoLocalStor() {
    const response = await fetch(`./static/cars.json`);
    let data = await response.json();
    if (localStorage.getItem('cars') === null) {
        localStorage.setItem('cars', JSON.stringify(data));
        carInf = JSON.parse(localStorage.getItem('cars'));
    }
}

async function getGoodstoLocalStor() {
    const response = await fetch(`./static/accessories.json`);
    let data = await response.json();
    if (localStorage.getItem('accessories') === null) {
        localStorage.setItem('accessories', JSON.stringify(data));
        goodsInf = JSON.parse(localStorage.getItem('accessories'));
    }
}

async function getPeopletoLocalStor() {
    const response = await fetch(`./static/people.json`);
    let data = await response.json();
    if (localStorage.getItem('people') === null) {
        localStorage.setItem('people', JSON.stringify(data));
        peopleInf = JSON.parse(localStorage.getItem('people'));
    }
}

async function initApplication() {
    await Promise.all([
        getCarstoLocalStor(),
        getGoodstoLocalStor(),
        getPeopletoLocalStor(),
    ]);

    addPurchaseCarsInData();
    addPurchaseGoogsInData();

    const btnFilterCars = document.querySelector('.searchfilterCars');
    btnFilterCars.addEventListener('click', function (event) {
        event.preventDefault();
        showFilterCars(carInf);
    });


    const btnFilterGoods = document.querySelector('.searchFilterGoods');
    btnFilterGoods.addEventListener('click', function (event) {
        event.preventDefault();
        showFilterGoods(goodsInf);
    });


    const btnFilterPeople = document.querySelector('.searchFilterPeople');
    btnFilterPeople.addEventListener('click', function (event) {
        event.preventDefault();
        showFilterPeople(peopleInf);
    });


    const btnFilterPurchasesCars = document.querySelector('.searchfilterBoughtCars');
    btnFilterPurchasesCars.addEventListener('click', function (event) {
        event.preventDefault();
        showFilterPurchasesCars(purchaseCarsInf);
    });


    const btnFilterPurchasesGoods = document.querySelector('.searchFilterPurchasesGoods');
    btnFilterPurchasesGoods.addEventListener('click', function (event) {
        event.preventDefault();
        showFilterPurchasesGoods(purchaseGoodsInf);
    });


}