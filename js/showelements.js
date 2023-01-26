const detailsCars = document.querySelector('.details-cars');
const detailsGoods = document.querySelector('.details-goods');
const detailsClients = document.querySelector('.details-clients');
const detailsBoughtCars = document.querySelector('.details-bought-car');
const detailsBoughtGoods = document.querySelector('.details-bought-goods');

function showCars() {
    const tbody = document.getElementById('tbody');
    tbody.classList.remove("filterCars");
    tbody.innerHTML = '';

    const tbodyCars = document.getElementById('tbody-filter-cars');
    tbodyCars.classList.add('filterCars');

    detailsCars.style.display = 'block';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    for (let i = 0; i < carInf.length; i++) {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', carInf[i].id);
        tbody.appendChild(carRow);
        createElement('td', null, null, i + 1, carRow);
        for (let key in carInf[i]) {
            createElement('td', null, null, carInf[i][key], carRow);
        }
        const cellAction = createElement('td', { className: 'action d-flex', id: carInf[i].id }, null, null, carRow);
        createElement('span', { className: 'icon-delete btn-del btn-act'}, { click: removeCars }, null, cellAction);
        createElement('span', { className: 'icon-edit btn-edit btn-act', id: carInf[i].id }, { click: editCars }, null, cellAction);
    }
    emptyListCar();
    //window.scrollTo(0, 500);
}

function showBoughtCars() {
    const tbody = document.getElementById('tbody-bought-cars');
    tbody.innerHTML = '';
    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'block';
    detailsBoughtGoods.style.display = 'none';

    for (let i = 0; i < purchaseCarsInf.length; i++) {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', purchaseCarsInf[i].id);
        tbody.appendChild(carRow);
        createElement('td', null, null, i + 1, carRow);
        for (let key in purchaseCarsInf[i]) {
            createElement('td', null, null, purchaseCarsInf[i][key], carRow);
        }
    }
    emptyListPurchaseCars();
}

function showBoughtAccessories() {
    const tbody = document.getElementById('tbody-bought-goods');
    tbody.innerHTML = '';
    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'block';

    for (let i = 0; i < purchaseGoodsInf.length; i++) {
        const goodsRow = document.createElement('tr');
        goodsRow.setAttribute('id', purchaseGoodsInf[i].id);
        tbody.appendChild(goodsRow);
        createElement('td', null, null, i + 1, goodsRow);
        for (let key in purchaseGoodsInf[i]) {
            if (key !== 'id') {
                createElement('td', null, null, purchaseGoodsInf[i][key], goodsRow);
            }
        }
    }
    emptyListPurchaseGoods();
}

function showGoods() {
    detailsGoods.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsClients.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    const tbodyGoods = document.getElementById('tbody-goods');
    tbodyGoods.innerHTML = '';
    for (let i = 0; i < goodsInf.length; i++) {
        const goodsRow = document.createElement('tr');
        goodsRow.setAttribute('id', goodsInf[i].id);
        tbodyGoods.appendChild(goodsRow);
        createElement('td', null, null, i + 1, goodsRow);
        for (let key in goodsInf[i]) {
            if (key !== 'id') {
                createElement('td', null, null, goodsInf[i][key], goodsRow);
            }
        }
        const cellAction = createElement('td', { className: 'action d-flex', id: goodsInf[i].id }, null, null, goodsRow);
        createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removeGoods }, null, cellAction);
        createElement('span', { className: 'icon-edit btn-edit btn-act', id: i }, { click: editGoods }, null, cellAction);
    }
    emptyListGoods();
    // window.scrollTo(0, 500);
}

function showPeople() {
    detailsClients.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    detailsBoughtCars.style.display = 'none';
    detailsBoughtGoods.style.display = 'none';
    const tbodyClients = document.getElementById('tbody-clients');
    tbodyClients.innerHTML = '';
    for (let i = 0; i < peopleInf.length; i++) {
        const clientsRow = document.createElement('tr');
        clientsRow.setAttribute('data-user', i);
        tbodyClients.appendChild(clientsRow);
        createElement('td', null, null, i + 1, clientsRow);
        for (let key in peopleInf[i]) {
            if (typeof peopleInf[i][key] !== 'object') {
                if (key !== 'id') {
                    createElement('td', null, null, peopleInf[i][key], clientsRow);
                }
            }
            else {
                let tdAuto = createElement('td', null, null, null, clientsRow);
                peopleInf[i][key].forEach(element => {
                    if (key === 'auto') {
                        createElement('p', null, null, element.model + ", ", tdAuto);
                    }
                    if (key === 'accessories') {
                        createElement('p', null, null, element.product + ", ", tdAuto);
                    }
                });

            }
        }
        const cellAction = createElement('td', { className: 'action d-flex', id: peopleInf[i].id }, null, null, clientsRow);
        createElement('span', { className: 'icon-delete btn-del btn-act' }, { click: removePeople }, null, cellAction);

        createElement('span', { className: 'icon-edit btn-edit btn-act', id: i }, { click: editPerson }, null, cellAction);

        createElement('span', { className: 'icon-euro btn-buy btn-act', id: i }, { click: showSellForm }, null, cellAction);

    }
    emptyListPeople();
    // window.scrollTo(0, 500);
}
