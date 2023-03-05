function showOrdersHistory(id) {

    let carsHistory = [];

    const historyInfo = document.querySelector('.order-history-info');
    historyInfo.style.display = 'block';

    const closeOrders = document.querySelector('.closeOrders');
    closeOrders.addEventListener('click', function () {

        historyInfo.style.display = 'none';
    });

    historyInfo.innerHTML = '';
    peopleInf.forEach(element => {
        if (element.id === Number(id)) {
            let cars = element.auto;
            let goods = element.accessories;
            if (cars.length > 0) {
                for (let i = 0; i < cars.length; i++) {
                    carsHistory.push(cars[i]);
                }
            }
            if (goods.length > 0) {
                for (let j = 0; j < goods.length; j++) {
                    carsHistory.push(goods[j]);
                }
            }
        }
    });
    sortDetails(carsHistory, 'date', true);

    function groupItems(array, property) {
        return array.reduce(function (groups, item) {
            let name = Intl.DateTimeFormat('ua').format(item[property]);
            let group = groups[name] || (groups[name] = []);
            group.push(item);
            return groups;
        }, {});
    }

    let groups = groupItems(carsHistory, 'date');
    for (let key in groups) {
        let group = groups[key];

        const rowProduct = createElement('div', { className: 'product-history' }, null, null, historyInfo);
        const orderDate = createElement('div', { className: 'order-date' }, null, key, rowProduct);

        for (let i = 0; i < group.length; i++) {
            const prod = createElement('div', { className: 'order' }, null, null, orderDate);
            for (let key in group[i]) {

                if (key !== 'id' && key !== 'date' && key != 'customer' && key != 'customerid') {
                    createElement('p', { className: `${key}-history` }, null, `${key} : ${group[i][key]}`, prod);
                }

            }
        }

    }


}