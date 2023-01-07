function showCars(data, value) {
    const tbody = document.getElementById('tbody');
    const tbodyGoods = document.getElementById('tbody-goods');
    const tbodyClients = document.getElementById('tbody-clients');
    if (value === 'cars') {
        let cars = data.cars;
        for (let i = 0; i < cars.length; i++) {
            const carRow = document.createElement('tr');
            carRow.setAttribute('id', cars[i].id);
            tbody.appendChild(carRow);
            createElement('td', null, null, i + 1, carRow);
            for (let key in cars[i]) {
                createElement('td', null, null, cars[i][key], carRow);
            }
        }
    }
    if (value === 'accessories') {
        let accessories = data.accessories;
        for (let i = 0; i < accessories.length; i++) {
            const goodsRow = document.createElement('tr');
            goodsRow.setAttribute('id', accessories[i].id);
            tbodyGoods.appendChild(goodsRow);
            createElement('td', null, null, i + 1, goodsRow);
            for (let key in accessories[i]) {
                createElement('td', null, null, accessories[i][key], goodsRow);
            }
        }
    }
    if (value === 'people') {
        let clients = data;
        for (let i = 0; i < clients.length; i++) {
            const clientsRow = document.createElement('tr');
            clientsRow.setAttribute('data-user', i);
            tbodyClients.appendChild(clientsRow);
            createElement('td', null, null, i + 1, clientsRow);
            for (let key in clients[i]) {
                if (typeof clients[i][key] !== 'object') {
                    createElement('td', null, null, clients[i][key], clientsRow);
                }
                else {
                    let tdAuto = createElement('td', null, null, null, clientsRow);
                    clients[i][key].forEach(element => {

                        createElement('p', null, null, element.id, tdAuto);

                    });

                }
            }
        }
    }
}