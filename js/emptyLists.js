function emptyListCar(){
    if(carInf.length <= 0){
        const tbody = document.querySelector('.table_car');
        tbody.style.display = 'none';

        const title = document.querySelector('.title_cars');
        title.style.display = 'none';

        const messageEmpty = document.querySelector('.messageEmptyCar');
        messageEmpty.style.display = 'block';
    }
    if(carInf.length > 0){
        const messageEmpty = document.querySelector('.messageEmptyCar');
        messageEmpty.style.display = 'none';

        const title = document.querySelector('.title_cars');
        title.style.display = 'block';

        const tbody = document.querySelector('.table_car');
        tbody.style.display = 'inline-table';
    }
}

function emptyListGoods(){
    if(goodsInf.length <= 0){
        const tbody = document.querySelector('.table_goods');
        tbody.style.display = 'none';

        const title = document.querySelector('.title_goods');
        title.style.display = 'none';

        const messageEmpty = document.querySelector('.messageEmptyGoods');
        messageEmpty.style.display = 'block';
    }
    if(goodsInf.length > 0){
        const messageEmpty = document.querySelector('.messageEmptyGoods');
        messageEmpty.style.display = 'none';

        const title = document.querySelector('.title_goods');
        title.style.display = 'block';

        const tbody = document.querySelector('.table_goods');
        tbody.style.display = 'inline-table';
    }
}

function emptyListPeople(){
    if(peopleInf.length <= 0){
        const tbody = document.querySelector('.table_people');
        tbody.style.display = 'none';

        const title = document.querySelector('.title_people');
        title.style.display = 'none';

        const messageEmpty = document.querySelector('.messageEmptyPeople');
        messageEmpty.style.display = 'block';
    }
    if(peopleInf.length > 0){
        const messageEmpty = document.querySelector('.messageEmptyPeople');
        messageEmpty.style.display = 'none';

        const title = document.querySelector('.title_people');
        title.style.display = 'block';

        const tbody = document.querySelector('.table_people');
        tbody.style.display = 'inline-table';
    }
}