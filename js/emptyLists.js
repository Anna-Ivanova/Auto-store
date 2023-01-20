function emptyList(Inf, table, titles, message){
    if(Inf.length <= 0){
        const tbody = document.querySelector(table);
        tbody.style.display = 'none';

        const title = document.querySelector(titles);
        title.style.display = 'none';

        const messageEmpty = document.querySelector(message);
        messageEmpty.style.display = 'block';
    }
    if(Inf.length > 0){
        const messageEmpty = document.querySelector(message);
        messageEmpty.style.display = 'none';

        const title = document.querySelector(titles);
        title.style.display = 'block';

        const tbody = document.querySelector(table);
        tbody.style.display = 'inline-table';
    }
}


function emptyListCar(){
    const tableCar = '.table_car';
    const titleCar = '.title_cars';
    const messageCar = '.messageEmptyCar';
    emptyList(carInf, tableCar, titleCar, messageCar);
}

function emptyListGoods(){
    const tableGoods = '.table_goods';
    const titleGoods = '.title_goods';
    const messageGoods = '.messageEmptyGoods';
    emptyList(goodsInf, tableGoods, titleGoods, messageGoods);
}

function emptyListPeople(){
    const tablePeople = '.table_people';
    const titlePeople = '.title_people';
    const messagePeople = '.messageEmptyPeople';
    emptyList(peopleInf, tablePeople, titlePeople, messagePeople);
}

function emptyListPurchaseCars(){
    const tablePurchaseCars = '.table_bought_car';
    const titlePurchaseCars = '.title_bought_car';
    const messagePurchaseCars = '.messageEmptyBoughtCar';
    emptyList(purchaseCarsInf, tablePurchaseCars, titlePurchaseCars, messagePurchaseCars);
}


function emptyListPurchaseGoods(){
    const tablePurchaseGoods = '.table_bought_goods';
    const titlePurchaseGoods = '.title_bought_goods';
    const messagePurchaseGoods = '.messageEmptyBoughtGoods';
    emptyList(purchaseGoodsInf, tablePurchaseGoods, titlePurchaseGoods, messagePurchaseGoods);
}