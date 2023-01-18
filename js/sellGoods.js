function showSellForm(event) {
    const button = event.target.getAttribute('id');
    const form = document.querySelector('.sellGoods');
    form.style.display = 'block';
    const btnClose = document.querySelector('.btnCloseSell');
    btnClose.addEventListener('click', closeForm);

    const person = peopleInf[button];
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
    console.log(carInf);
    let carModels = filterUniqeModel(carInf, 'model');
    sortDetails(carModels, 'model', false);
    //console.log(carModels);
    let goodsCarModels = filterUniqeModel(goodsInf, 'intended_for_cars');
    sortDetails(goodsCarModels, 'intended_for_cars', false);
    //console.log(goodsCarModels);
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
                btnViewCarsForSell.addEventListener('click', function () {
                    const sellCar = document.querySelector('.selectedcar');
                    sellCar.style.display = 'block';
                    showCarsForSell(carInfChange, valModel, valBody);
                });

            })
        }
    });
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
    console.log(carSellResult);
    carSellResult.forEach((element, index) => {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', element.id);
        tbody.appendChild(carRow);
        createElement('td', null, null, index + 1, carRow);

        for (let key in element) {
            createElement('td', null, null, element[key], carRow);

        }
        const cellAction = createElement('td', { className: 'actionsell d-flex', id: element.id }, null, null, carRow);
        createElement('input', { className: 'quantity', type: 'number' }, null, null, cellAction);
        createElement('button', { className: 'btnSell' }, null, 'Sell', cellAction);
    });

}