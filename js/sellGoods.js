let cart = {};
let carCart = {};
function cleanOptions(selectorModel, clasname) {
    if (selectorModel.contains(document.querySelector(`${clasname}`))) {
        let modelOptions = document.querySelectorAll(`${clasname}`);
        for (let i = 0; i < modelOptions.length; i++) {
            modelOptions[i].remove();
        }
    }
}

function showSellForm(event) {
    const button = event.target.getAttribute('id');
    const form = document.querySelector('.sellGoods');
    form.style.display = 'block';
    const btnClose = document.querySelector('.btnCloseSell');
    btnClose.addEventListener('click', closeForm);
    peopleInf.forEach(element => {
        if (element.id === Number(button)) {
            person = element;
        }
    });

    // const person = peopleInf[button];
    // console.log(peopleInf[button]);
    //--------------------------
    const persId = button;
    const arrow = document.querySelector('.arrow-down');
    arrow.addEventListener('click', function () {
        showOrdersHistory(persId);
    });
    console.log(persId);
    //-----------------------
    document.querySelector('.sell-name').innerHTML = `${person.name} ${person.surname}`;
    const selectModel = document.querySelector('.select-carModel');
    const selectBody = document.querySelector('.select-carBody');
    const selectGoodsModel = document.querySelector('.select-goodsModel');
    //clean options

    cleanOptions(selectModel, '.model-option');
    cleanOptions(selectBody, '.body-option');
    cleanOptions(selectGoodsModel, '.formodel-option');

    //filter and sort unique models

    let carModels = filterUniqeModel(carInf, 'model');
    sortDetails(carModels, 'model', false);

    let goodsCarModels = filterUniqeModel(goodsInf, 'intended_for_cars');
    sortDetails(goodsCarModels, 'intended_for_cars', false);

    //---------------------------------------------------
    for (let i = 0; i < carModels.length; i++) {
        let carOptionModel = document.createElement('option');
        carOptionModel.value = carModels[i].model;
        carOptionModel.classList.add('model-option');
        carOptionModel.textContent = carModels[i].model;
        selectModel.appendChild(carOptionModel);
    }
    for (let i = 0; i < goodsCarModels.length; i++) {
        let goodsOptionModel = document.createElement('option');
        goodsOptionModel.value = goodsCarModels[i].intended_for_cars.split(' ').slice(-1);
        goodsOptionModel.classList.add('formodel-option');
        goodsOptionModel.textContent = goodsOptionModel.value;
        selectGoodsModel.appendChild(goodsOptionModel);
    }
    //-----model change eventlistener--------
    selectModel.addEventListener('change', function (e) {
        let elem = e.target;

        if (selectBody.contains(document.querySelector('.body-option'))) {
            let options = document.querySelectorAll('.body-option');
            for (let i = 0; i < options.length; i++) {
                options[i].remove();
            }
        }
        let valModel = elem.options[elem.selectedIndex].value;
        if (valModel) {
            let carInfChange = carInf.filter(function (item) {
                return item.model === valModel;
            });
            //-------BODY options unique filter--------------------------------------------
            let carBodyOptions = filterUniqeModel(carInfChange, 'body');
            sortDetails(carBodyOptions, 'body', false);
            for (let i = 0; i < carBodyOptions.length; i++) {
                let carOptionBody = document.createElement('option');
                carOptionBody.classList.add('body-option');
                carOptionBody.value = carBodyOptions[i].body;
                carOptionBody.textContent = carBodyOptions[i].body;
                selectBody.appendChild(carOptionBody);
            }
            //-------BODY change eventlistener--------------------------------------------        
            selectBody.addEventListener('change', function () {
                const valBody = this.value;
                const btnViewCarsForSell = document.querySelector('.btn-sell');
                btnViewCarsForSell.setAttribute('data-userid', persId);
                btnViewCarsForSell.addEventListener('click', function () {
                    const sellCar = document.querySelector('.selectedcar');
                    sellCar.style.display = 'block';
                    showCarsForSell(carInfChange, valBody);
                });

            })
        }
    });
    //-------GOODS BY MODEL change eventlistener--------------------------------------------  
    selectGoodsModel.addEventListener('change', function () {
        const goodsBody = this.value;
        const btnViewGoodsForSell = document.querySelector('.btn-sellgoods');
        btnViewGoodsForSell.setAttribute('data-userid', persId);
        btnViewGoodsForSell.addEventListener('click', function () {
            const sellCar = document.querySelector('.selectedcar');
            document.querySelector('.selectedcar-table').innerHTML = '';
            sellCar.style.display = 'block';
            showGoodsForSell(goodsInf, goodsBody);
        })
    })
}

