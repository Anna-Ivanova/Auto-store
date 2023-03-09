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
    const re = /\d/;
    return re.test(String(priceGoods).toLowerCase());
}

const isValidQuantityGoods = quantityGoods => {
    const re = /\d/;
    return re.test(String(quantityGoods).toLowerCase());
}

const isValidModel = model => {
    const re = /\d/;
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
    const re = /\d/;
    return re.test(String(priceCar).toLowerCase());
}

const isValidQuantityCar = quantityCar => {
    const re = /\d/;
    return re.test(String(quantityCar).toLowerCase());
}

/*----------------------------------------------------*/
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
/*----------------------------------------------------*/

function validateField(field, validationFunc) {
    if (field.value === '') {
        setError(field, 'The field must be filled in');
        return false;
    } else if (!validationFunc(field.value)) {
        setError(field, 'Enter a valid value');
        return false;
    } else {
        setSuccess(field);
        return true;
    }
}

function validateForm(validations) {
    let result = true;
    validations.forEach(validation => {
        result = validateField(document.querySelector(validation.selector), validation.validationFunc) && result;
    });
    return result;
}

const validationsPeople = [
    { selector: '.textName', validationFunc: isValidName },
    { selector: '.textSurname', validationFunc: isValidSurname },
    { selector: '.textAge', validationFunc: isValidAge },
    { selector: '.textAddress', validationFunc: isValidAddress },
    { selector: '.textEmail', validationFunc: isValidEmail },
    { selector: '.textPhone', validationFunc: isValidPhone }
];

const validationsGoods = [
    { selector: '.textProduct', validationFunc: isValidProduct },
    { selector: '.textPartNumber', validationFunc: isValidPartNumber },
    { selector: '.textIntendeForCars', validationFunc: isValidIntende },
    { selector: '.textPriceAccessories', validationFunc: isValidPriceGoods },
    { selector: '.textQuantityGoods', validationFunc: isValidQuantityGoods }
];

const validationsCars = [
    { selector: '.textModel', validationFunc: isValidModel },
    { selector: '.textBody', validationFunc: isValidBody },
    { selector: '.textColor', validationFunc: isValidColor },
    { selector: '.textEngine', validationFunc: isValidEngine },
    { selector: '.textTransmission', validationFunc: isValidTransmission },
    { selector: '.textFuel', validationFunc: isValidFuel },
    { selector: '.textPriceCar', validationFunc: isValidPriceCar },
    { selector: '.textQuantityCars', validationFunc: isValidQuantityCar }
];

function validateFormPeople() {
    return validateForm(validationsPeople);
}

function validateFormGoods() {
    return validateForm(validationsGoods);
}

function validateFormCars() {
    return validateForm(validationsCars);
}
/*---------------------------------*/

function hideForm() {
    document.querySelector('.form').reset();
}