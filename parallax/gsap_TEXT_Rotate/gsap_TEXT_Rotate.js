const testElements = document.querySelectorAll('.test');

gsap.from(testElements, {
    autoAlpha: 0,
    y: 70,
    rotation: 80,
    duration: 1,
    ease: 'back.out(1.5)',
    stagger: {
        amount: 0.5,
    }
});