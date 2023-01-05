function showCars(data) {

    let cars = data.cars;
    const tbody = document.getElementById('tbody');
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
