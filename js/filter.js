function filter(arr, prop, value){
    let newElements = [];
    let copy = [...arr];
    for ( const elem of copy){
        if(String(elem[prop]).includes(value) === true){
            newElements.push(elem);
        }
    }

   return newElements;
}

function showFilter(arr){
    const tbody = document.getElementById('tbody');
    tbody.classList.add('filterCars');

    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.remove('filterCars');
    tbodyCars.innerHTML = '';

    const filterFuel = document.querySelector('.filterFuel').value;
    const filterTransmission = document.querySelector('.filterTransmission').value;
    const filterNum = document.querySelector('.filterNum').value;
    const filterBody = document.querySelector('.filterBody').value;
    const filterColor = document.querySelector('.filterColor').value;
    const filterEngine = document.querySelector('.filterEngine').value;
    const filterPrice = document.querySelector('.filterPrice').value;
    const filterQuantity = document.querySelector('.filterQuantity').value;
    let newArr = [...arr];
    if( filterFuel !== ''){
        newArr = filter(newArr, 'fuel', filterFuel);
    }
    if( filterTransmission !== ''){
        newArr = filter(newArr, 'transmission', filterTransmission);
    }
    if( filterNum !== ''){
        newArr = filter(newArr, 'model', filterNum);
    }
    if( filterBody !== ''){
        newArr = filter(newArr, 'body', filterBody);
    }
    if( filterColor !== ''){
        newArr = filter(newArr, 'color', filterColor);
    }
    if( filterEngine !== ''){
        newArr = filter(newArr, 'engine', filterEngine);
    }
    if( filterPrice !== ''){
        newArr = filter(newArr, 'price', filterPrice);
    }
    if( filterQuantity !== ''){
        newArr = filter(newArr, 'quantity', filterQuantity);
    }

   for (let i = 0; i < newArr.length; i++) {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', newArr[i].id);
        tbodyCars.appendChild(carRow);
        createElement('td', null, null, i + 1, carRow);
        for (let key in newArr[i]) {
            if (key !== 'id') {
                createElement('td', null, null, newArr[i][key], carRow);
            }
        }
        const cellAction = createElement('td', { className: 'action d-flex', id: newArr[i].id }, null, null, carRow);
        createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeCars }, null, cellAction);
        createElement('span', { className: 'icon-edit btn-edit btn-act', id: newArr[i].id  }, { click: editCars }, null, cellAction);
    }
}

function showFilterGoods(arr){
    const tbody = document.getElementById('tbody-goods');
    tbody.classList.add('filterCars');

    const tbodyGoods = document.getElementById('tbody-filter-goods');
    tbodyGoods.classList.remove('filterCars');
    tbodyGoods.innerHTML = '';

    const filterProduct = document.querySelector('.filterProduct').value;
    const filterPartNumber = document.querySelector('.filterPartNumber').value;
    const filterIntendedForModel = document.querySelector('.filterIntendedForModel').value;
    const filterPriceGoods = document.querySelector('.filterPriceGoods').value;
    const filterQuantityGoods = document.querySelector('.filterQuantityGoods').value;
    let newArr = [...arr];
    if( filterProduct !== ''){
        newArr = filter(newArr, 'product', filterProduct);
    }
    if( filterPartNumber !== ''){
        newArr = filter(newArr, 'part_number', filterPartNumber);
    }
    if( filterIntendedForModel !== ''){
        newArr = filter(newArr, 'intended_for_cars', filterIntendedForModel);
    }
    if( filterPriceGoods !== ''){
        newArr = filter(newArr, 'price', filterPriceGoods);
    }
    if( filterQuantityGoods !== ''){
        newArr = filter(newArr, 'quantity', filterQuantityGoods);
    }

   for (let i = 0; i < newArr.length; i++) {
    const goodsRow = document.createElement('tr');
    goodsRow.setAttribute('id', newArr[i].id);
    tbodyGoods.appendChild(goodsRow);
    createElement('td', null, null, i + 1, goodsRow);
    for (let key in newArr[i]) {
        if (key !== 'id') {
            createElement('td', null, null, newArr[i][key], goodsRow);
        }
    }
        const cellAction = createElement('td', { className: 'action d-flex', id: newArr[i].id }, null, null, goodsRow);
        createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeGoods }, null, cellAction);
        createElement('span', { className: 'icon-edit btn-edit btn-act', id: newArr[i].id }, { click: editGoods }, null, cellAction);
    }
}

