const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';

    const toggleMenu = () => {
        if (menuElem.style.display === "none" && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    };

    burgerElem.addEventListener('click', toggleMenu);

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (event) => {
        if (!burgerElem.contains(event.target) && !menuElem.contains(event.target) && menuElem.style.display === 'block') {
            menuElem.style.display = 'none';
        }
    });

    // Закрытие меню при нажатии клавиши ESC
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuElem.style.display === 'block') {
            menuElem.style.display = 'none';
        }
    });
};

export default burger;
