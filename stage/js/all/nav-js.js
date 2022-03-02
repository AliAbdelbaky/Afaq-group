window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav')
    this.scrollY >= 150 ? navbar.classList.add("navScroll") : navbar.classList.remove("navScroll");
})