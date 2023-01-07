function showCars() {
    //let cars = data.cars;
    const tbody = document.getElementById('tbody');
    tbody.innerHTML= '';
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
