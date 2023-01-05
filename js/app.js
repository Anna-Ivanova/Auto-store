
async function getCars() {
    const response = await fetch('static/cars.json');
    let data = await response.json();
    showCars(data);
}

getCars();

