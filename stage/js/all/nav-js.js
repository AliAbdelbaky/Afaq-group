window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav')
    let sidebar = document.querySelector('.sidebar');
    this.scrollY >= 150 ? navbar.classList.add("navScroll") : navbar.classList.remove("navScroll");
    this.scrollY >= 150 ? sidebar.classList.add("navScroll") : sidebar.classList.remove("navScroll");
})
window.onload = () => {
    sidebar.init();
}
let sidebar = {
    init: function() {
        this.side.nav()
    },
    side: {
        nav: function() {
            this.toggle()
        },
        toggle: function() {
            $(".navbar-toggler").on("touchstart click", function(e) {
                e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
            }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                e.preventDefault(), $(".navbar-toggler").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
            })
        },
        navigation: function() {
            $(".sidebar .nav-link").on("touchstart click", function(e) {
                e.preventDefault();
                $(".sidebar").toggleClass("active")
            })
        }
    },
};
const navLink = document.querySelectorAll('.sidebar .sidebar-content a')
console.log(navLink)
navLink.forEach(item => {
    item.addEventListener('click', () => {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.remove('active')
    })
})