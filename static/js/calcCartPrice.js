function calcCartPrice() {

    const cartItems = document.querySelectorAll('.popup_menu');
    const totalPriceEl = document.querySelector('.sum_quantity');

    let totalPrice = 0;

    cartItems.forEach(function (item){

        const amounEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.block-sum');

        if (item.querySelector('[data-value]')){
            
            const addEl = parseInt(item.querySelector('[data-value]').dataset.value);

            currentPrice = parseInt(amounEl.innerText) * parseInt(priceEl.innerText);
            totalPrice = totalPrice + currentPrice + addEl;
        
        } else{
            
            currentPrice = parseInt(amounEl.innerText) * parseInt(priceEl.innerText);
            totalPrice = totalPrice + currentPrice;

        }
        
    })

    totalPriceEl.innerText = totalPrice;

}