// intro gsap start

gsap.to('.vertical-line1', {
    delay: 1,
    display: 'block',
});

gsap.to('.vertical-line2', {
    delay: 1,
    display: 'block',
});

gsap.to('.horizontal-line1', {
    delay: 2.25,
    display: 'block',
});

gsap.to('.horizontal-line2', {
    delay: 2.25,
    display: 'block',
});

gsap.to('.vertical-line1', {
    delay: .5,
    ease: 'power4.inOut',
    duration: 2,
    height: '40vh',
});

gsap.to('.vertical-line2', {
    delay: .5,
    ease: 'power4.inOut',
    duration: 2,
    height: '40vh',
});

gsap.to('.horizontal-line1', {
    delay: 2,
    ease: 'power4.inOut',
    duration: 2,
    width: '45vw',
});

gsap.to('.horizontal-line2', {
    delay: 2,
    ease: 'power4.inOut',
    duration: 2,
    width: '45vw',
});

gsap.to('.block-top-text', {
    delay: 3,
    ease: 'power4.inOut',
    duration: 1.5,
    autoAlpha: 1,
});

gsap.to('.block-bottom-text', {
    delay: 3.5,
    ease: 'power4.inOut',
    duration: 1.5,
    autoAlpha: 1,
});

gsap.to('.center-line', {
    delay: 4,
    ease: 'power4.inOut',
    duration: 2,
    width: '40vw',
});

gsap.to('.center-line', {
    delay: 4.2,
    ease: 'power4.inOut',
    duration: 2,
    width: '100%',
});

gsap.to('.block-top', {
    top: '-50%',
    ease: 'power3.inOut',
    delay: 7,
    duration: 2,
});

gsap.to('.block-bottom', {
    bottom: '-50%',
    delay: 7,
    ease: 'power3.inOut',
    duration: 2,
});

gsap.to('.lines', {
    delay: 7.2,
    autoAlpha: 0,
    ease: 'power3.inOut',
    duration: 1,

    onComplete: () => {
        addBoxAnimation();
        addTextAnimation();
    }
});

function addBoxAnimation() {
    const revealSpan = document.querySelectorAll('#section1 .section-content .text-wrapper .h1-wrapper span');
    let delay = 0.5;

    revealSpan.forEach((span) => {
        span.style.animation = 'text_reveal_box 1s ease forwards';
        span.style.animationDelay = `${delay}s`;
        delay += 1;
    });
}

function addTextAnimation() {
    const revealText = document.querySelectorAll('#section1 .section-content .text-wrapper .h1-wrapper h1');
    let delay = 1;

    revealText.forEach((h1) => {
        h1.style.animation = 'text_reveal 1s ease forwards';
        h1.style.animationDelay = `${delay}s`;
        delay += 1;
    })

}

// intro gsap end

// section1 gsap start

// section1 gsap end

// section2 gsap

function aboutSecAni() {
    gsap.from('.letter', {
        duration: .4,
        opacity: 0,
        stagger: .1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.letter',
            start: 'top 95%',
        }
    })

    gsap.to('.line', {
        duration: 1,
        opacity: 1,
        width: '82%',
        delay: .3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.letter',
            start: 'top 75%',
        }
    })

    gsap.from('#section2 .text-wrapper', {
        duration: 1,
        opacity: 0,
        delay: .15,
        y: 50,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .text-wrapper',
            start: 'top 80%',
        }
    })
}

function projectSecAni(){
    gsap.from('.project-item', {
        duration: 3,
        delay: -.5,
        opacity: 0,
        y: 70,
        stagger: .15,
        ease: 'elastic.inOut',
        scrollTrigger: {
            trigger: '#section3 .projects',
            start: 'top 90%',

        }
    })
}

aboutSecAni();
projectSecAni();