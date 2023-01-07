function createNewCar() {
    const form = document.querySelector('.editAddCar');
    form.style.display = 'block';

    document.querySelector('.textModel').value = '';
    document.querySelector('.textBody').value = '';
    document.querySelector('.textColor').value = '';
    document.querySelector('.textEngine').value = '';
    document.querySelector('.textTransmission').value = '';
    document.querySelector('.textFuel').value = '';
    document.querySelector('.textPriceCar').value = '';

    const btnSaveCar = document.querySelector('.btnSaveCar');
    btnSaveCar.addEventListener('click', saveNewCar);
    console.log('click');
    const btnClose = document.querySelector('.btnCloseCar');
    btnClose.addEventListener('click', closeForm);

}

function saveNewCar() {

    const newModel = document.querySelector('.textModel').value;
    const newBody = document.querySelector('.textBody').value;
    const newColor = document.querySelector('.textColor').value;
    const newEngine = document.querySelector('.textEngine').value;
    const newTransmission = document.querySelector('.textTransmission').value;
    const newFuel = document.querySelector('.textFuel').value;
    const newPrice = document.querySelector('.textPriceCar').value;

    const newCar = {
        id: `p${newModel}`,
        model: newModel,
        body: newBody,
        color: newColor,
        engine: newEngine,
        transmission: newTransmission,
        fuel: newFuel,
        price: newPrice
    }
    console.log(carInf);
    carInf.push(newCar);
    localStorage.setItem('cars', JSON.stringify(carInf));
    const form = document.querySelector('.editAddCar');
    form.style.display = 'none';
    showCars(carInf, 'cars');
}