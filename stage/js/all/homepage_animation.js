// variables
let header = document.querySelector(".mainHeader");
console.log(header)
gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: "+=400 center",
            end: "bottom center",
            scrub: 1,
            markers: true
        }
    })
    .fromTo("header .title", { x: "0%" }, { x: "100%", opacity: "0" })
    .fromTo("header .btn_container", { x: "0%" }, { x: "100%", opacity: "0" })
    .fromTo("header .img_container", { x: "0%" }, { x: "-100%", opacity: "0" });