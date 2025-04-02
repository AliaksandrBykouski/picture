const mask = (selector) => {
    function setCursorPosition(pos, elem) {
        if (document.activeElement === elem) { // Проверяем, в фокусе ли элемент
            elem.setSelectionRange(pos, pos);
        }
    }

    function createMask(event) {
        let matrix = '+375 (__) ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (!this.value || this.value === '+3' || this.value === '+37') {
            val = def;
        }

        this.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur' && this.value === '+375 (__) ___-__-__') {
            this.value = '';
        } else if (event.type !== 'blur') {
            requestAnimationFrame(() => setCursorPosition(this.value.length, this));
        }
    }

    function handleClick(event) {
        if (!event.target.value) {
            event.target.value = '+375 ';
            setCursorPosition(event.target.value.length, event.target);
        }
    }

    let inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('click', handleClick);
        input.addEventListener('blur', createMask); // Теперь setCursorPosition не вызывается при blur
    });
};

export default mask;
