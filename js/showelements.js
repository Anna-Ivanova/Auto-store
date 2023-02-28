const detailsCars = document.querySelector('.details-cars');
const detailsGoods = document.querySelector('.details-goods');
const detailsClients = document.querySelector('.details-clients');
const detailsBoughtCars = document.querySelector('.details-bought-car');
const detailsBoughtGoods = document.querySelector('.details-bought-goods');

function displayTable(data, tbody, start, removeHandler, editHandler, showSellForm) {
    tbody.innerHTML = '';
    if (removeHandler !== undefined && editHandler !== undefined && showSellForm !== undefined) {
        for (let i = 0; i < data.length; i++) {
            const clientsRow = document.createElement('tr');
            clientsRow.classList.add('faded');
            clientsRow.setAttribute('data-user', data[i].id);
            tbody.appendChild(clientsRow);
            createElement('td', null, null, (start + 1) + i, clientsRow);
            for (let key in data[i]) {
                if (typeof data[i][key] !== 'object') {
                    if (key !== 'id') {
                        createElement('td', null, null, data[i][key], clientsRow);
                    }
                }
                else {
                    let tdAuto = createElement('td', null, null, null, clientsRow);
                    data[i][key].forEach(element => {
                        if (key === 'auto') {
                            createElement('p', null, null, element.model + ", ", tdAuto);
                        }
                        if (key === 'accessories') {
                            createElement('p', null, null, element.product + ", ", tdAuto);
                        }
                    });
                }
            }
            const cellAction = createElement('td', { className: 'action d-flex', id: data[i].id }, null, null, clientsRow);
            createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeHandler }, null, cellAction);
            createElement('span', { className: 'icon-edit btn-edit btn-act', id: data[i].id }, { click: editHandler }, null, cellAction);
            createElement('span', { className: 'icon-euro btn-buy btn-act', id: data[i].id }, { click: showSellForm }, null, cellAction);
        }
    }
    else {
        for (let i = 0; i < data.length; i++) {
            const tableRow = document.createElement('tr');
            tableRow.setAttribute('id', data[i].id);
            tableRow.classList.add('faded');
            tbody.appendChild(tableRow);
            createElement('td', null, null, (start + 1) + i, tableRow);
            for (let key in data[i]) {
                if (key !== 'id' && key !== 'customerid') {
                    if (key === 'date') {
                        createElement('td', null, null, Intl.DateTimeFormat('ua').format(data[i][key]), tableRow);
                    } else {
                        createElement('td', null, null, data[i][key], tableRow);
                    }
                }
            }
            if (removeHandler != undefined) {
                const cellAction = createElement('td', { className: 'action d-flex', id: data[i].id }, null, null, tableRow);
                createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeHandler }, null, cellAction);
                createElement('span', { className: 'icon-edit btn-edit btn-act', id: data[i].id }, { click: editHandler }, null, cellAction);
            }
        }
    }

}
function createPaginationFirst(dataArray) {
    let start = 0;
    const rowsPerPage = 10;
    let end = start + rowsPerPage;
    return dataArray.slice(start, end);
}
function pagination(element, data, tbody, selectorbtn, removeHandler, editHandler, showSellForm) {
    element.innerHTML = '';
    const rowsPerPage = 10;
    let currentPage = 1;

    const btnQuantity = Math.ceil(data.length / rowsPerPage)
    for (let i = 1; i <= btnQuantity; i++) {
        let btnPage = document.createElement('button');
        btnPage.innerHTML = i;
        btnPage.addEventListener("click", function (e) {
            currentPage = +e.target.innerHTML;
            let start = (currentPage - 1) * rowsPerPage;
            let end = start + rowsPerPage;

            const activeBtn = document.querySelector(`${selectorbtn} .active`);

            if (activeBtn) {
                activeBtn.classList.remove('active');

            }
            e.target.classList.add('active');
            let dataPage = data.slice(start, end);
            displayTable(dataPage, tbody, start, removeHandler, editHandler, showSellForm);
        })
        if (i === 1) {
            btnPage.classList.add('active');
        }

        element.appendChild(btnPage)
    }
}

