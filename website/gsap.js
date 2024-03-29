// intro gsap

function introAnimation() {
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
        delay: 6,
        duration: 2,
    });

    gsap.to('.block-bottom', {
        bottom: '-50%',
        delay: 6,
        ease: 'power3.inOut',
        duration: 2,
    });

    gsap.to('.lines', {
        delay: 6.8,
        autoAlpha: 0,
        ease: 'power3.inOut',
        duration: 1,

        onComplete: () => {
            addBoxAnimation();
            addTextAnimation();
        }
    });
}

// section1 gsap

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

// section2 gsap

function aboutSecAni() {
    gsap.from('#section2 .letter', {
        duration: .4,
        opacity: 0,
        stagger: .1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .letter',
            start: 'top 95%',
        }
    })

    gsap.to('#section2 .line', {
        duration: 1,
        opacity: 1,
        width: '82%',
        delay: .3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .letter',
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

// section3 gsap 

function projectSecAni() {
    gsap.from('#section3 .letter', {
        duration: .4,
        opacity: 0,
        stagger: .1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section3 .letter',
            start: 'top 95%',
        }
    })

    gsap.to('#section3 .line', {
        duration: 1,
        opacity: 1,
        width: '82%',
        delay: .3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section3 .letter',
            start: 'top 75%',
        }
    })
    document.querySelectorAll('.project-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            duration: .8,
            scale: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
            },
            onComplete: () =>{
                selectFunc();
            }
        })
    });
}

function selectFunc(){
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach((e) => {
        e.addEventListener('mouseenter', (e)=>{
            e.target.style.transform = 'scale(1.03)';
            e.target.style.transition = '.4s';
            e.target.style.filter = 'grayscale(.8)';
            document.querySelectorAll('section').forEach((section) => {
                section.style.backgroundColor = `#${e.target.dataset.color}`;
            });
        })
        e.addEventListener('mouseleave', (e)=>{
            e.target.style.transform = 'scale(1.00)';
            e.target.style.transition = '.4s';
            e.target.style.filter = 'grayscale(0)';
            document.querySelectorAll('section').forEach((section) => {
                section.style.background = '#1c1a1a';
            });
        })

    });
}

introAnimation();
aboutSecAni();
projectSecAni();

addBoxAnimation();
addTextAnimation();