// gsap.from(".name-side", { opacity: 1, y: 100, duration: 1 });

gsap.registerPlugin(ScrollTrigger)


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".introduction",
        start: "top top",
        end: "+=900 +=400",
        pin: true,
        // markers: true,
        scrub: 1,

    }
});

tl.add('start')
    .fromTo(".name-side", { x: "-50%", y: "-50%", duration: 10, textAlign: "center" }, { x: "-100%", y: "-50%", duration: 10, textAlign: "left" }, 'start')
    .fromTo(".image-side", { opacity: 0, x: "-50%", y: "-50%", duration: 5 }, { opacity: 1, x: "0%", y: "-50%", duration: 5 }, 'start')
    .fromTo(".name-side-action", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 5 });


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-about",
        start: "top +=600",
        end: "top +400",
        // markers: true,
        scrub: 1
    }
});

tl2.add('start')
    .fromTo(".section-about-h1", { opacity: 0, y: "0" }, { opacity: 1, y: -50, duration: 10 }, 'start')
    .add('start2')
    .fromTo(".p-1", { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 50,  ease: "ease-out" }, 'start2')
    .fromTo(".p-2", { opacity: 0, x: 400 }, { opacity: 1, x: 0, duration: 50,  ease: "ease-out" }, 'start2');


    
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".row-content",
        start: "top +=600",
        end: "top +100",
        markers: true,
        scrub: 1
    }
});

tl3
    .fromTo(".section-project-h1", { opacity: 0, y: "-50" }, { opacity: 1, y: 0, duration: 10 }, 'start')
    .fromTo(".row-item", { opacity: 0, y: "50" }, { opacity: 1, y: 0, duration: 10 }, 'start')
