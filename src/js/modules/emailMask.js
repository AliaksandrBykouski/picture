const emailMask = (selector) => {
    // Устанавливает позицию курсора
    function setCursorPosition(pos, elem) {
        if (document.activeElement === elem) { // Проверяем, в фокусе ли элемент
            elem.setSelectionRange(pos, pos);
        }
    }

    // Создает маску для ввода email
    function createMask(event) {
        const input = this;
        const val = input.value.replace(/[^a-zA-Z0-9.@]/g, ''); // Убираем все недопустимые символы

        // Обновляем значение input
        input.value = val;

        // Устанавливаем курсор в конец
        requestAnimationFrame(() => setCursorPosition(val.length, input));
    }

    // Обрабатывает клик по полю ввода
    function handleClick(event) {
        if (!event.target.value) {
            event.target.value = ''; // Устанавливаем пустую строку при клике
            setCursorPosition(event.target.value.length, event.target);
        }
    }

    // Применяем маску ко всем элементам с указанным селектором
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('click', handleClick);
    });
};

export default emailMask;
