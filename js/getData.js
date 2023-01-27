async function getCarstoLocalStor() {

    const response = await fetch(`static/cars.json`);
    let data = await response.json();
    if (localStorage.getItem('cars') === null) {
        localStorage.setItem('cars', JSON.stringify(data));
        carInf = JSON.parse(localStorage.getItem('cars'));
    }

}
async function getGoodstoLocalStor() {

    const response = await fetch(`static/accessories.json`);
    let data = await response.json();
    if (localStorage.getItem('accessories') === null) {
        localStorage.setItem('accessories', JSON.stringify(data));
        goodsInf = JSON.parse(localStorage.getItem('accessories'));
    }

}
async function getPeopletoLocalStor() {

    const response = await fetch(`static/people.json`);
    let data = await response.json();
    if (localStorage.getItem('people') === null) {
        localStorage.setItem('people', JSON.stringify(data));
        peopleInf = JSON.parse(localStorage.getItem('people'));
    }
}

async function initApplication() { 
    await Promise.all([ 
      getCarstoLocalStor(), 
      getGoodstoLocalStor(), 
      getPeopletoLocalStor(), 
    ]); 
   
    addPurchaseCarsInData(); 
    addPurchaseGoogsInData();
     
    const classBtnCars ='.savefilterCars';
    getClickFilter(classBtnCars, showFilterCars, carInf);

    const classBtnGoods ='.saveFilterGoods';
    getClickFilter(classBtnGoods, showFilterGoods, goodsInf);

  } 

  function getClickFilter(classBtn, showFilter, inf){
    const btnFilter= document.querySelector(classBtn);
    btnFilter.addEventListener('click', function(event){
        event.preventDefault();
        showFilter(inf);
    });

    showFilter(inf);
  }