// gsap.from(".name-side", { opacity: 1, y: 100, duration: 1 });

gsap.registerPlugin(ScrollTrigger) 

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
    .to(".name-side", { x: "-100%", duration: 5},  'start')
    .to(".image-side", {opacity: 1, x: "60%", duration: 5}, 'start')
    .fromTo(".name-side-action", { opacity: 0 , y: 100}, {opacity: 1, y: 0, duration: 5});

// gsap.to(".box", {
//     scrollTrigger: ".name-side", // start the animation when ".box" enters the viewport (once)
//     x: 500,
//   });