//--отбор уникальных моделей
function filterUniqeModel(array, prop) {
    let tmpArray = [];
    function itemCheck(item) {

        if (tmpArray.indexOf(item[prop]) === -1) {
            tmpArray.push(item[prop]);
            return true
        }
        return false;
    }
    let uniqueArray = array.filter((item) => itemCheck(item));
    return uniqueArray;
}
//------Show car for sell----------------------------------------
function showCarsForSell(array, body) {
    carCart = {};
    cart = {};
    const sellCar = document.querySelector('.selectedcar-table');
    sellCar.innerHTML = "";
    sellCar.innerHTML += `<table class="table table_car">
<thead class="th_car">
    <tr class="headrow-cars">
        <th>Num</th>
        <th>ID</th>
        <th data-col="model">Model</th>
        <th data-col="body">Body</th>
        <th data-col="color">Color</th>
        <th data-col="engine">Engine</th>
        <th>Trans-<br>mission</th>
        <th data-col="fuel">Fuel type</th>
        <th data-col="price">Price in <br> Euro</th>
        <th data-col="quantity">Quantity</th>
        <th>Action</th>
    </tr>
</thead>
<tbody id="tbodysell">
</tbody>
</table>`
    const tbody = document.getElementById('tbodysell');
    tbody.innerHTML = '';
    const btnCloseSell = document.querySelector('.btnCloseSellDet');
    btnCloseSell.addEventListener('click', closeCleanGoods);

    let carSellResult = array.filter(function (item) {
        return item.body === body;
    });
    carSellResult.forEach((element, index) => {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', element.id);
        tbody.appendChild(carRow);
        createElement('td', null, null, index + 1, carRow);

        for (let key in element) {
            createElement('td', { className: key }, null, element[key], carRow);
        }
        const cellAction = createElement('td', { className: 'actionsell d-flex', id: element.id }, null, null, carRow);
        console.log(cellAction);
        createElement('input', { className: 'quantity', type: 'number', min: "1" }, null, null, cellAction);
        createElement('button', { className: 'btnSellCar btnSell', id: element.id }, { click: addCars }, 'Sell', cellAction);
    });

}
//----Show CARS in cart-------------------------------------------------
function addCars(event) {

    console.log(event.target);
    const personId = document.querySelector('.btn-sell').getAttribute('data-userid');
    const products = document.querySelector('.products');
    const resultGoods = document.querySelector('.result-sell');
    let quantityValue = event.target.parentNode.firstChild.value;
    const carRow = event.target.parentNode.parentNode;
    let carId = carRow.querySelector('.id').innerText;
    let orderDate = Date.now();


    if (quantityValue) {
        products.style.display = 'flex';
        const newSoldCar = {
            userid: personId,
            id: carRow.querySelector('.id').innerText,
            model: carRow.querySelector('.model').innerText,
            body: carRow.querySelector('.body').innerText,
            color: carRow.querySelector('.color').innerText,
            engine: carRow.querySelector('.engine').innerText,
            transmission: carRow.querySelector('.transmission').innerText,
            fuel: carRow.querySelector('.fuel').innerText,
            price: carRow.querySelector('.price').innerText,
            quantity: quantityValue,
            date: orderDate
        }
        carCart[carId] = newSoldCar;
        const carInCart = resultGoods.querySelector(`[data_prod="${newSoldCar.id}"]`);
        document.querySelector('.productsTotal').style.display = 'flex';
        if (carInCart) {
            const countElement = carInCart.querySelector('.good-quantity');
            const totalElement = carInCart.querySelector('.good-total');
            countElement.innerText = Number(quantityValue) + Number(countElement.innerText);
            totalElement.innerText = Number(countElement.innerText) * Number(newSoldCar.price);
            carCart[carId]['quantity'] = countElement.innerText;
        }
        else {
            const index = carInf.findIndex(item => item.id === +event.target.id);
            console.log(index);
            const rowProduct = createElement('div', { className: 'product-main', data_prod: carInf[index].id }, null, null, resultGoods)
            const goodName = createElement('div', { className: 'good-name' }, null, `${carInf[index].id} ${carInf[index].body} ${carInf[index].color} ${carInf[index].engine}`, rowProduct);
            const goodPrice = createElement('div', { className: 'good-price' }, null, carInf[index].price, rowProduct);
            createElement('div', { className: 'good-quantity' }, null, quantityValue, rowProduct);
            let total = Number(carInf[index].price) * Number(quantityValue);
            createElement('div', { className: 'good-total' }, null, total, rowProduct);
            const deleteBlock = createElement('div', { className: 'good-delete' }, null, null, rowProduct);
            createElement('span', { className: 'icon-delete btn-del btn-act delete' }, { click: deleteCartRow }, null, deleteBlock);
        }
        let priceElements = resultGoods.querySelectorAll('.good-total');
        const sumTotal = document.querySelector('.items-total');
        let sum = 0;
        for (let i = 0; i < priceElements.length; i++) {
            let priceElem = Number(priceElements[i].innerText);
            sum += priceElem;
        }
        sumTotal.innerText = sum;
        const btnSellConfirm = document.querySelector('.btnConfirm');
        btnSellConfirm.addEventListener("click", confirmSellCar);
    }
}
function deleteCartRow(event) {
    const productMain = event.target.parentNode.parentNode;
    const indexProd = productMain.getAttribute('data_prod');
    productMain.remove();
    delete carCart[indexProd];
    const resultGoods = document.querySelector('.result-sell');
    let priceElements = resultGoods.querySelectorAll('.good-total');
    const sumTotal = document.querySelector('.items-total');
    let sum = 0;
    for (let i = 0; i < priceElements.length; i++) {
        let priceElem = Number(priceElements[i].innerText);
        sum += priceElem;
    }
    sumTotal.innerText = sum;
    console.log(carCart);
}
function deleteRowGoods(event) {
    const productMain = event.target.parentNode.parentNode;
    const indexProd = productMain.getAttribute('data_prod');
    productMain.remove();
    delete cart[indexProd];
    const resultGoods = document.querySelector('.result-sell');
    let priceElements = resultGoods.querySelectorAll('.good-total');
    const sumTotal = document.querySelector('.items-total');
    let sum = 0;
    for (let i = 0; i < priceElements.length; i++) {
        let priceElem = Number(priceElements[i].innerText);
        sum += priceElem;
    }
    sumTotal.innerText = sum;
    console.log(cart);

}
function confirmSellCar() {

    for (let key in carCart) {
        for (let i = 0; i < carInf.length; i++) {
            if (parseInt(key) === carInf[i].id) {
                carInf[i].quantity = parseInt(carInf[i].quantity) - parseInt(carCart[key]['quantity']);
            }
        }
        for (let i = 0; i < peopleInf.length; i++) {
            if (parseInt(carCart[key]['userid']) == peopleInf[i].id) {
                const newCar = {
                    id: +key,
                    model: carCart[key]["model"],
                    body: carCart[key]["body"],
                    color: carCart[key]["color"],
                    engine: carCart[key]["engine"],
                    transmission: carCart[key]["transmission"],
                    fuel: carCart[key]["fuel"],
                    price: carCart[key]["price"],
                    quantity: carCart[key]["quantity"],
                    date: carCart[key]["date"],
                }
                peopleInf[i].auto.push(newCar);
            }
        }
    }
    localStorage.setItem('cars', JSON.stringify(carInf));
    localStorage.setItem('people', JSON.stringify(peopleInf));

    closeCleanGoods();
    showPeople();
    addPurchaseCarsInData();
}

