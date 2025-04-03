const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGrandDad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovees'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach((mark) => {
            mark.style.display = 'none';
            mark.classList.remove('animted', 'fadeIn');
        });

        no.style.displey = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn')
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers)
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef)
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers)
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl)
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy)
    });

    btnGrandDad.addEventListener('click', () => {
        typeFilter();
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.tagName === 'LI') {
            items.forEach((item) => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;
