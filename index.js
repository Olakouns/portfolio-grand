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
    .fromTo(".name-side", { x: "-50%", y: "-50%", duration: 10 }, {
        x: "-100%", y: "-50%", duration: 10, 
        onUpdate: () => {
            // document.getElementsByClassName("name-side")[0].style.left = "50%"
        },
        onComplete: () => {
            // document.getElementsByClassName("name-side")[0].style["text-align"] = "left"
        }
    }, 'start')
    .fromTo(".image-side", { opacity: 0, x: "-50%", y: "-50%", duration: 5 }, { opacity: 1, x: "0%", y: "-50%", duration: 5 }, 'start')
    .fromTo(".name-side-action", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 5 });