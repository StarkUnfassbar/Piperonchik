const cartWrapper = document.querySelector('.popup_booking');

let priceDiscount;
let comboPizza;

window.addEventListener("click", function (event) {

    if(event.target.hasAttribute('data-cart')){

        if (event.target.closest(".block")){

            const card = event.target.closest(".block");

            const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.block-img').getAttribute('src'),
                title: card.querySelector('[data-title]').innerText,
                price: card.querySelector('[data-value]').dataset.value,
                priceDiscount: card.querySelector('[data-value]').dataset.discount,
                size: card.querySelector('[data-size]').value,
                add: card.querySelector('[data-add]').value,
            };
    
            let priceAdd = parseInt(productInfo.add.match(/\d+/));
            priceAdd = priceAdd || 0
    
            const cartItemHtml = `<div data-id="${productInfo.id}" class="popup_menu pizza">
    
                                    <div class="mnu_img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
    
                                    <div class="mnu_text">
                                        <h4 class="mnu_header">${productInfo.title}</h4>
                                        <p>Размер: ${productInfo.size}</p>
                                        <p data-value="${priceAdd}">Добавки: ${productInfo.add}</p>
                                    </div>
    
                                    <div class="mnu_quantity">
    
                                        <button data-action="minus" class="mnu_button button_minus"></button>
    
                                        <p data-counter class="mnu_text_quantity">1</p>
    
                                        <button data-action="plus" class="mnu_button button_plus"></button>
    
                                    </div>
    
                                    <div class="mnu_sum">
                                        <p class="block-sum">${productInfo.price} р.</p> <strike>${productInfo.priceDiscount} р.</strike>
                                    </div>
    
                                    <div class="mnu_close">
    
                                        <button data-close class="mnu_button button_close"></button>
    
                                    </div>`;
    
            cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
    
            toggleCartStatus();
    
            calcCartPrice();

        }

        if(event.target.closest(".block-remaining")){
        
            const card = event.target.closest(".block-remaining");
    
            const productInfo = {
                id: card.dataset.id,
                imgSrc: card.querySelector('.block-img').getAttribute('src'),
                title: card.querySelector('[data-title]').innerText,
                price: card.querySelector('[data-value]').dataset.value,
                // priceDiscount: card.querySelector('[data-value]').dataset.discount,
            };

            if (card.querySelector('[data-discount]')){

                priceDiscount = card.querySelector('[data-value]').dataset.discount;

                const cartItemHtml = `<div data-id="${productInfo.id}" class="popup_menu remaining">
    
                                    <div class="mnu_img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>

                                    <div class="mnu_text">
                                        <h4 class="mnu_header">${productInfo.title}</h4>
                                    </div>

                                    <div class="mnu_quantity">

                                        <button data-action="minus" class="mnu_button button_minus"></button>

                                        <p data-counter class="mnu_text_quantity">1</p>

                                        <button data-action="plus" class="mnu_button button_plus"></button>

                                    </div>

                                    <div class="mnu_sum">
                                        <p class="block-sum">${productInfo.price} р.</p> <strike>${priceDiscount} р.</strike>
                                    </div>

                                    <div class="mnu_close">

                                        <button data-close class="mnu_button button_close"></button>

                </div>`;

                cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);

            } else {

                const cartItemHtml = `<div data-id="${productInfo.id}" class="popup_menu remaining">
    
                                    <div class="mnu_img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>

                                    <div class="mnu_text">
                                        <h4 class="mnu_header">${productInfo.title}</h4>
                                    </div>

                                    <div class="mnu_quantity">

                                        <button data-action="minus" class="mnu_button button_minus"></button>

                                        <p data-counter class="mnu_text_quantity">1</p>

                                        <button data-action="plus" class="mnu_button button_plus"></button>

                                    </div>

                                    <div class="mnu_sum">
                                        <p class="block-sum">${productInfo.price} р.</p>
                                    </div>

                                    <div class="mnu_close">

                                        <button data-close class="mnu_button button_close"></button>

                </div>`;

                cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);

            }
    
            toggleCartStatus();
    
            calcCartPrice();

        }

        if(event.target.closest(".popup_combo_content")){

            leftImgToggle()
            
            const card = event.target.closest(".popup_combo_content");

            const productSupplement = card.querySelector(".product_supplement");

            const productPizza = card.querySelectorAll(".product_pizza")


            for (let index = 0; index < productPizza.length; index++) {

                if(productPizza.length === 1){

                    comboPizza = productPizza[index].querySelector('.product_header').innerText;

                }

                if(productPizza.length === 2){

                    comboPizza = productPizza[0].querySelector('.product_header').innerText + ', ' 
                    + productPizza[1].querySelector('.product_header').innerText;
                    
                }

                if(productPizza.length === 5){

                    comboPizza = productPizza[0].querySelector('.product_header').innerText + ', ' 
                    + productPizza[1].querySelector('.product_header').innerText + ', ' 
                    + productPizza[2].querySelector('.product_header').innerText + ', '
                    + productPizza[3].querySelector('.product_header').innerText + ', '
                    + productPizza[4].querySelector('.product_header').innerText + ', ';
                    console.log(comboPizza)
                    
                }

                if(productPizza.length === 10){

                    comboPizza = productPizza[0].querySelector('.product_header').innerText + ', ' 
                    + productPizza[1].querySelector('.product_header').innerText + ', ' 
                    + productPizza[2].querySelector('.product_header').innerText + ', '
                    + productPizza[3].querySelector('.product_header').innerText + ', ' 
                    + productPizza[4].querySelector('.product_header').innerText + ', ' 
                    + productPizza[5].querySelector('.product_header').innerText + ', '
                    + productPizza[6].querySelector('.product_header').innerText + ', '
                    + productPizza[8].querySelector('.product_header').innerText + ', '
                    + productPizza[9].querySelector('.product_header').innerText + ', ';
                    
                }
        
            }

            if(card.querySelector(".product_drink")){

                const productDrink = card.querySelector(".product_drink");

                const productInfo = {
                    id: card.querySelector('.popup_right_content').dataset.id,
                    imgSrc: card.querySelector('.popup_left_img').getAttribute('src'),
                    title: card.querySelector('.popup_right_heading').innerText,
                    price: card.querySelector('.sum_right').dataset.value,
                    pizza: comboPizza,
                    drink: productDrink.querySelector('.product_header').innerText,
                    supplement: productSupplement.querySelector('[data-sumadd]').innerText,
                };
        
                const cartItemHtml = `<div data-id="${productInfo.id}" class="popup_menu pizza">
        
                                        <div class="mnu_img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
        
                                        <div class="mnu_text">
                                            <h4 class="mnu_header">${productInfo.title}</h4>
                                            <p>Пицца: ${productInfo.pizza}</p>
                                            <p>Напиток: ${productInfo.drink}</p>
                                            <p>Добавка: ${productInfo.supplement}</p>
                                        </div>
        
                                        <div class="mnu_quantity">
        
                                            <button data-action="minus" class="mnu_button button_minus"></button>
        
                                            <p data-counter class="mnu_text_quantity">1</p>
        
                                            <button data-action="plus" class="mnu_button button_plus"></button>
        
                                        </div>
        
                                        <div class="mnu_sum">
                                            <p class="block-sum">${productInfo.price} р.</p>
                                        </div>
        
                                        <div class="mnu_close">
        
                                            <button data-close class="mnu_button button_close"></button>
        
                                        </div>`;
        
                cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
        
                toggleCartStatus();
        
                calcCartPrice();

            } else{

                const productInfo = {
                    id: card.querySelector('.popup_right_content').dataset.id,
                    imgSrc: card.querySelector('.popup_left_img').getAttribute('src'),
                    title: card.querySelector('.popup_right_heading').innerText,
                    price: card.querySelector('.sum_right').dataset.value,
                    pizza: comboPizza,
                    supplement: productSupplement.querySelector('[data-sumadd]').innerText,
                };
        
                const cartItemHtml = `<div data-id="${productInfo.id}" class="popup_menu pizza">
        
                                        <div class="mnu_img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
        
                                        <div class="mnu_text">
                                            <h4 class="mnu_header">${productInfo.title}</h4>
                                            <p>Пицца: ${productInfo.pizza}</p>
                                            <p>Добавка: ${productInfo.supplement}</p>
                                        </div>
        
                                        <div class="mnu_quantity">
        
                                            <button data-action="minus" class="mnu_button button_minus"></button>
        
                                            <p data-counter class="mnu_text_quantity">1</p>
        
                                            <button data-action="plus" class="mnu_button button_plus"></button>
        
                                        </div>
        
                                        <div class="mnu_sum">
                                            <p class="block-sum">${productInfo.price} р.</p>
                                        </div>
        
                                        <div class="mnu_close">
        
                                            <button data-close class="mnu_button button_close"></button>
        
                                        </div>`;
        
                cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
        
                toggleCartStatus();
        
                calcCartPrice();

            }

        }

    }

    if(event.target.hasAttribute('data-close')){

        event.target.closest('.popup_menu').remove();

        calcCartPrice();

        toggleCartStatus();

        updateStorage();

    }

})