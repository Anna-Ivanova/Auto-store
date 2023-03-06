let filteredArray = []
function filter(arr, prop, value) {
    let newElements = [];
    let copy = [...arr];
    for (const elem of copy) {
        if (String(elem[prop].toLowerCase()).includes(value.toLowerCase()) === true) {
            newElements.push(elem);
        }
    }
    filteredArray = newElements;
    return newElements;
}

function createElementFilter(removeElements, editElements, tbody, newArr, actionIcon, withoutArr, withArr, addIcon) {
    for (let i = 0; i < newArr.length; i++) {
        const row = document.createElement('tr');
        row.setAttribute('id', newArr[i].id);
        tbody.appendChild(row);
        createElement('td', null, null, i + 1, row);
        for (let key in newArr[i]) {
            if (withoutArr) {
                if (key !== 'id' && key !== 'customerid') {
                    if (key === 'date') {
                        createElement('td', null, null, Intl.DateTimeFormat('ua').format(newArr[i][key]), row);
                    } else {
                        createElement('td', null, null, newArr[i][key], row);
                    }
                }
            }
            if (withArr) {
                if (key !== 'id' && key !== 'auto' && key !== 'accessories') {
                    createElement('td', null, null, newArr[i][key], row);
                }
                if (key === 'auto') {
                    let tdAuto = createElement('td', null, null, null, row);
                    newArr[i]['auto'].forEach(element => {
                        createElement('p', null, null, element.model + ", ", tdAuto);
                    });
                }
                if (key === 'accessories') {
                    let tdAuto = createElement('td', null, null, null, row);
                    newArr[i]['accessories'].forEach(element => {
                        createElement('p', null, null, element.product + ", ", tdAuto);
                    });
                }
            }
        }
        if (actionIcon) {
            const cellAction = createElement('td', { className: 'action d-flex', id: newArr[i].id }, null, null, row);
            createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeElements }, null, cellAction);
            createElement('span', { className: 'icon-edit btn-edit btn-act', id: newArr[i].id }, { click: editElements }, null, cellAction);
        }
        if (addIcon) {
            const cellAction = createElement('td', { className: 'action d-flex', id: newArr[i].id }, null, null, row);
            createElement('span', { className: 'icon-euro btn-buy btn-act', id: newArr[i].id }, { click: showSellForm }, null, cellAction);
        }
    }
    const paginations = document.querySelectorAll('.pagination');
    for (let i = 0; i < paginations.length; i++) {
        paginations[i].innerHTML = '';
    }
}

function showFilterCars(arr) {
    const tbody = document.getElementById('tbody');
    tbody.classList.add('filterNone');

    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.remove('filterNone');
    tbodyCars.innerHTML = '';

    const filterFuel = document.querySelector('.filterFuel').value.trim();
    const filterTransmission = document.querySelector('.filterTransmission').value.trim();
    const filterNum = document.querySelector('.filterNum').value.trim();
    const filterBody = document.querySelector('.filterBody').value.trim();
    const filterColor = document.querySelector('.filterColor').value.trim();
    const filterEngine = document.querySelector('.filterEngine').value.trim();
    const filterPriceCars = document.querySelector('.filterPriceCars').value.trim();
    const filterQuantityCars = document.querySelector('.filterQuantityCars').value.trim();

    let newArr = [...arr];

    if (filterFuel !== '') {
        newArr = filter(newArr, 'fuel', filterFuel);
    }
    if (filterTransmission !== '') {
        newArr = filter(newArr, 'transmission', filterTransmission);
    }
    if (filterNum !== '') {
        newArr = filter(newArr, 'model', filterNum);
    }
    if (filterBody !== '') {
        newArr = filter(newArr, 'body', filterBody);
    }
    if (filterColor !== '') {
        newArr = filter(newArr, 'color', filterColor);
    }
    if (filterEngine !== '') {
        newArr = filter(newArr, 'engine', filterEngine);
    }
    if (filterPriceCars !== '') {
        newArr = filter(newArr, 'price', filterPriceCars);
    }
    if (filterQuantityCars !== '') {
        newArr = filter(newArr, 'quantity', filterQuantityCars);
    }

    createElementFilter(removeCars, editCars, tbodyCars, newArr, 1, 1)
}

function showFilterPeople(arr) {
    const tbody = document.getElementById('tbody-clients');
    tbody.classList.add('filterNone');

    const tbodyPeople = document.getElementById('tbody-filter-people');
    tbodyPeople.classList.remove('filterNone');
    tbodyPeople.innerHTML = '';

    const filterName = document.querySelector('.filterName').value.trim();
    const filterSurname = document.querySelector('.filterSurname').value.trim();
    const filterAge = document.querySelector('.filterAge').value.trim();
    const filterAddress = document.querySelector('.filterAddress').value.trim();
    const filterEmail = document.querySelector('.filterEmail').value.trim();
    const filterPhoneNumber = document.querySelector('.filterPhoneNumber').value.trim();

    let newArr = [...arr];

    if (filterName !== '') {
        newArr = filter(newArr, 'name', filterName);
    }
    if (filterSurname !== '') {
        newArr = filter(newArr, 'surname', filterSurname);
    }
    if (filterAge !== '') {
        newArr = filter(newArr, 'age', filterAge);
    }
    if (filterAddress !== '') {
        newArr = filter(newArr, 'address', filterAddress);
    }
    if (filterEmail !== '') {
        newArr = filter(newArr, 'email', filterEmail);
    }
    if (filterPhoneNumber !== '') {
        newArr = filter(newArr, 'phone_number', filterPhoneNumber);
    }

    createElementFilter(removePeople, editPerson, tbodyPeople, newArr, 1, 0, 1, 1)
}

