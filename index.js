// gsap.from(".name-side", { opacity: 1, y: 100, duration: 1 });

gsap.registerPlugin(ScrollTrigger)

let i = true;

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".introduction",
        start: "top top",
        end: "+=1000",
        pin: true,
        markers: true,
        scrub: 1,
    }
});

tl.add('start')
    .fromTo(".name-side", { x: "-50%", y: "-50%", duration: 10,  textAlign: "center" }, {x: "-100%", y: "-50%", duration: 10, textAlign: "left"}, 'start')
    .fromTo(".image-side", { opacity: 0, x: "-50%", y: "-50%", duration: 5 }, { opacity: 1, x: "0%", y: "-50%", duration: 5 }, 'start')
    .fromTo(".name-side-action", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 5 });


let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-about",
            start: "center center",
            end: "bottom",
            pin: true,
            markers: true,
            scrub: 1,
        }
    });

tl2.add('start')
tl2.fromTo(".section-about-h1", {opacity: 0,  y: "0"}, {opacity: 1, y: -100, duration: 10}, 'start');
tl2.fromTo(".p-1", {opacity: 0,  x: -200}, {opacity: 1, x: 0, duration: 1000}, 'start');
tl2.fromTo(".p-2", {opacity: 0,  x: 200}, {opacity: 1, x: 0, duration: 1000}, 'start');