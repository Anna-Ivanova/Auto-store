function cleaningCarsFilter(){
    const list = document.querySelectorAll('.formFilterCars .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
    showCars();
}

function cleaningGoodsFilter(){
    const list = document.querySelectorAll('.formFilterGoods .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
    showGoods();
}

function cleaningPeopleFilter(){
    const list = document.querySelectorAll('.formFilterPeople .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
    showPeople();
}

function cleaningBoughtCarsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtCars .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
    showBoughtCars();
}

function cleaningBoughtGoodsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtGoods .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
    showBoughtAccessories();
}