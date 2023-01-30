function addPurchaseCarsInData() {
    let boughtCar = [];
    for (let i = 0; i < peopleInf.length; i++) {
        const cars = peopleInf[i].auto;
        const people = peopleInf[i].name + " " + peopleInf[i].surname + ", " + peopleInf[i].email;
        if (cars.length > 0) {
            for (let j = 0; j < cars.length; j++) {
                cars[j].customerid = peopleInf[i].id;
                cars[j].customer = people;
                boughtCar.push(cars[j]);
            }
        }
    }
    localStorage.setItem('purchaseCars', JSON.stringify(boughtCar));
    purchaseCarsInf = JSON.parse(localStorage.getItem('purchaseCars')) || [];
}


function addPurchaseGoogsInData() {
    let boughtAccessories = [];
    for (let i = 0; i < peopleInf.length; i++) {
        const accessories = peopleInf[i].accessories;
        const people = peopleInf[i].name + " " + peopleInf[i].surname + ", " + peopleInf[i].email;
        if (accessories.length > 0) {
            for (let j = 0; j < accessories.length; j++) {
                accessories[j].customer = people;
                boughtAccessories.push(accessories[j]);
            }
        }
    }
    localStorage.setItem('purchaseGoods', JSON.stringify(boughtAccessories));
    purchaseGoodsInf = JSON.parse(localStorage.getItem('purchaseGoods')) || [];
}