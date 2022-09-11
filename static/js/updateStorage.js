let html;
let menu;

let parant = document.querySelector('.popup_booking');

function updateStorage() {

    html = parant.innerHTML;

    if(html.length){
        localStorage.setItem('products', html);
    } else{
        localStorage.removeItem('products');
    }

}

window.addEventListener("click", function (event) {

    if(event.target.dataset.button === "storage" || event.target.dataset.cart === "storage"){
        updateStorage();
    }

    if(event.target.dataset.basket === "storage"){ 

        if(localStorage.getItem('products') !== null) {

            if(parant.innerHTML !== localStorage.getItem('products')){
 
                menu = localStorage.getItem('products');
                    
                const cartWrapper = document.querySelector('.popup_booking');
                cartWrapper.insertAdjacentHTML("beforeend", menu);

                toggleCartStatus();

            }

        }

    }

})