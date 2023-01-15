function remove(ID, deleteEl) {
    const blockQueryDelete = document.querySelector('.confirmation');
    blockQueryDelete.style.display = 'block';

    const buttonYes = document.querySelector('.yes');
    buttonYes.setAttribute('id', ID);
    buttonYes.addEventListener('click', deleteEl);

    const buttonNO = document.querySelector('.no');
    buttonNO.addEventListener('click', cancelDelete);
}

function cancelDelete() {
    const blockQueryDelete = document.querySelector('.confirmation');
    blockQueryDelete.style.display = 'none';
}

function removeCars(event) {
    const carId = event.target.parentNode.getAttribute('id');
    remove(carId, deleteCar)
}

function deleteCar(event){
    const blockQueryDelete = document.querySelector('.confirmation');
    blockQueryDelete.style.display = 'none';
    const id = event.target.getAttribute('id');
    carInf = carInf.filter(item => item.id != id);
    localStorage.setItem('cars', JSON.stringify(carInf));
    showCars()
}

function removeGoods(event) {
    const goodId = event.target.parentNode.getAttribute('id');
    remove(goodId, deleteGoods)
}

function deleteGoods(event){
    const blockQueryDelete = document.querySelector('.confirmation');
    blockQueryDelete.style.display = 'none';
    const id = event.target.getAttribute('id');
    goodsInf = goodsInf.filter(item => item.id != id);
    localStorage.setItem('accessories', JSON.stringify(goodsInf));
    showGoods()
}

function removePeople(event) {
    const peopleId = event.target.parentNode.getAttribute('id');
    remove(peopleId, deletePeople)
}

function deletePeople(event){
    const blockQueryDelete = document.querySelector('.confirmation');
    blockQueryDelete.style.display = 'none';
    const id = event.target.getAttribute('id');
    peopleInf = peopleInf.filter(item => item.id != id);
    localStorage.setItem('people', JSON.stringify(peopleInf));
    showPeople()
}
