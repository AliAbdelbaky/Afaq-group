//--- owl carousel
$('.owl-carousel').owlCarousel({
        rtl: true,
        loop: false,
        autoplayTimeout: 15000,
        autoplay: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
                stagePadding: 15,
                loop: true,
                autoplayTimeout: 15000,
            },
            400: {
                items: 1,
                nav: false,
                stagePadding: 60,
                loop: true,
                autoplayTimeout: 15000,
            },
            1000: {
                loop: true,
                items: 3,
                nav: false,
                stagePadding: 100,
                autoplayTimeout: 15000,
            }
        }
    })
    //----------
    //- loading aniamtion
const loading_animation = document.querySelector(".loading-animation");
window.onload = () => {
        setTimeout(() => {
            loading_animation.classList.remove("active");
        }, 1000)
    }
    //------------------