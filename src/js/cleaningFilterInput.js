function cleaning(list){
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}

function cleaningCarsFilter(){
    const list = document.querySelectorAll('.formFilterCars .inputFilter');
    cleaning(list);
}

function cleaningCarsFilterData(){
    cleaningCarsFilter();
    showCars();
}

function cleaningGoodsFilter(){
    const list = document.querySelectorAll('.formFilterGoods .inputFilter');
    cleaning(list);
}

function cleaningGoodsFilterData(){
    cleaningGoodsFilter();
    showGoods();
}

function cleaningPeopleFilter(){
    const list = document.querySelectorAll('.formFilterPeople .inputFilter');
    cleaning(list);
}

function cleaningPeopleFilterData(){
    cleaningPeopleFilter();
    showPeople();
}

function cleaningBoughtCarsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtCars .inputFilter');
    cleaning(list);
}

function cleaningBoughtCarsFilterData(){
    cleaningBoughtCarsFilter();
    showBoughtCars();
}

function cleaningBoughtGoodsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtGoods .inputFilter');
    cleaning(list);
}

function cleaningBoughtGoodsFilterData(){
    cleaningBoughtGoodsFilter();
    showBoughtAccessories();
}