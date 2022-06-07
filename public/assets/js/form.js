let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = forma.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }

        send = false;
        if (send) {
            forma.submit();
        }
    }
};

//let forma = document.querySelector('.validator');
//forma.addEventListener('submit', validator.handleSubmit);