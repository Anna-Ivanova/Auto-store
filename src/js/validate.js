const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.nextElementSibling;
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.nextElementSibling;

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidName = uname => {
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    return re.test(String(uname).toLowerCase());
}

const isValidSurname = surname => {
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    return re.test(String(surname).toLowerCase());
}

const isValidAge = age => {
    const re = /^\d{2,3}$/;
    return re.test(String(age).toLowerCase());
}

const isValidAddress = address => {
    const re = /^[a-zа-яA-ZА-Я0-9+_]{1,64}/;
    return re.test(String(address).toLowerCase());
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhone = phone => {
    const re = /^[\d\][\d\(\)\ -]{9,10}\d$/;
    return re.test(String(phone).toLowerCase());
}

const isValidProduct = product => {
    const re = /^[a-zа-яA-ZА-Я0-9+_]{1,164}/;
    return re.test(String(product).toLowerCase());
}

const isValidPartNumber = partNumber => {
    const re = /^\d{6,10}$/;
    return re.test(String(partNumber).toLowerCase());
}

const isValidIntende = intende => {
    const re = /peugeot \d{3,4}/;
    return re.test(String(intende).toLowerCase());
}

const isValidPriceGoods = priceGoods => {
    const re = /^\d{1,10}$/;
    return re.test(String(priceGoods).toLowerCase());
}

const isValidQuantityGoods = quantityGoods => {
    const re = /^\d{1,10}$/;
    return re.test(String(quantityGoods).toLowerCase());
}

const isValidModel = model => {
    const re = /^\d{1,10}$/;
    return re.test(String(model).toLowerCase());
}

const isValidBody = body => {
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    return re.test(String(body).toLowerCase());
}

const isValidColor = color => {
    const re = /^.{3,20}$/;
    return re.test(String(color).toLowerCase());
}

const isValidEngine = engine => {
    const re = /^[a-zа-яA-ZА-Я0-9+_]{1,64}/;
    return re.test(String(engine).toLowerCase());
}

const isValidTransmission = transmission => {
    const re = /^[a-zа-яA-ZА-Я0-9+_]{1,10}/;
    return re.test(String(transmission).toLowerCase());
}

const isValidFuel = fuel => {
    const re = /(gas|diesel)/;
    return re.test(String(fuel).toLowerCase());
}

const isValidPriceCar = priceCar => {
    const re = /^\d{1,10}$/;
    return re.test(String(priceCar).toLowerCase());
}

const isValidQuantityCar = quantityCar => {
    const re = /^\d{1,10}$/;
    return re.test(String(quantityCar).toLowerCase());
}

function validateName(uname) {
    if (uname.value === '') {
        setError(uname, 'User name cannot be blank');
        result = false;
    } else if (!isValidName(uname.value)) {
        setError(uname, 'Enter a valid name');
        result = false;
    } else {
        setSuccess(uname);
        result = true;
    }
    return result;
}

function validateSurname(surname) {
    if (surname.value === '') {
        setError(surname, 'User surname cannot be blank');
        result = false;
    } else if (!isValidSurname(surname.value)) {
        setError(surname, 'Enter a valid surname');
        result = false;
    } else {
        setSuccess(surname);
        result = true;
    }
    return result;
}

function validateAge(age) {
    if (age.value === '') {
        setError(age, 'Age is required');
        result = false;
    } else if (!isValidAge(age.value)) {
        setError(age, 'Enter your age');
        result = false;
    } else {
        setSuccess(age);
        result = true;
    }
    return result;
}

function validateAddress(address) {
    if (address.value === '') {
        setError(address, 'Addres is required');
        result = false;
    } else if (!isValidAddress(address.value)) {
        setError(address, 'Provide a valid address');
        result = false;
    } else {
        setSuccess(address);
        result = true;
    }
    return result;
}

function validateEmail(email) {
    if (email.value === '') {
        setError(email, 'Email is required');
        result = false;
    } else if (!isValidEmail(email.value)) {
        setError(email, 'Example john@example.com');
        result = false;
    } else {
        setSuccess(email);
        result = true;
    }
    return result;
}

function validatePhone(phone) {
    if (phone.value === '') {
        setError(phone, 'Email is required');
        result = false;
    } else if (!isValidPhone(phone.value)) {
        setError(phone, 'Example 0505555555')
        result = false;
    } else {
        setSuccess(phone);
        result = true;
    }
    return result;
}

function validateProduct(product) {
    if (product.value === '') {
        setError(product, 'The field must be filled in');
        result = false;
    } else if (!isValidProduct(product.value)) {
        setError(product, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(product);
        result = true;
    }
    return result;
}

function validatePartNumber(partNumber) {
    if (partNumber.value === '') {
        setError(partNumber, 'The field must be filled in');
        result = false;
    } else if (!isValidPartNumber(partNumber.value)) {
        setError(partNumber, 'Enter  correct part number');
        result = false;
    } else {
        setSuccess(partNumber);
        result = true;
    }
    return result;
}

function validateIntende(intende) {
    if (intende.value === '') {
        setError(intende, 'The field must be filled in');
        result = false;
    } else if (!isValidIntende(intende.value)) {
        setError(intende, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(intende);
        result = true;
    }
    return result;
}

function validatePriceGoods(priceGoods) {
    if (priceGoods.value === '') {
        setError(priceGoods, 'The field must be filled in');
        result = false;
    } else if (!isValidPriceGoods(priceGoods.value)) {
        setError(priceGoods, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(priceGoods);
        result = true;
    }
    return result;
}

function validateQuantityGoods(quantityGoods) {
    if (quantityGoods.value === '') {
        setError(quantityGoods, 'The field must be filled in');
        result = false;
    } else if (!isValidQuantityGoods(quantityGoods.value)) {
        setError(quantityGoods, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(quantityGoods);
        result = true;
    }
    return result;
}

function validateModel(model) {
    if (model.value === '') {
        setError(model, 'The field must be filled in');
        result = false;
    } else if (!isValidModel(model.value)) {
        setError(model, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(model);
        result = true;
    }
    return result;
}

function validateBody(body) {
    if (body.value === '') {
        setError(body, 'The field must be filled in');
        result = false;
    } else if (!isValidBody(body.value)) {
        setError(body, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(body);
        result = true;
    }
    return result;
}

function validateColor(color) {
    if (color.value === '') {
        setError(color, 'The field must be filled in');
        result = false;
    } else if (!isValidColor(color.value)) {
        setError(color, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(color);
        result = true;
    }
    return result;
}

function validateEngine(engine) {
    if (engine.value === '') {
        setError(engine, 'The field must be filled in');
        result = false;
    } else if (!isValidEngine(engine.value)) {
        setError(engine, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(engine);
        result = true;
    }
    return result;
}

function validateTransmission(transmission) {
    if (transmission.value === '') {
        setError(transmission, 'The field must be filled in');
        result = false;
    } else if (!isValidTransmission(transmission.value)) {
        setError(transmission, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(transmission);
        result = true;
    }
    return result;
}

function validateFuel(fuel) {
    if (fuel.value === '') {
        setError(fuel, 'The field must be filled in');
        result = false;
    } else if (!isValidFuel(fuel.value)) {
        setError(fuel, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(fuel);
        result = true;
    }
    return result;
}

function validatePriceCar(priceCar) {
    if (priceCar.value === '') {
        setError(priceCar, 'The field must be filled in');
        result = false;
    } else if (!isValidPriceCar(priceCar.value)) {
        setError(priceCar, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(priceCar);
        result = true;
    }
    return result;
}

function validateQuantityCar(quantityCar) {
    if (quantityCar.value === '') {
        setError(quantityCar, 'The field must be filled in');
        result = false;
    } else if (!isValidQuantityCar(quantityCar.value)) {
        setError(quantityCar, 'Enter a valid value');
        result = false;
    } else {
        setSuccess(quantityCar);
        result = true;
    }
    return result;
}
/*---------------------------------*/
function validateFormPeople() {
    const uname = document.querySelector('.textName');
    const surname = document.querySelector('.textSurname');
    const age = document.querySelector('.textAge');
    const address = document.querySelector('.textAddress');
    const email = document.querySelector('.textEmail');
    const phone = document.querySelector('.textPhone');
    if (validateName(uname) && validateSurname(surname) && validateAge(age) && validateAddress(address) && validateEmail(email) && validatePhone(phone)) {
        return true;
    }
}

function validateFormGoods() {
    const product = document.querySelector('.textProduct');
    const partNumber = document.querySelector('.textPartNumber');
    const intende = document.querySelector('.textIntendeForCars');
    const priceGoods = document.querySelector('.textPriceAccessories');
    const quantityGoods = document.querySelector('.textQuantityGoods');
    if (validateProduct(product) && validatePartNumber(partNumber) && validateIntende(intende) && validatePriceGoods(priceGoods) && validateQuantityGoods(quantityGoods)) {
        return true;
    }
}

function validateFormCars() {
    const model = document.querySelector('.textModel');
    const body = document.querySelector('.textBody');
    const color = document.querySelector('.textColor');
    const engine = document.querySelector('.textEngine');
    const transmission = document.querySelector('.textTransmission');
    const fuel = document.querySelector('.textFuel');
    const priceCar = document.querySelector('.textPriceCar');
    const quantityCar = document.querySelector('.textQuantityCars');
    if (validateModel(model) && validateBody(body) && validateColor(color) && validateEngine(engine) && validateTransmission(transmission) && validateFuel(fuel) && validatePriceCar(priceCar) && validateQuantityCar(quantityCar)) {
        return true;
    }
}

function hideForm() {
    document.querySelector('.form').reset();
}