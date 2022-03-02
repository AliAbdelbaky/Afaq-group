$('.owl-carousel').owlCarousel({
        rtl: true,
        loop: false,
        autoplayTimeout: 4000,
        autoplay: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        lazyLoad: true,
        // merge: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
                stagePadding: 15,
                loop: true,
                autoplayTimeout: 4000,
            },
            400: {
                items: 1,
                nav: false,
                stagePadding: 60,
                loop: true,
                autoplayTimeout: 4000,
            },
            1000: {
                loop: true,
                items: 3,
                nav: false,
                stagePadding: 100,
                autoplayTimeout: 4000,
            }
        }
    })
    //- loading aniamtion
const loading_animation = document.querySelector(".loading-animation");
window.onload = () => {
        setTimeout(() => {
            loading_animation.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }, 1000)
    }
    // const toupBtn = document.querySelector(".to_up_btn");
    // toupBtn.addEventListener("click", () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // })