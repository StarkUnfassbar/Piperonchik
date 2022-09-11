let products;

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    // form.addEventListener('submit', formSend);

    form.addEventListener("click", function (event) {
    
        if(event.target.dataset.button === "submit"){
            formSend(event);
        }

        products = document.querySelector('.popup_booking').innerText;
        // console.log(products)
    
    })

    async function formSend(event) {

        event.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('text', products);
        // console.log(formData.append('text', products));

        if (error === 0){
            // form.classList.add('_sending');
        
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok){

                let result = await response.json();
                alert(result.messege);
                // formPreview.innerHTML = '';
                form.reset();

            } else {
                alert('Ошибка');
            }

        } else {
            alert('Заполните обязательные поля');
        }

    }

    function formValidate(form) {

        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
        
            if (input.value === ''){
                formAddError(input);
                error++;
            }
            
        }

        return error;

    }

    function formAddError(input) {
        // input.parantElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        // input.parantElement.classList.remove('_error');
        input.classList.remove('_error');
    }

})