window.addEventListener("click", function (event) {

    if(event.target.dataset.tooltip === "tooltip") {

        const tooltipParant = event.target.closest('.block-icon-img');

        const tooltip = tooltipParant.querySelector('.tooltip-zp');

        if(tooltipParant.querySelector('.none')){

            tooltip.classList.remove('none');
            event.preventDefault();

        } else{

            tooltip.classList.add('none');
            event.preventDefault();

        }

    }

})