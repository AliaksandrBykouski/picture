const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    const openAccordion = (btn) => {
        // Закрываем все
        btns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active-style');
                otherBtn.nextElementSibling.classList.remove('active-content');
                otherBtn.nextElementSibling.style.maxHeight = '0px';
            }
        });

        // Открываем текущий
        btn.classList.add('active-style');
        const content = btn.nextElementSibling;
        content.classList.add('active-content');
        content.style.maxHeight = content.scrollHeight + 80 + 'px';
    };

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const isActive = this.classList.contains('active-style');
            if (isActive) {
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            } else {
                openAccordion(this);
            }
        });
    });

    //  Автооткрытие первого аккордеона
    if (btns.length > 0) {
        openAccordion(btns[0]);
    }
    // первый вариант аккордиона простой без показа первого аккордиона
    // const btns = document.querySelectorAll(triggersSelector);
    //
    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         this.classList.toggle('active-style');
    //         this.nextElementSibling.classList.toggle('active-content');
    //
    //         if (this.classList.contains('active-style')) {
    //             this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
    //         } else {
    //             this.nextElementSibling.style.maxHeight = '0px';
    //         }
    //     });
    // });
};

export default accordion;