function showCars() {
    const tbody = document.getElementById('tbody');
    const btnCloseTableCars = document.querySelector('.closeTableCar');
    btnCloseTableCars.addEventListener('click', closeTableCars);
    tbody.classList.remove("filterNone");
    const carPagination = document.querySelector('.pagination-car');
    tbody.innerHTML = '';
    carPagination.innerHTML = '';
    detailsCars.style.display = 'block';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.add('filterNone');
    let carInfPage = createPaginationFirst(carInf);
    displayTable(carInfPage, tbody, 0, removeCars, editCars);
    if (carInf.length > 10) {
        pagination(carPagination, carInf, tbody, '.pagination-car', removeCars, editCars);
    }
    emptyListCar();
}


function showGoods() {
    detailsGoods.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    const btnCloseTableGoods = document.querySelector('.closeTableGoods');
    btnCloseTableGoods.addEventListener('click', closeTableGoods);
    const tbody = document.getElementById('tbody-goods');
    tbody.classList.remove("filterNone");
    const goodPagination = document.querySelector('.goods-pagination');
    tbody.innerHTML = '';
    goodPagination.innerHTML = '';
    const tbodyGoods = document.getElementById('tbody-filter-goods');
    tbodyGoods.classList.add('filterNone');
    let goodsInfPage = createPaginationFirst(goodsInf);
    displayTable(goodsInfPage, tbody, 0, removeGoods, editGoods);
    if (goodsInf.length > 10) {
        pagination(goodPagination, goodsInf, tbody, '.goods-pagination', removeGoods, editGoods);
    }
    emptyListGoods();

}

function showBoughtCars() {
    const tbody = document.getElementById('tbody-bought-cars');
    tbody.classList.remove("filterNone");
    const carPagination = document.querySelector('.pagination-boughtcars')
    tbody.innerHTML = '';
    carPagination.innerHTML = '';

    const tbodyPurchasesCars = document.getElementById('tbody-filter-bought-cars');
    tbodyPurchasesCars.classList.add('filterNone');

    clickButton('.closeTableBoughtCars', closeTableBoughtCars)

    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'block';
    detailsBoughtGoods.style.display = 'none';
    let carInfPage = createPaginationFirst(purchaseCarsInf);
    displayTable(carInfPage, tbody, 0);
    if (purchaseCarsInf.length > 10) {
        pagination(carPagination, purchaseCarsInf, tbody, '.pagination-boughtcars');
    }
    emptyListPurchaseCars();
}

function showBoughtAccessories() {
    const tbody = document.getElementById('tbody-bought-goods');
    tbody.classList.remove("filterNone");
    const goodsPagination = document.querySelector('.pagination-boughtgoods');
    tbody.innerHTML = '';
    goodsPagination.innerHTML = '';
    const tbodyPurchasesGoods = document.getElementById('tbody-filter-bought-goods');
    tbodyPurchasesGoods.classList.add('filterNone');

    clickButton('.closeTableBoughtGoods', closeTableBoughtGoods)

    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'block';
    let goodsInfPage = createPaginationFirst(purchaseGoodsInf);
    displayTable(goodsInfPage, tbody, 0);
    if (purchaseGoodsInf.length > 10) {
        pagination(goodsPagination, purchaseGoodsInf, tbody, '.pagination-boughtgoods');
    }


    emptyListPurchaseGoods();
}

function showPeople() {
    detailsClients.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    const tbody = document.getElementById('tbody-clients');
    tbody.classList.remove("filterNone");
    const clientsPagination = document.querySelector('.pagination-clients');
    tbody.innerHTML = '';
    clientsPagination.innerHTML = '';
    const tbodyClients = document.getElementById('tbody-filter-people');
    tbodyClients.classList.add('filterNone');

    clickButton('.closeTableCustoners', closeTableCustomers)
    let peopleInfPage = createPaginationFirst(peopleInf);
    displayTable(peopleInfPage, tbody, 0, removePeople, editPerson, showSellForm);
    if (peopleInf.length > 10) {
        pagination(clientsPagination, peopleInf, tbody, '.pagination-clients', removePeople, editPerson, showSellForm);
    }
    emptyListPeople();
}
