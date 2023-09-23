function countLoader(){
    let counter = document.querySelector('.counter');
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100){
            return;
        }

        currentValue += Math.floor(Math.random()*10)+1;

        if(currentValue > 100){
            currentValue = 100;
        }

        counter.textContent = `${currentValue}%`;

        let delay = Math.floor(Math.random()*150)+330;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

countLoader();

gsap.from('.circles', {
    duration: 2,
    top: '-100%',
    ease: 'elastic.out(.7)',
    delay: .5,
})

gsap.to('.circle-inner', {
    duration: 1,
    width: '75px',
    height: '75px',
    delay: 2,
    ease: 'power4.inOut',
})

gsap.to('.circle-inner-rotator', {
    scale: 1,
    duration: 1,
    delay: 2.5,
    ease: 'power4.inOut',
})

gsap.to('.circles', {
    rotation: 360,
    delay: 3,
    duration: 1.5,
    ease: 'power4.inOut',
})

gsap.to('.block', {
    display: 'block',
    ease: 'power4.inOut',
    height: '181.25px',
    duration: 0.75,
    delay: 4.5,
})

gsap.to('.block', {
    duration: 0.75,
    ease: 'power4.inOut',
    delay: 5,
    width: '800px',
})

gsap.fromTo('.container', {
    left: '100%',
    duration: 2,
    scale: .5,
    ease: 'power4.inOut',
    delay: 5
}, {
    duration: 2,
    left: '50%',
    scale: .5,
    transform: 'translateX(-50%)',
    ease: 'power4.inOut',
    delay: 5
})

gsap.to('.block', {
    duration: 0.75, 
    width: '0px',
    ease: 'power4.inOut',
    delay: 6.5,
})

gsap.to('.block', {
    duration: 0.75, 
    height: '0px',
    ease: 'power4.inOut',
    delay: 7,
})

gsap.to('.block', {
    display: 'none',
    ease: 'power4.inOut',
    delay: 7.1,
})

gsap.to('.circles', {
    rotation: 0,
    delay: 7.5,
    duration: 1.5,
    ease: 'power4.inOut',
})

gsap.to('.loader', {
    duration: 2.5, // duration 추가
    scale: 0,
    ease: 'power4.inOut',
    delay: 8,
});

gsap.to('.container', {
    delay: 8, 
    scale: 1,
    ease: 'power4.inOut',
    duration: 2,
})