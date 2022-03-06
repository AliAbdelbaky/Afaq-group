// variables
let header = document.querySelector(".mainHeader");
let candidtesSec = document.querySelector(".candidates");
gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: "+=600 center",
            end: "bottom center",
            scrub: 1,
        }
    })
    .to(header.querySelector(".title"), { y: "100%", opacity: "0" })
    .to(header.querySelector(".btn_container"), { y: "100%", opacity: "0" }, "-=0.5")
    .to(header.querySelector(".img_container"), { y: "-100%", opacity: "0" }, "-=0.5");
gsap.timeline({
        scrollTrigger: {
            trigger: candidtesSec,
            start: "top bottom",
            end: "+=100 bottom",
            scrub: 2,
            markers: true,
        }
    })
    .fromTo(candidtesSec.querySelector(".main_sec_title"), { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" })
    .fromTo(candidtesSec.querySelector(".owl-carousel"), { y: "100%", opacity: "0" }, { y: "0%", opacity: "1" }, "-=0.5");
console.log(candidtesSec)