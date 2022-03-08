//--- owl carousel
$('.owl-carousel').owlCarousel({
        rtl: true,
        loop: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
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
            },
            400: {
                items: 1,
                nav: false,
                stagePadding: 60,
                loop: true,
            },
            600: {
                items: 1,
                nav: false,
                stagePadding: 60,
                loop: true,
            },
            1000: {
                loop: true,
                items: 3,
                nav: false,
                stagePadding: 100,
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