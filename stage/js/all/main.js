$(".owl-carousel").owlCarousel({rtl:!0,loop:!1,autoplayTimeout:4e3,autoplay:!0,margin:10,nav:!0,responsiveClass:!0,lazyLoad:!0,responsive:{0:{items:1,nav:!1,margin:0,stagePadding:15,loop:!0,autoplayTimeout:4e3},400:{items:1,nav:!1,stagePadding:60,loop:!0,autoplayTimeout:4e3},1e3:{loop:!0,items:3,nav:!1,stagePadding:100,autoplayTimeout:4e3}}});const navBar=document.querySelector(".navbar");window.addEventListener("scroll",()=>{150<=this.scrollY?navBar.classList.add("navScroll"):navBar.classList.remove("navScroll")}),console.log(navbar);