    // intro gsap

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
    });

    // section1 gsap

    gsap.to('.border-right', {
        ease: 'power4.inOut',
        height: '100vh', 
        duration: 1.5,
        delay: 7.8,
    });

    gsap.to('.border-bottom', {
        ease: 'power4.inOut',
        width: '100vw', 
        duration: 1.5,
        delay: 7.8,
    });

    gsap.fromTo('.text1', {
        autoAlpha: 0,
        x: -50,
    },{
        autoAlpha: 1,
        x: 0,
        ease: 'power1.inOut',
        duration: .8,
        delay: 8,
    });

    gsap.fromTo('.text2', {
        autoAlpha: 0,
        x: -50,
    },{
        autoAlpha: 1,
        x: 0,
        ease: 'power1.inOut',
        duration: .8,
        delay: 8.8,
    });

    gsap.fromTo('.text3', {
        autoAlpha: 0,
        x: -50,
    },{
        autoAlpha: 1,
        x: 0,
        ease: 'power1.inOut',
        duration: .8,
        delay: 9.6,
    })

    gsap.fromTo('.nav-list li', {
        y: -40,
        autoAlpha: 0,
    },{
        y: 0,
        autoAlpha: 1,
        duration: .8,
        ease: 'power1.inOut',
        delay: (index)=>{
            return (index * .1)+10;
        }
    })

    