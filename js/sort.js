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

function sortCars(event){
    let prop = event.target.getAttribute('data-col');
    moveArrows(event);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(carInf, prop, columnDir);
        showCars();
    }
}

function sortGoods(event){
    let prop = event.target.getAttribute('data-col');
    moveArrows(event);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(goodsInf, prop, columnDir);
        showGoods();
    }
}

function sortPeople(event){
    let prop = event.target.getAttribute('data-col');
    moveArrows(event);
    columnDir = !columnDir;
    if (prop !== null) {
        sortDetails(peopleInf, prop, columnDir);
        showPeople();
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







