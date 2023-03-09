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
    document.querySelector('.textQuantityCars').value = '';

    const btnSaveCar = document.querySelector('.btnSaveCar');
    btnSaveCar.style.display = 'block';

    const btnSaveEditCar = document.querySelector('.btnSaveEditCar');
    btnSaveEditCar.style.display = 'none';

    clickButton('.btnSaveCar', saveNewCar);
    clickButton('.btnCloseCar', closeForm);

}

function saveNewCar() {
    if (validateFormCars()) {
        const newModel = document.querySelector('.textModel').value.trim();
        const newBody = document.querySelector('.textBody').value.trim().toLowerCase();
        const newColor = document.querySelector('.textColor').value.trim().toLowerCase();
        const newEngine = document.querySelector('.textEngine').value.trim();
        const newTransmission = document.querySelector('.textTransmission').value.trim();
        const newFuel = document.querySelector('.textFuel').value.trim().toLowerCase();
        const newPrice = document.querySelector('.textPriceCar').value.trim();
        const newQuantity = document.querySelector('.textQuantityCars').value.trim();

        if (carInf.length <= 0) {
            const newCar = {
                id: 1,
                model: newModel,
                body: newBody,
                color: newColor,
                engine: newEngine,
                transmission: newTransmission,
                fuel: newFuel,
                price: newPrice,
                quantity: newQuantity
            }
            carInf.push(newCar);
            localStorage.setItem('cars', JSON.stringify(carInf));
            const form = document.querySelector('.editAddCar');
            hideForm();
            form.style.display = 'none';
            showCars();
        }
        else {
            const newCar = {
                id: carInf[carInf.length - 1].id + 1,
                model: newModel,
                body: newBody,
                color: newColor,
                engine: newEngine,
                transmission: newTransmission,
                fuel: newFuel,
                price: newPrice,
                quantity: newQuantity
            }
            carInf.push(newCar);
            localStorage.setItem('cars', JSON.stringify(carInf));
            const form = document.querySelector('.editAddCar');
            hideForm();
            form.style.display = 'none';
            showCars();
        }
    }
}

function createNewAccessories() {
    const form = document.querySelector('.editAddGoods');
    form.style.display = 'block';

    document.querySelector('.textProduct').value = '';
    document.querySelector('.textPartNumber').value = '';
    document.querySelector('.textIntendeForCars').value = '';
    document.querySelector('.textPriceAccessories').value = '';
    document.querySelector('.textQuantityGoods').value = '';

    const btnSaveGoods = document.querySelector('.btnSaveGoods');
    btnSaveGoods.style.display = 'block';

    const btnSaveEditGoods = document.querySelector('.btnSaveEditGoods');
    btnSaveEditGoods.style.display = 'none';

    clickButton('.btnSaveGoods', saveNewAccessories);
    clickButton('.btnCloseGoods', closeForm);
}

function saveNewAccessories() {
    if (validateFormGoods()) {
        const newProduct = document.querySelector('.textProduct').value.trim().toLowerCase();
        const newPartNumber = document.querySelector('.textPartNumber').value.trim();
        const newIntendeForCars = document.querySelector('.textIntendeForCars').value.trim().toLowerCase();
        const newPriceAccessories = document.querySelector('.textPriceAccessories').value.trim();
        const newQuantity = document.querySelector('.textQuantityGoods').value.trim();
        goodsInf.sort((a, b) => a.id - b.id);

        if (goodsInf.length <= 0) {
            const newAccessories = {
                id: 1,
                product: newProduct,
                part_number: newPartNumber,
                intended_for_cars: newIntendeForCars,
                price: newPriceAccessories,
                quantity: newQuantity
            }
            goodsInf.push(newAccessories);
            localStorage.setItem('accessories', JSON.stringify(goodsInf));
            const form = document.querySelector('.editAddGoods');
            hideForm();
            form.style.display = 'none';
            showGoods();
        }
        else {
            const newAccessories = {
                id: goodsInf[goodsInf.length - 1].id + 1,
                product: newProduct,
                part_number: newPartNumber,
                intended_for_cars: newIntendeForCars,
                price: newPriceAccessories,
                quantity: newQuantity
            }
            goodsInf.push(newAccessories);
            localStorage.setItem('accessories', JSON.stringify(goodsInf));
            const form = document.querySelector('.editAddGoods');
            hideForm();
            form.style.display = 'none';
            showGoods();
        }
    }
}

function createNewPeople() {
    const form = document.querySelector('.editAddPeople');
    form.style.display = 'block';

    document.querySelector('.textName').value = '';
    document.querySelector('.textSurname').value = '';
    document.querySelector('.textAge').value = '';
    document.querySelector('.textAddress').value = '';
    document.querySelector('.textEmail').value = '';
    document.querySelector('.textPhone').value = '';

    const btnSavePeople = document.querySelector('.btnSavePeople');
    btnSavePeople.style.display = 'block';

    const btnSaveEditPeople = document.querySelector('.btnSaveEditPeople');
    btnSaveEditPeople.style.display = 'none';

    clickButton('.btnSavePeople', saveNewPeople);
    clickButton('.btnClose', closeForm);

}

function saveNewPeople() {
    if (validateFormPeople()) {
        const newName = document.querySelector('.textName').value;
        const newSurname = document.querySelector('.textSurname').value;
        const newAge = document.querySelector('.textAge').value;
        const newAddress = document.querySelector('.textAddress').value;
        const newEmail = document.querySelector('.textEmail').value;
        const newPhone = document.querySelector('.textPhone').value;
        peopleInf.sort((a, b) => a.id - b.id);

        if (peopleInf.length <= 0) {
            const newPerson = {
                id: 1,
                name: newName,
                surname: newSurname,
                age: newAge,
                address: newAddress,
                email: newEmail,
                phone_number: newPhone,
                auto: [],
                accessories: []
            }
            peopleInf.push(newPerson);
            localStorage.setItem('people', JSON.stringify(peopleInf));
            const form = document.querySelector('.editAddPeople');
            hideForm();
            form.style.display = 'none';
            showPeople();
        }
        else {
            const newPerson = {
                id: peopleInf[peopleInf.length - 1].id + 1,
                name: newName,
                surname: newSurname,
                age: newAge,
                address: newAddress,
                email: newEmail,
                phone_number: newPhone,
                auto: [],
                accessories: []
            }

            peopleInf.push(newPerson);
            localStorage.setItem('people', JSON.stringify(peopleInf));
            const form = document.querySelector('.editAddPeople');
            hideForm();
            form.style.display = 'none';
            showPeople();
        }
    }
}