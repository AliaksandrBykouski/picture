const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^а-яё0-9\s]/i)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;
