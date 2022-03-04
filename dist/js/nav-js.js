window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav')
    let sidebar = document.querySelector('.sidebar');
    this.scrollY >= 150 ? navbar.classList.add("navScroll") : navbar.classList.remove("navScroll");
    this.scrollY >= 150 ? sidebar.classList.add("navScroll") : sidebar.classList.remove("navScroll");
})
$(function() {
    App.init();
});
var App = {
    init: function() {
        this.side.nav()
    },
    side: {
        nav: function() {
            this.toggle(), this.navigation()
        },
        toggle: function() {
            $(".navbar-toggler").on("touchstart click", function(e) {
                e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
            }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                e.preventDefault(), $(".navbar-toggler").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
            })
        },
        navigation: function() {
            $(".nav-left a").on("touchstart click", function(e) {
                e.preventDefault();
                var t = $(this).attr("href").replace("#", "");
                $(".sidebar").toggleClass("active"), $(".html").removeClass("visible"), "home" == t || "" == t || null == t ? $(".html.welcome").addClass("visible") : $(".html." + t).addClass("visible"), App.title($(this).text())
            })
        }
    },
};