let contentCalc;
let ComboPricePizzaSum = 0;
let totalComboPricePizza;
let totalComboPriceDrink;

function popupComboCalcOpen(rightContent) {

    contentCalc = rightContent.querySelector('.sum_right');
    contentCalcG = parseInt(contentCalc.dataset.value);

}

function popupComboCalc() {

    const ComboPricePizza = rightContent.querySelectorAll('.product_pizza');

    for (let index = 0; index < ComboPricePizza.length; index++) {

        const el = ComboPricePizza[index];

        ComboPricePizzaSum += parseInt(el.dataset.value);

        totalComboPricePizza = parseInt(ComboPricePizzaSum);

    }

    ComboPricePizzaSum = 0;

    if(rightContent.querySelector('.product_drink')){

        totalComboPriceDrink = rightContent.querySelector('.product_drink').dataset.value;

    } else{

        totalComboPriceDrink = 0;

    }

    const totalComboPriceSupplement = rightContent.querySelector('.product_supplement').dataset.value;

    contentCalc.innerText = contentCalcG + parseInt(totalComboPriceSupplement) + parseInt(totalComboPricePizza) + parseInt(totalComboPriceDrink);
    contentCalc.dataset.value = contentCalc.innerText;

}