function closeCleanGoods() {
    document.querySelector('.result-sell').innerHTML = "";
    document.querySelector('.selectedcar-table').innerHTML = '';
    document.querySelector('.items-total').innerText = '';
    document.querySelector('.productsTotal').style.display = 'none';
    document.querySelector('.products').style.display = 'none';
    document.querySelector('.selectedcar').style.display = 'none';
    const selectModel = document.querySelector('.select-carModel');
    const selectBody = document.querySelector('.select-carBody');
    const selectGoodsModel = document.querySelector('.select-goodsModel');
    selectBody.selectedIndex = 0;
    selectModel.selectedIndex = 0;
    selectGoodsModel.selectedIndex = 0;
}
//-----show GOODS for sell-----------------------------
function showGoodsForSell(array, value) {
    cart = {};
    carCart = {};
    const btnCloseSell = document.querySelector('.btnCloseSellDet');
    const sellCar = document.querySelector('.selectedcar-table');
    btnCloseSell.addEventListener('click', closeCleanGoods);

    sellCar.innerHTML = "";
    sellCar.innerHTML += `<table class="table table_goods">
    <thead>
        <tr class="headrow-goods">
            <th data-col="id">Num</th>
            <th data-col="product">Product</th>
            <th data-col="part_number">Part Number</th>
            <th>Intended<br>for model</th>
            <th data-col="price">Price in <br> Euro</th>
            <th data-col="quantity">Quantity</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody id="tbodyGoods">
    </tbody>
</table>`
    let carGoodsResult = array.filter(function (item) {
        return Number(item.intended_for_cars.split(' ').slice(-1)) === Number(value);
    });

    const tbodyGoods = document.getElementById('tbodyGoods');

    carGoodsResult.forEach((element) => {
        const goodsRow = document.createElement('tr');
        goodsRow.setAttribute('id', element.id);
        tbodyGoods.appendChild(goodsRow);

        for (let key in element) {
            createElement('td', { className: key }, null, element[key], goodsRow);

        }
        const cellAction = createElement('td', { className: 'actionsell d-flex', id: element.id }, null, null, goodsRow);
        createElement('input', { className: 'quantity', type: 'number', min: "1" }, null, null, cellAction);
        createElement('button', { className: 'btnSell', id: element.id }, { click: addGoods }, 'Add', cellAction);
    });
}
//-----show GOODS in Cart-----------------------------
function addGoods(event) {
    const products = document.querySelector('.products');
    const personCartId = document.querySelector('.btn-sellgoods').getAttribute('data-userid');
    const resultGoods = document.querySelector('.result-sell');
    let quantityValue = event.target.parentNode.firstChild.value;
    const productRow = event.target.parentNode.parentNode;
    let goodId = productRow.querySelector('.id').innerText;
    let orderDate = Date.now();


    if (quantityValue) {
        const newCartGood = {
            userid: personCartId,
            goodid: productRow.querySelector('.id').innerText,
            part_number: productRow.querySelector('.part_number').innerText,
            intended_for_cars: productRow.querySelector('.intended_for_cars').innerText,
            product: productRow.querySelector('.product').innerText,
            price: productRow.querySelector('.price').innerText,
            quantity: quantityValue,
            date: orderDate
        }
        cart[goodId] = newCartGood;
        const productInCart = resultGoods.querySelector(`[data_prod="${newCartGood.goodid}"]`);
        products.style.display = 'flex';
        document.querySelector('.productsTotal').style.display = 'flex';
        if (productInCart) {
            const countElement = productInCart.querySelector('.good-quantity');
            const totalElement = productInCart.querySelector('.good-total');
            countElement.innerText = Number(newCartGood.quantity) + Number(countElement.innerText);
            totalElement.innerText = Number(countElement.innerText) * Number(newCartGood.price);
            cart[goodId]['quantity'] = countElement.innerText;
        }
        else {
            const index = goodsInf.findIndex(item => item.id === +event.target.id);
            const rowProduct = createElement('div', { className: 'product-main', data_prod: goodsInf[index].id }, null, null, resultGoods)
            const goodName = createElement('div', { className: 'good-name' }, null, goodsInf[index].product, rowProduct);
            const goodPrice = createElement('div', { className: 'good-price' }, null, goodsInf[index].price, rowProduct);
            createElement('div', { className: 'good-quantity' }, null, quantityValue, rowProduct);
            let total = Number(goodsInf[index].price) * Number(quantityValue);
            createElement('div', { className: 'good-total' }, null, total, rowProduct);
            const deleteBlock = createElement('div', { className: 'good-delete' }, null, null, rowProduct);
            createElement('span', { className: 'icon-delete btn-del btn-act delete' }, { click: deleteRowGoods }, null, deleteBlock);
        }

    }
    let priceElements = resultGoods.querySelectorAll('.good-total');
    const sumTotal = document.querySelector('.items-total');

    //localStorage.setItem('cart', JSON.stringify(cart));

    let sum = 0;
    for (let i = 0; i < priceElements.length; i++) {
        let priceElem = Number(priceElements[i].innerText);
        sum += priceElem;
    }
    sumTotal.innerText = sum;
    const btnSellConfirm = document.querySelector('.btnConfirm');
    btnSellConfirm.addEventListener("click", confirmSell);

}
function confirmSell() {

    // console.log(cart);
    for (let key in cart) {
        console.log(cart[key]['quantity']);
        for (let i = 0; i < goodsInf.length; i++) {

            if (parseInt(key) === goodsInf[i].id) {
                goodsInf[i].quantity = parseInt(goodsInf[i].quantity) - parseInt(cart[key]['quantity']);
            }
        }
        for (let i = 0; i < peopleInf.length; i++) {
            if (parseInt(cart[key]['userid']) == peopleInf[i].id) {
                const Newgood = {
                    id: +key,
                    product: cart[key]["product"],
                    part_number: cart[key]["part_number"],
                    intended_for_cars: cart[key]["intended_for_cars"],
                    price: cart[key]["price"],
                    quantity: cart[key]['quantity'],
                    date: cart[key]['date']
                }
                peopleInf[i].accessories.push(Newgood);
            }
        }
    }
    console.log(peopleInf);
    localStorage.setItem('accessories', JSON.stringify(goodsInf));
    localStorage.setItem('people', JSON.stringify(peopleInf));


    closeCleanGoods();
    showPeople();
    addPurchaseGoogsInData();
}

