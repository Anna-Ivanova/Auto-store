function removeCars(event) {
    const carId = event.target.parentNode.getAttribute('id');
    if (window.confirm(`Do you really want to remove car model ${carId}?`)) {
        const index = carInf.findIndex(item => item.id === carId);
        carInf.splice(index, 1);
        localStorage.setItem('cars', JSON.stringify(carInf));
        showCars();
    }
}
function removeGoods(event) {
    const goodId = event.target.parentNode.getAttribute('id');

    if (window.confirm(`Do you really want to remove position ${goodId}?`)) {
        const index = goodsInf.findIndex(item => item.id === +goodId);
        goodsInf.splice(index, 1);
        localStorage.setItem('accessories', JSON.stringify(goodsInf));

        showGoods();
    }
}

function removePeople(event) {
    const peopleId = event.target.parentNode.getAttribute('id');

    if (window.confirm(`Do you really want to remove customer ${peopleId}?`)) {
        const index = peopleInf.findIndex(item => item.id === +peopleId);
        peopleInf.splice(index, 1);
        localStorage.setItem('people', JSON.stringify(peopleInf));
        console.log(peopleInf);
        showPeople();
    }

}
