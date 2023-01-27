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

function createElementFilter(removeElements, editElements, tbody, newArr, withoutArr, withArr, addIcon){
    for (let i = 0; i < newArr.length; i++) {
        const row = document.createElement('tr');
        row.setAttribute('id', newArr[i].id);
        tbody.appendChild(row);
        createElement('td', null, null, i + 1, row);
        for (let key in newArr[i]) {
            if(withoutArr){
                if (key !== 'id') {
                    createElement('td', null, null, newArr[i][key], row);
                }
            }
            if(withArr){
                if (key !== 'id' && key !== 'auto' && key !== 'accessories') {
                    createElement('td', null, null, newArr[i][key], row);
                }
                if(key === 'auto'){
                    let tdAuto = createElement('td', null, null, null, row);
                    newArr[i]['auto'].forEach(element => {
                        createElement('p', null, null, element.model + ", ", tdAuto);
                    });
                }
                if(key === 'accessories'){
                    let tdAuto = createElement('td', null, null, null, row);
                    newArr[i]['accessories'].forEach(element => {
                        createElement('p', null, null, element.product + ", ", tdAuto);
                    });
                }
            }
        }
            const cellAction = createElement('td', { className: 'action d-flex', id: newArr[i].id }, null, null, row);
            createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeElements }, null, cellAction);
            createElement('span', { className: 'icon-edit btn-edit btn-act', id: newArr[i].id }, { click: editElements }, null, cellAction);
            if(addIcon){
            createElement('span', { className: 'icon-euro btn-buy btn-act', id: newArr[i].id }, { click: showSellForm }, null, cellAction);
            }
        }
}

function showFilterCars(arr){
    const tbody = document.getElementById('tbody');
    tbody.classList.add('filterNone');

    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.remove('filterNone');
    tbodyCars.innerHTML = '';

    const filterFuel = document.querySelector('.filterFuel').value;
    const filterTransmission = document.querySelector('.filterTransmission').value;
    const filterNum = document.querySelector('.filterNum').value;
    const filterBody = document.querySelector('.filterBody').value;
    const filterColor = document.querySelector('.filterColor').value;
    const filterEngine = document.querySelector('.filterEngine').value;
    const filterPriceCars = document.querySelector('.filterPriceCars').value;
    const filterQuantityCars = document.querySelector('.filterQuantityCars').value;
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
    if( filterPriceCars !== ''){
        newArr = filter(newArr, 'price', filterPriceCars);
    }
    if( filterQuantityCars !== ''){
        newArr = filter(newArr, 'quantity', filterQuantityCars);
    }

    createElementFilter(removeCars,editCars, tbodyCars, newArr, 1)
}

function showFilterPeople(arr){
    const tbody = document.getElementById('tbody-clients');
    tbody.classList.add('filterNone');

    const tbodyPeople = document.getElementById('tbody-filter-people');
    tbodyPeople.classList.remove('filterNone');
    tbodyPeople.innerHTML = '';

    const filterName = document.querySelector('.filterName').value;
    const filterSurname = document.querySelector('.filterSurname').value;
    const filterAge = document.querySelector('.filterAge').value;
    const filterAddress = document.querySelector('.filterAddress').value;
    const filterEmail = document.querySelector('.filterEmail').value;
    const filterPhoneNumber = document.querySelector('.filterPhoneNumber').value;
    let newArr = [...arr];
    if( filterName !== ''){
        newArr = filter(newArr, 'name', filterName);
    }
    if( filterSurname !== ''){
        newArr = filter(newArr, 'surname', filterSurname);
    }
    if( filterAge !== ''){
        newArr = filter(newArr, 'age', filterAge);
    }
    if( filterAddress !== ''){
        newArr = filter(newArr, 'address', filterAddress);
    }
    if( filterEmail !== ''){
        newArr = filter(newArr, 'email', filterEmail);
    }
    if( filterPhoneNumber !== ''){
        newArr = filter(newArr, 'phone_number', filterPhoneNumber);
    }

    createElementFilter(removePeople,editPerson, tbodyPeople, newArr, 0, 1, 1)
}

function showFilterGoods(arr){
    const tbody = document.getElementById('tbody-goods');
    tbody.classList.add('filterNone');

    const tbodyGoods = document.getElementById('tbody-filter-goods');
    tbodyGoods.classList.remove('filterNone');
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

    createElementFilter(removeGoods,editGoods, tbodyGoods, newArr, 1)
}
