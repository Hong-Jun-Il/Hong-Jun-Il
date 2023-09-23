const testElements = document.querySelectorAll('.test');

gsap.from(testElements, {
    autoAlpha: 0,
    y: 50,
    rotation: 100,
    duration: 1,
    delay: 1,
    ease: 'back.out(1.5)',
    stagger: {
        amount: .8,
    },
    scale: .5
});
