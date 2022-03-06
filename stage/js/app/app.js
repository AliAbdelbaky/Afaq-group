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
    // $(function() {
    //     App.init();
    // });
    // var App = {
    //     init: function() {
    //         this.side.nav()
    //     },
    //     side: {
    //         nav: function() {
    //             this.toggle(), this.navigation()
    //         },
    //         toggle: function() {
    //             $(".navbar-toggler").on("touchstart click", function(e) {
    //                 e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
    //             }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
    //                 e.preventDefault(), $(".navbar-toggler").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
    //             })
    //         },
    //         navigation: function() {
    //             $(".nav-left a").on("touchstart click", function(e) {
    //                 e.preventDefault();
    //                 var t = $(this).attr("href").replace("#", "");
    //                 $(".sidebar").toggleClass("active"), $(".html").removeClass("visible"), "home" == t || "" == t || null == t ? $(".html.welcome").addClass("visible") : $(".html." + t).addClass("visible"), App.title($(this).text())
    //             })
    //         }
    //     },
    // };