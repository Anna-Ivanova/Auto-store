function emptyList(Inf, table, titles, message, forms){
    if(Inf.length <= 0){
        const tbody = document.querySelector(table);
        tbody.style.display = 'none';

        const title = document.querySelector(titles);
        title.style.display = 'none';

        const messageEmpty = document.querySelector(message);
        messageEmpty.style.display = 'block';

        const formFilter = document.querySelector(forms);
        formFilter.style.display = 'none';
    }
    if(Inf.length > 0){
        const messageEmpty = document.querySelector(message);
        messageEmpty.style.display = 'none';

        const title = document.querySelector(titles);
        title.style.display = 'block';

        const tbody = document.querySelector(table);
        tbody.style.display = 'inline-table';

        const formFilter = document.querySelector(forms);
        formFilter.style.display = 'flex';
    }
}


function emptyListCar(){
    const tableCar = '.table_car';
    const titleCar = '.title_cars';
    const messageCar = '.messageEmptyCar';
    const formCar = '.formFilterCars';
    emptyList(carInf, tableCar, titleCar, messageCar, formCar);
}

function emptyListGoods(){
    const tableGoods = '.table_goods';
    const titleGoods = '.title_goods';
    const messageGoods = '.messageEmptyGoods';
    const formGoods = '.formFilterGoods';
    emptyList(goodsInf, tableGoods, titleGoods, messageGoods, formGoods);
}

function emptyListPeople(){
    const tablePeople = '.table_people';
    const titlePeople = '.title_people';
    const messagePeople = '.messageEmptyPeople';
    const formPeople = '.formFilterPeople';
    emptyList(peopleInf, tablePeople, titlePeople, messagePeople, formPeople);
}

function emptyListPurchaseCars(){
    const tablePurchaseCars = '.table_bought_car';
    const titlePurchaseCars = '.title_bought_car';
    const messagePurchaseCars = '.messageEmptyBoughtCar';
    const formBoughtCars = '.formFilterBoughtCars';
    emptyList(purchaseCarsInf, tablePurchaseCars, titlePurchaseCars, messagePurchaseCars, formBoughtCars);
}


function emptyListPurchaseGoods(){
    const tablePurchaseGoods = '.table_bought_goods';
    const titlePurchaseGoods = '.title_bought_goods';
    const messagePurchaseGoods = '.messageEmptyBoughtGoods';
    const formBoughtGoods = '.formFilterBoughtGoods';
    emptyList(purchaseGoodsInf, tablePurchaseGoods, titlePurchaseGoods, messagePurchaseGoods, formBoughtGoods);
}