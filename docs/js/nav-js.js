//--- navbar tasks
window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav')
    let sidebar = document.querySelector('.sidebar');
    this.scrollY >= 150 ? navbar.classList.add("navScroll") : navbar.classList.remove("navScroll");
    this.scrollY >= 150 ? sidebar.classList.add("navScroll") : sidebar.classList.remove("navScroll");
})
let sidebar = document.querySelector(".sidebar");
let buttonToggler = document.querySelector('nav button');
let sidebar_overlay = sidebar.querySelector('.sidebar-overlay');
let navLink = document.querySelectorAll('.sidebar .sidebar-content a')
sidebar_overlay.addEventListener("click", () => {
    sidebar.classList.remove('active')
})
buttonToggler.addEventListener("click", () => {
    sidebar.classList.toggle('active')
})
navLink.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.remove('active')
        })
    })
    //------------------