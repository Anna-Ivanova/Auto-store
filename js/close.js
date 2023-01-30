function closeForm() {
    const formPeople = document.querySelector('.editAddPeople');
    formPeople.style.display = 'none';
    const formAccessories = document.querySelector('.editAddGoods');
    formAccessories.style.display = 'none';
    const formCar = document.querySelector('.editAddCar');
    formCar.style.display = 'none';
    const formSell = document.querySelector('.sellGoods');
    formSell.style.display = 'none';
    const historyInfo = document.querySelector('.order-history-info');
    historyInfo.innerHTML = '';

}