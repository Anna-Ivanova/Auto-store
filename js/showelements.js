const detailsCars = document.querySelector('.details-cars');
const detailsGoods = document.querySelector('.details-goods');
const detailsClients = document.querySelector('.details-clients');
const detailsBoughtCars = document.querySelector('.details-bought-car');
const detailsBoughtGoods = document.querySelector('.details-bought-goods');


function displayTable(data, tbody, start, removeHandler, editHandler, showSellForm) {
    tbody.innerHTML = '';

    if (removeHandler !== undefined && editHandler !== undefined && showSellForm !== undefined) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const clientsRow = document.createElement('tr');
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
            tbody.appendChild(tableRow);
            createElement('td', null, null, (start + 1) + i, tableRow);
            for (let key in data[i]) {
                if (key !== 'id' && key !== 'date' && key !== 'customerid') {
                    createElement('td', null, null, data[i][key], tableRow);
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
function pagination(element, data, tbody, selectorbtn, removeHandler, editHandler, showSellForm) {

    element.innerHTML = '';
    const rowsPerPage = 5;
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
        element.appendChild(btnPage)
    }
}
function showCars() {
    const tbody = document.getElementById('tbody');
    const btnCloseTableCars = document.querySelector('.closeTableCar');
    btnCloseTableCars.addEventListener('click', closeTableCars);
    tbody.classList.remove("filterNone");
    tbody.innerHTML = '';

    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.add('filterNone');
    const carPagination = document.querySelector('.pagination-car')
    //------------------------------------------
    pagination(carPagination, carInf, tbody, '.pagination-car', removeCars, editCars);

    // Отображаем первую страницу таблицы
    let start = 0;
    const rowsPerPage = 5;
    let end = start + rowsPerPage;
    let carInfPage = carInf.slice(start, end);
    displayTable(carInfPage, tbody, start, removeCars, editCars);
    detailsCars.style.display = 'block';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';

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
    tbody.innerHTML = '';

    const tbodyGoods = document.getElementById('tbody-filter-goods');
    tbodyGoods.classList.add('filterNone');
    const goodPagination = document.querySelector('.goods-pagination');
    pagination(goodPagination, goodsInf, tbody, '.goods-pagination', removeGoods, editGoods);

    let start = 0;
    const rowsPerPage = 5;
    let end = start + rowsPerPage;
    let goodsInfPage = goodsInf.slice(start, end);
    displayTable(goodsInfPage, tbody, start, removeGoods, editGoods);

    emptyListGoods();

}

function showBoughtCars() {
    const tbody = document.getElementById('tbody-bought-cars');
    tbody.classList.remove("filterNone");
    tbody.innerHTML = '';

    const tbodyPurchasesCars = document.getElementById('tbody-filter-bought-cars');
    tbodyPurchasesCars.classList.add('filterNone');

    const btnCloseTableBoughtCars = document.querySelector('.closeTableBoughtCars');
    btnCloseTableBoughtCars.addEventListener('click', closeTableBoughtCars);

    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'block';
    detailsBoughtGoods.style.display = 'none';
    const carPagination = document.querySelector('.pagination-boughtcars')
    pagination(carPagination, purchaseCarsInf, tbody, '.pagination-boughtcars');
    let start = 0;
    const rowsPerPage = 5;
    let end = start + rowsPerPage;
    let carInfPage = purchaseCarsInf.slice(start, end);
    displayTable(carInfPage, tbody, start)
    emptyListPurchaseCars();
}

function showBoughtAccessories() {
    const tbody = document.getElementById('tbody-bought-goods');
    tbody.classList.remove("filterNone");
    tbody.innerHTML = '';

    const tbodyPurchasesGoods = document.getElementById('tbody-filter-bought-goods');
    tbodyPurchasesGoods.classList.add('filterNone');

    const btnCloseTableBoughtGoods = document.querySelector('.closeTableBoughtGoods');
    btnCloseTableBoughtGoods.addEventListener('click', closeTableBoughtGoods);

    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'block';
    const goodsPagination = document.querySelector('.pagination-boughtgoods')
    pagination(goodsPagination, purchaseGoodsInf, tbody, 'pagination-boughtgoods');
    let start = 0;
    const rowsPerPage = 5;
    let end = start + rowsPerPage;
    let goodsInfPage = purchaseGoodsInf.slice(start, end);
    displayTable(goodsInfPage, tbody, start)

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
    tbody.innerHTML = '';

    const tbodyClients = document.getElementById('tbody-filter-people');
    tbodyClients.classList.add('filterNone');

    const btnCloseTableCustomers = document.querySelector('.closeTableCustoners');
    btnCloseTableCustomers.addEventListener('click', closeTableCustomers);
    const clientsPagination = document.querySelector('.pagination-clients');
    pagination(clientsPagination, peopleInf, tbody, '.pagination-clients', removePeople, editPerson, showSellForm);

    let start = 0;
    const rowsPerPage = 5;
    let end = start + rowsPerPage;
    let peopleInfPage = peopleInf.slice(start, end);
    displayTable(peopleInfPage, tbody, start, removePeople, editPerson, showSellForm);

    emptyListPeople();

}
