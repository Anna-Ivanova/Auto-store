let cart = {};
function showSellForm(event) {
    const button = event.target.getAttribute('id');
    const form = document.querySelector('.sellGoods');
    form.style.display = 'block';
    const btnClose = document.querySelector('.btnCloseSell');
    btnClose.addEventListener('click', closeForm);

    const person = peopleInf[button];
    //--------------------------
    const persId = person.id;

    //-----------------------
    document.querySelector('.sell-name').innerHTML = `${person.name} ${person.surname}`;
    const selectModel = document.querySelector('.select-carModel');
    const selectBody = document.querySelector('.select-carBody');
    const selectGoodsModel = document.querySelector('.select-goodsModel');
    //clean options
    if (selectModel.contains(document.querySelector('.model-option'))) {
        let modelOptions = document.querySelectorAll('.model-option');
        for (let i = 0; i < modelOptions.length; i++) {
            modelOptions[i].remove();
        }
    }
    if (selectGoodsModel.contains(document.querySelector('.formodel-option'))) {
        let formodelOptions = document.querySelectorAll('.formodel-option');
        for (let i = 0; i < formodelOptions.length; i++) {
            formodelOptions[i].remove();
        }
    }
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
            //---------------------------------------------------
            sortDetails(carInfChange, 'body', false);
            for (let i = 0; i < carInfChange.length; i++) {
                let carOptionBody = document.createElement('option');
                carOptionBody.classList.add('body-option');
                carOptionBody.value = carInfChange[i].body;
                carOptionBody.textContent = carInfChange[i].body;
                selectBody.appendChild(carOptionBody);
            }
            selectBody.addEventListener('change', function () {
                const valBody = this.value;
                const btnViewCarsForSell = document.querySelector('.btn-sell');
                btnViewCarsForSell.setAttribute('data-userid', persId);
                btnViewCarsForSell.addEventListener('click', function () {
                    const sellCar = document.querySelector('.selectedcar');
                    sellCar.style.display = 'block';
                    showCarsForSell(carInfChange, valModel, valBody);
                });

            })
        }
    });

    selectGoodsModel.addEventListener('change', function () {
        const goodsBody = this.value;
        console.log(goodsBody);
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
function showCarsForSell(array, val1, val2) {
    const sellCar = document.querySelector('.selectedcar-table');
    sellCar.innerHTML = "";
    sellCar.innerHTML += `<table class="table table_car">
<thead class="th_car">
    <tr class="headrow-cars">
        <th>ID</th>
        <th>Model</th>
        <th data-col="model">Num</th>
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
    btnCloseSell.addEventListener('click', function () {
        const selectedcar = document.querySelector('.selectedcar');
        selectedcar.style.display = 'none';
    });
    let carSellResult = array.filter(function (item) {
        return item.body === val2;
    });
    carSellResult.forEach((element, index) => {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', element.id);
        tbody.appendChild(carRow);
        createElement('td', null, null, index + 1, carRow);

        for (let key in element) {
            createElement('td', null, null, element[key], carRow);

        }
        const cellAction = createElement('td', { className: 'actionsell d-flex', id: element.id }, null, null, carRow);
        createElement('input', { className: 'quantity', type: 'number', min: "1" }, null, null, cellAction);
        createElement('button', { className: 'btnSell' }, null, 'Sell', cellAction);
    });

}
function showGoodsForSell(array, value) {
    const btnCloseSell = document.querySelector('.btnCloseSellDet');
    btnCloseSell.addEventListener('click', function () {
        const selectedcar = document.querySelector('.selectedcar');
        selectedcar.style.display = 'none';
    });
    const sellCar = document.querySelector('.selectedcar-table');
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
function addGoods(event) {
    const products = document.querySelector('.products');
    // products.style.display = 'flex';
    const personCartId = document.querySelector('.btn-sellgoods').getAttribute('data-userid');
    const resultGoods = document.querySelector('.result-sell');
    let quantityValue = event.target.parentNode.firstChild.value;
    const productRow = event.target.parentNode.parentNode;
    let goodId = productRow.querySelector('.id').innerText;

    const newCartGood = {
        userid: personCartId,
        goodid: productRow.querySelector('.id').innerText,
        product: productRow.querySelector('.product').innerText,
        price: productRow.querySelector('.price').innerText,
        quantity: quantityValue
    }
    cart[goodId] = newCartGood;
    const productInCart = resultGoods.querySelector(`[data_prod="${newCartGood.goodid}"]`);

    if (quantityValue) {
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
            createElement('span', { className: 'icon-delete btn-del btn-act delete' }, null, null, deleteBlock);
        }

    }
    let priceElements = resultGoods.querySelectorAll('.good-total');
    const sumTotal = document.querySelector('.items-total');
    console.log(cart);
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


    for (let key in cart) {

        console.log(cart[key]['quantity']);
        for (let i = 0; i < goodsInf.length; i++) {

            if (parseInt(key) === goodsInf[i].id) {
                console.log(goodsInf[i].quantity);
                goodsInf[i].quantity = parseInt(goodsInf[i].quantity) - parseInt(cart[key]['quantity']);
                console.log(goodsInf[i].quantity);
            }

        }


    }

    localStorage.setItem('accessories', JSON.stringify(goodsInf));

}


