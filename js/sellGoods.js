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
        console.log(prop);
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
    const sellCar = document.querySelector('.selectedcar');
    console.log(sellCar);
    let carSellResult = array.filter(function (item) {
        return item.body === val2;
    });
    carSellResult.forEach(element => {
        for (let key in element) {
            sellCar.textContent = `${key}:${element[key]}`;
        }
    });

}
