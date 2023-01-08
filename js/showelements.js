const detailsCars = document.querySelector('.details-cars');
const detailsGoods = document.querySelector('.details-goods');
const detailsClients = document.querySelector('.details-clients');

function showCars() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    detailsCars.style.display = 'block';
    detailsGoods.style.display = 'none';
    detailsClients.style.display = 'none';
    for (let i = 0; i < carInf.length; i++) {
        const carRow = document.createElement('tr');
        carRow.setAttribute('id', carInf[i].id);
        tbody.appendChild(carRow);
        createElement('td', null, null, i + 1, carRow);
        for (let key in carInf[i]) {
            createElement('td', null, null, carInf[i][key], carRow);
        }
    }
}

function showGoods() {
    detailsGoods.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsClients.style.display = 'none';
    const tbodyGoods = document.getElementById('tbody-goods');
    tbodyGoods.innerHTML = '';
    for (let i = 0; i < goodsInf.length; i++) {
        const goodsRow = document.createElement('tr');
        goodsRow.setAttribute('id', goodsInf[i].id);
        tbodyGoods.appendChild(goodsRow);
        for (let key in goodsInf[i]) {
            createElement('td', null, null, goodsInf[i][key], goodsRow);
        }
    }
}

function showPeople() {
    detailsClients.style.display = 'block';
    detailsCars.style.display = 'none';
    detailsGoods.style.display = 'none';
    const tbodyClients = document.getElementById('tbody-clients');
    tbodyClients.innerHTML = '';
    for (let i = 0; i < peopleInf.length; i++) {
        const clientsRow = document.createElement('tr');
        clientsRow.setAttribute('data-user', i);
        tbodyClients.appendChild(clientsRow);
        for (let key in peopleInf[i]) {
            if (typeof peopleInf[i][key] !== 'object') {
                createElement('td', null, null, peopleInf[i][key], clientsRow);
            }
            else {
                let tdAuto = createElement('td', null, null, null, clientsRow);
                peopleInf[i][key].forEach(element => {

                    createElement('p', null, null, element.id, tdAuto);

                });

            }
        }
    }

}


