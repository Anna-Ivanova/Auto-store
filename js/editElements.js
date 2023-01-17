function editCars(event) {
    const button = event.target.getAttribute('id');
    console.log(button);

    const form = document.querySelector('.editAddCar');
    form.style.display = 'block';

    const cars = carInf[button];
    console.log(cars);

    document.querySelector('.textModel').value = carInf.model || cars.model;
    document.querySelector('.textBody').value = carInf.body || cars.body;
    document.querySelector('.textColor').value = carInf.color || cars.color;
    document.querySelector('.textEngine').value = carInf.engine || cars.engine;
    document.querySelector('.textTransmission').value = carInf.transmission || cars.transmission;
    document.querySelector('.textFuel').value = carInf.fuel || cars.fuel;
    document.querySelector('.textPriceCar').value = carInf.price || cars.price;
    document.querySelector('.textQuantityCars').value = carInf.quantity || cars.quantity;

    const btnSaveCar = document.querySelector('.btnSaveCar');
    btnSaveCar.style.display = 'none';
    const btnSaveEditCar = document.querySelector('.btnSaveEditCar');
    btnSaveEditCar.style.display = 'block';
    btnSaveEditCar.setAttribute('id', button);

    btnSaveEditCar.addEventListener('click', saveNewEditCar);

    const btnClose = document.querySelector('.btnCloseCar');
    btnClose.addEventListener('click', closeForm);
}

function saveNewEditCar(event) {
    const button = event.target.getAttribute('id');
    console.log(button);

    const cars = carInf[button];
    console.log(cars);

    const newModel = document.querySelector('.textModel').value;
    const newBody = document.querySelector('.textBody').value;
    const newColor = document.querySelector('.textColor').value;
    const newEngine = document.querySelector('.textEngine').value;
    const newTransmission = document.querySelector('.textTransmission').value;
    const newFuel = document.querySelector('.textFuel').value;
    const newPrice = document.querySelector('.textPriceCar').value;
    const newQuantity = document.querySelector('.textQuantityCars').value;

    cars.id = `p${newModel}`;
    cars.model = newModel;
    cars.body = newBody;
    cars.color = newColor;
    cars.engine = newEngine;
    cars.transmission = newTransmission;
    cars.fuel = newFuel;
    cars.price = newPrice;
    cars.quantity = newQuantity;

    localStorage.setItem('cars', JSON.stringify(carInf));
    const form = document.querySelector('.editAddCar');
    form.style.display = 'none';
    showCars();
}

function editGoods(event) {
    const button = event.target.getAttribute('id');
    console.log(button);

    const form = document.querySelector('.editAddGoods');
    form.style.display = 'block';

    const accesserios = goodsInf[button];
    console.log(accesserios);

    document.querySelector('.textProduct').value = goodsInf.product || accesserios.product;
    document.querySelector('.textPartNumber').value = goodsInf.part_number || accesserios.part_number;
    document.querySelector('.textIntendeForCars').value = goodsInf.intended_for_cars || accesserios.intended_for_cars;
    document.querySelector('.textPriceAccessories').value = goodsInf.price || accesserios.price;
    document.querySelector('.textQuantityGoods').value = goodsInf.quantity || accesserios.quantity;

    const btnSaveGoods = document.querySelector('.btnSaveGoods');
    btnSaveGoods.style.display = 'none';
    const btnSaveEditGoods = document.querySelector('.btnSaveEditGoods');
    btnSaveEditGoods.style.display = 'block';
    btnSaveEditGoods.setAttribute('id', button);

    btnSaveEditGoods.addEventListener('click', saveNewEditGoods);

    const btnClose = document.querySelector('.btnCloseGoods');
    btnClose.addEventListener('click', closeForm);
}

function saveNewEditGoods(event) {
    const button = event.target.getAttribute('id');
    console.log(button);

    const accesserios = goodsInf[button];
    console.log(accesserios);

    const newProduct = document.querySelector('.textProduct').value;
    const newPartNumber = document.querySelector('.textPartNumber').value;
    const newIntendeForCars = document.querySelector('.textIntendeForCars').value;
    const newPrice = document.querySelector('.textPriceAccessories').value;
    const newQuantity = document.querySelector('.textQuantityGoods').value;

    accesserios.product = newProduct;
    accesserios.part_number = newPartNumber;
    accesserios.intended_for_cars = newIntendeForCars;
    accesserios.price = newPrice;
    accesserios.quantity = newQuantity;

    localStorage.setItem('accessories', JSON.stringify(goodsInf));
    const form = document.querySelector('.editAddGoods');
    form.style.display = 'none';
    showGoods();
}

function editPerson(event) {
    const button = event.target.getAttribute('id');
    console.log(button);

    const form = document.querySelector('.editAddPeople');
    form.style.display = 'block';

    const person = peopleInf[button];
    console.log(person);

    document.querySelector('.textName').value = peopleInf.name || person.name;
    document.querySelector('.textSurname').value = peopleInf.surname || person.surname;
    document.querySelector('.textAge').value = peopleInf.age || person.age;
    document.querySelector('.textAddress').value = peopleInf.address || person.address;
    document.querySelector('.textEmail').value = peopleInf.email || person.email;
    document.querySelector('.textPhone').value = peopleInf.phone_number || person.phone_number;

    const btnSavePeople = document.querySelector('.btnSavePeople');
    btnSavePeople.style.display = 'none';
    const btnSaveEditPeople = document.querySelector('.btnSaveEditPeople');
    btnSaveEditPeople.style.display = 'block';
    btnSaveEditPeople.setAttribute('id', button);

    btnSaveEditPeople.addEventListener('click', saveNewEditPerson);

    const btnClose = document.querySelector('.btnClose');
    btnClose.addEventListener('click', closeForm);
}

function saveNewEditPerson(event) {
    const button = event.target.getAttribute('id');
    console.log(event.target);

    const person = peopleInf[button];
    console.log(person);

    const newName = document.querySelector('.textName').value;
    const newSurname = document.querySelector('.textSurname').value;
    const newAge = document.querySelector('.textAge').value;
    const newAddress = document.querySelector('.textAddress').value;
    const newEmail = document.querySelector('.textEmail').value;
    const newPhone = document.querySelector('.textPhone').value;

    person.name = newName;
    person.surname = newSurname;
    person.age = newAge;
    person.address = newAddress;
    person.email = newEmail;
    person.phone_number = newPhone;

    localStorage.setItem('people', JSON.stringify(peopleInf));
    const form = document.querySelector('.editAddPeople');
    form.style.display = 'none';
    showPeople();
}