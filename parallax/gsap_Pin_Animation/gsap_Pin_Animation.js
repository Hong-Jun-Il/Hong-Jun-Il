const ani1 = gsap.timeline();

ani1.to("#section1 .parallax__item__img", {rotation: 720, scale: 0, borderRadius: 200})
    .to("#section1 .parallax__item__img", {rotation: 0, scale: 1, borderRadius: 0});

ScrollTrigger.create({
    animation: ani1,
    trigger: '#section1',
    start: 'top top',
    end: '+=2000',
    markers: true,
    scrub: true,
    anticipatePin: 1,
    pin: true,
});

// section2

const ani2 = gsap.timeline();

ani2.from("#section2 .i1", {y: -100, autoAlpha: 0, borderRadius: 200})
.from("#section2 .i2", {y: 100, autoAlpha: 0, borderRadius: 200})
.from("#section2 .i3", {y: -100, autoAlpha: 0, borderRadius: 200})

ScrollTrigger.create({
    animation: ani2,
    trigger: '#section2',
    start: 'top top',
    end: '+=2000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

// section3

const ani3 = gsap.timeline();

ani3.from("#section3 .parallax__item__img", {
    y: -100,
    autoAlpha: 0,
    ease: 'back.out(4)',
    stagger: {
        amount: 13,
        from: "left ",
    },
});

ScrollTrigger.create({
    animation: ani3,
    trigger: '#section3',
    start: 'top top',
    end: '+=4000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani4 = gsap.timeline();

ani4.from("#section4 .parallax__item__img", {
    autoAlpha: 0,
    width: "100vw",
    height: "100vh",
    scale: 10,
})

ScrollTrigger.create({
    animation: ani4,
    trigger: '#section4',
    start: 'top top',
    end: '+=4000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani5 = gsap.timeline();

ani5.to("#section5 .t1", {
    xPercent: 300,
}, "text")
.to("#section5 .t2", {
    xPercent: -300
}, "text")
.to("#section5 .t3", {
    xPercent: 300
}, "text")
.to("#section5 .t4", {
    xPercent: -300
}, "text");


ScrollTrigger.create({
    animation: ani5,
    trigger: '#section5',
    start: 'top top',
    end: '+=2000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani6 = gsap.timeline();

ani6.to("#section6 .parallax__item__text", {
    scale: 10, 
    duration: 2,
    autoAlpha: 0,
})

ScrollTrigger.create({
    animation: ani6,
    trigger: '#section6',
    start: 'top top',
    end: '+=2000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani7 = gsap.timeline();

ani7.from('#section7 .t1', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t2', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t3', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t4', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t5', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t6', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")
ani7.from('#section7 .t7', {
    autoAlpha: 0, duration: 1, y: 50,
},"+=1")

ScrollTrigger.create({
    animation: ani7,
    trigger: '#section7',
    start: 'top top',
    end: '+=6000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani8 = gsap.timeline();

ani8.from('#section8 .t1', {
    x: innerWidth * 1
})
ani8.from('#section8 .t2', {
    x: innerWidth * -1
})
ani8.from('#section8 .t3', {
    x: innerWidth * 1
})
ani8.from('#section8 .i1', {
    x: innerWidth * -1
})

ScrollTrigger.create({
    animation: ani8,
    trigger: '#section8',
    start: 'top top',
    end: '+=6000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

const ani9 = gsap.timeline();

ani9.to("#section9 .parallax__item__img", {
    autoAlpha: 0,
    scale: 13,
})

ScrollTrigger.create({
    animation: ani9,
    trigger: '#section9',
    start: 'top top',
    end: '+=6000',
    markers: true,
    scrub: true,
    pin: true,
    anticipatePin: 1,
});