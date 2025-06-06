const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // плавный скролл до якоря с помощью requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0 , r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

    // плавный скролл до якоря обычным способом

    // const element = document.documentElement,
    //     body = document.body;
    //
    // let calcScrollValue = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             let hashEl = document.querySelector(this.hash),
    //                 hashElTop = 0;
    //
    //             while (hashEl.offsetParent) {
    //                 hashElTop += hashEl.offsetTop;
    //                 hashEl = hashEl.offsetParent;
    //             }
    //
    //             hashElTop = Math.round(hashElTop);
    //             smoothScroll(scrollTop, hashElTop, this.hash);
    //         }
    //     });
    // };
    //
    // const smoothScroll = (from, to, hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
    //
    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }
    //
    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(
    //                 history.state,
    //                 document.title,
    //                 location.href.replace(/#.*$/g, '') + hash
    //             );
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    //
    // calcScrollValue();
};

export default scrolling;
