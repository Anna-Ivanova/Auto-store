function cleaningCarsFilter(){
    const list = document.querySelectorAll('.formFilterCars .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}

function cleaningGoodsFilter(){
    const list = document.querySelectorAll('.formFilterGoods .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}

function cleaningPeopleFilter(){
    const list = document.querySelectorAll('.formFilterPeople .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}

function cleaningBoughtCarsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtCars .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}

function cleaningBoughtGoodsFilter(){
    const list = document.querySelectorAll('.formFilterBoughtGoods .inputFilter');
    for(let i = 0; i < list.length; i++){
        list[i].value = '';
    }
}