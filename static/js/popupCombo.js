let leftContent = document.querySelector('.content_left');
let rightContent = document.querySelector('.popup_right');
let imgCombo;
let rightContentCombo;

window.addEventListener("click", function(event) {

    if(event.target.dataset.button === "combo-open"){

        const comboParant = event.target.closest('.comboPopupWindow');

        const comboContent = {
            id: comboParant.dataset.id,
            imgSrc: comboParant.querySelector('.block-img').getAttribute('src'),
            header: comboParant.querySelector('[data-header]').innerText,
            text: comboParant.querySelector('.block-text').innerText,
            products: comboParant.querySelector('.popup_products_none').innerHTML,
            sum: comboParant.querySelector('.block_sum_none').innerHTML,
        }

        imgCombo = `<div class="popup_left_content content_img">
                            <img class="popup_left_img" src="${comboContent.imgSrc}" alt="">
                        </div>`
        
        rightContentCombo = `<div data-id="${comboContent.id}" class="popup_right_content">

                                <h3 class="popup_right_heading">${comboContent.header}</h2>
                                <p class="popup_right_text">${comboContent.text}</p>

                                ${comboContent.products}

                                <div class="popup_right_sum">

                                    ${comboContent.sum}
                                    <button data-cart="storage" class="button button_pizza">В корзину</button>

                                </div>

                            </div>`

        if(leftContent.querySelector('.popup_left_content')){

            leftContent.querySelector('.popup_left_content').remove();
            leftContent.insertAdjacentHTML("beforeend", imgCombo);
            
        } else{

            leftContent.insertAdjacentHTML("beforeend", imgCombo);

        }

        if(rightContent.querySelector('.popup_right_content')){

            rightContent.querySelector('.popup_right_content').remove();
            rightContent.insertAdjacentHTML("beforeend", rightContentCombo);
            popupComboCalcOpen(rightContent);

        } else{

            rightContent.insertAdjacentHTML("beforeend", rightContentCombo);
            popupComboCalcOpen(rightContent);

        }

    }

})

function leftImgToggle() {

    if(leftContent.querySelector('.popup_left_content')){

        leftContent.querySelector('.popup_left_content').remove();
        leftContent.insertAdjacentHTML("beforeend", imgCombo);
        

    } else{

        leftContent.insertAdjacentHTML("beforeend", imgCombo);

    }

}