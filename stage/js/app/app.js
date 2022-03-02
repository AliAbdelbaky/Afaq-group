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
            stagePadding: 60,
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
const toupBtn = document.querySelector(".to_up_btn");
toupBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
const navBar = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
    this.scrollY >= 150 ? navBar.classList.add("show") : navBar.classList.remove("show");
})
const showCardInfo = document.querySelectorAll(".candidates .show_info");
const showCardInfoClose = document.querySelectorAll(".candidates .close_info");
const CardInfo = document.querySelectorAll(".candidates .card");
showCardInfo.forEach((item, i) => {
    item.addEventListener("click", () => {
        showCardFunc(item, i);
    })
})
showCardInfoClose.forEach((item, i) => {
    item.addEventListener("click", () => {
        CardInfo[i].classList.remove("active")
    })
})

function showCardFunc(item, i) {
    CardInfo.forEach(card => {
        card.classList.remove("active");
    })
    CardInfo[i].classList.add("active")
}