function showFilterGoods(arr) {
    const tbody = document.getElementById('tbody-goods');
    tbody.classList.add('filterNone');

    const tbodyGoods = document.getElementById('tbody-filter-goods');
    tbodyGoods.classList.remove('filterNone');
    tbodyGoods.innerHTML = '';

    const filterProduct = document.querySelector('.filterProduct').value.trim();
    const filterPartNumber = document.querySelector('.filterPartNumber').value.trim();
    const filterIntendedForModel = document.querySelector('.filterIntendedForModel').value.trim();
    const filterPriceGoods = document.querySelector('.filterPriceGoods').value.trim();
    const filterQuantityGoods = document.querySelector('.filterQuantityGoods').value.trim();

    let newArr = [...arr];

    if (filterProduct !== '') {
        newArr = filter(newArr, 'product', filterProduct);
    }
    if (filterPartNumber !== '') {
        newArr = filter(newArr, 'part_number', filterPartNumber);
    }
    if (filterIntendedForModel !== '') {
        newArr = filter(newArr, 'intended_for_cars', filterIntendedForModel);
    }
    if (filterPriceGoods !== '') {
        newArr = filter(newArr, 'price', filterPriceGoods);
    }
    if (filterQuantityGoods !== '') {
        newArr = filter(newArr, 'quantity', filterQuantityGoods);
    }

    createElementFilter(removeGoods, editGoods, tbodyGoods, newArr, 1, 1)
}

function showFilterPurchasesCars(arr) {
    const tbody = document.getElementById('tbody-bought-cars');
    tbody.classList.add('filterNone');

    const tbodyCars = document.getElementById('tbody-filter-bought-cars');
    tbodyCars.classList.remove('filterNone');
    tbodyCars.innerHTML = '';

    const filterFuelPurchases = document.querySelector('.filterFuelPurchases').value.trim();
    const filterTransmissionPurchases = document.querySelector('.filterTransmissionPurchases').value.trim();
    const filterNumPurchases = document.querySelector('.filterNumPurchases').value.trim();
    const filterBodyPurchases = document.querySelector('.filterBodyPurchases').value.trim();
    const filterColorPurchases = document.querySelector('.filterColorPurchases').value.trim();
    const filterEnginePurchases = document.querySelector('.filterEnginePurchases').value.trim();
    const filterPriceCarsPurchases = document.querySelector('.filterPriceCarsPurchases').value.trim();
    const filterCustomerPurchasesCars = document.querySelector('.filterCustomerPurchasesCars').value.trim();

    let newArr = [...arr];

    if (filterFuelPurchases !== '') {
        newArr = filter(newArr, 'fuel', filterFuelPurchases);
    }
    if (filterTransmissionPurchases !== '') {
        newArr = filter(newArr, 'transmission', filterTransmissionPurchases);
    }
    if (filterNumPurchases !== '') {
        newArr = filter(newArr, 'model', filterNumPurchases);
    }
    if (filterBodyPurchases !== '') {
        newArr = filter(newArr, 'body', filterBodyPurchases);
    }
    if (filterColorPurchases !== '') {
        newArr = filter(newArr, 'color', filterColorPurchases);
    }
    if (filterEnginePurchases !== '') {
        newArr = filter(newArr, 'engine', filterEnginePurchases);
    }
    if (filterPriceCarsPurchases !== '') {
        newArr = filter(newArr, 'price', filterPriceCarsPurchases);
    }
    if (filterCustomerPurchasesCars !== '') {
        newArr = filter(newArr, 'customer', filterCustomerPurchasesCars);
    }

    createElementFilter(null, null, tbodyCars, newArr, 0, 1)
}

function showFilterPurchasesGoods(arr) {
    const tbody = document.getElementById('tbody-bought-goods');
    tbody.classList.add('filterNone');

    const tbodyGoods = document.getElementById('tbody-filter-bought-goods');
    tbodyGoods.classList.remove('filterNone');
    tbodyGoods.innerHTML = '';

    const filterProductPurchases = document.querySelector('.filterProductPurchases').value.trim();
    const filterPartNumberPurchases = document.querySelector('.filterPartNumberPurchases').value.trim();
    const filterIntendedForModelPurchases = document.querySelector('.filterIntendedForModelPurchases').value.trim();
    const filterPriceGoodsPurchases = document.querySelector('.filterPriceGoodsPurchases').value.trim();
    const filterCustomerPurchasesGoods = document.querySelector('.filterCustomerPurchasesGoods').value.trim();

    let newArr = [...arr];

    if (filterProductPurchases !== '') {
        newArr = filter(newArr, 'product', filterProductPurchases);
    }
    if (filterPartNumberPurchases !== '') {
        newArr = filter(newArr, 'part_number', filterPartNumberPurchases);
    }
    if (filterIntendedForModelPurchases !== '') {
        newArr = filter(newArr, 'intended_for_cars', filterIntendedForModelPurchases);
    }
    if (filterPriceGoodsPurchases !== '') {
        newArr = filter(newArr, 'price', filterPriceGoodsPurchases);
    }
    if (filterCustomerPurchasesGoods !== '') {
        newArr = filter(newArr, 'customer', filterCustomerPurchasesGoods);
    }

    createElementFilter(null, null, tbodyGoods, newArr, 0, 1)
}

