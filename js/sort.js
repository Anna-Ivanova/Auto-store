let columnDir = true;

function moveArrows(event) {
    let thProperties = document.querySelectorAll('.arr-sort');
    thProperties.forEach(element => {
        element.classList.remove('arr-up');
        element.classList.remove('arr-down');

        if (element == event.target) {
            if (columnDir == false) {

                element.classList.add('arr-down');
            } else {

                element.classList.add('arr-up');
            }
        }

    })
}
function sortTable(event, array, selector) {
    let prop = event.target.getAttribute('data-col');
    let tbody = document.getElementById(selector);
    moveArrows(event);
    columnDir = !columnDir;
    if (tbody.classList.contains('filterNone')) {
        if (prop !== null) {
            sortDetails(filteredArray, prop, columnDir);
            if (selector === 'tbody') {
                showFilterCars(filteredArray);
            }
            else if (selector === 'tbody-goods') {
                showFilterGoods(filteredArray);
            }
            else if (selector === 'tbody-clients') {
                showFilterPeople(filteredArray);
            }
            else if (selector === 'tbody-bought-cars') {
                showFilterPurchasesCars(filteredArray);
            }
            else {
                showFilterPurchasesGoods(filteredArray);
            }

        }
    }
    else {
        if (prop !== null) {
            sortDetails(array, prop, columnDir);
            if (selector === 'tbody') {
                showCars();
            }
            else if (selector === 'tbody-goods') {
                showGoods();
            }
            else if (selector === 'tbody-clients') {
                showPeople();
            }
            else if (selector === 'tbody-bought-cars') {
                showBoughtCars();
            }
            else {
                showBoughtAccessories();
            }
        }
    }
}

function sortDetails(arr, prop, columnDir) {
    return arr.sort(function (propA, propB) {
        if (prop === 'id' || prop === 'model' || prop === 'transmission' || prop === 'date' || prop === 'price' || prop === 'quantity' || prop === 'part_number' || prop === 'age' || prop === 'phone_number') {
            if (columnDir == false) {
                return Number(propA[prop]) - Number(propB[prop])
            }
            if (columnDir == true) {
                return Number(propB[prop]) - Number(propA[prop])
            }
        }
        if (prop === 'intended_for_cars') {
            if (!columnDir ? Number(propA[prop].split(' ').slice(-1)) < Number(propB[prop].split(' ').slice(-1)) : Number(propA[prop].split(' ').slice(-1)) > Number(propB[prop].split(' ').slice(-1))) return -1;
        }
        else {
            if (!columnDir ? propA[prop].toLowerCase() < propB[prop].toLowerCase() : propA[prop].toLowerCase() > propB[prop].toLowerCase()) return -1;
        }
    })
}







