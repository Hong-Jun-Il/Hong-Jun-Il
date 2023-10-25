// function locoInitailze() {
//     const scroller = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true
//       });
// }

function jumpingAnimation() {
    const jumps = document.querySelectorAll('.jumping-letters');

    jumps.forEach((jump) => {
        jump.addEventListener('mouseover', () => {
            jump.classList.add('jump');
        });
    });

    jumps.forEach((jump) => {
        jump.addEventListener('animationend', () => {
            jump.classList.remove('jump');
        });
    });
}

function cursorShowImg() {
    const sec3 = document.querySelector('#section3');
    const c = document.querySelector('.project-cursor');
    const projectItem = document.querySelectorAll('#section3 .col .project-item');
    const div = document.querySelectorAll('.project-cursor > div');
    const img = document.querySelectorAll('.bottom img')

    sec3.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;

        c.style.transform = `translate(${x}px, ${y}px)`;

        projectItem.forEach((e) => {
            e.addEventListener('mouseenter', (e) => {
                if (e.target === projectItem[0]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[0].classList.add('visible');
                }
                else if (e.target === projectItem[1]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[1].classList.add('visible');
                }
                else if (e.target === projectItem[2]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[2].classList.add('visible');
                }
                else if (e.target === projectItem[3]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[3].classList.add('visible');
                }
            })

            e.addEventListener('mouseleave', (e) => {
                img.forEach((e) => {
                    e.style.animation = '';
                })
                div.forEach((e) => {
                    e.classList.remove('visible');
                })
            })
        })
    });
}

function leftNavAnimation() {
    const h1Wrapper = document.querySelectorAll('.h1-wrapper');
    const addToggle = document.querySelectorAll('.hamburger, .lnm a');
    const leftNav = document.querySelector('.left-nav');
    const booklet = document.querySelector('.booklet');
    const lno = document.querySelector('.left-nav-overlay');
    const tl = gsap.timeline();

    addToggle.forEach((e)=>{
        e.addEventListener('click', ()=>{
            addToggle.forEach((toggled)=>{
                toggled.classList.toggle('hamburgerClicked')
            })
            if (e.classList.contains('hamburgerClicked')) {
            gsap.to(booklet, {
                left: '95%',
                duration: 1,
                ease: 'Circ.easeInOut',
            })
            tl.to(leftNav, {
                left: '-10%',
                duration: 1,
                ease: 'Circ.easeInOut',
            })
                .to(lno, {
                    left: 0,
                    duration: 1,    
                    ease: 'Circ.easeInOut',
                }, '-=.5')
                .to([booklet, ...h1Wrapper], {
                    opacity: 0,
                })
                .to(lno, {
                    width: 0,
                    left: '100%',
                    duration: .85,
                    ease: 'Circ.easeInOut',
                }, '-=.75')
                .to(booklet, {
                    opacity: 1,
                    delay: .1,
                    ease: 'power1.inOut',
                })
                .fromTo('.left-nav-menu .lnm a', {
                    display: 'block',
                }, {
                    ease: 'power3.out',
                    duration: 1,
                    stagger: .1,
                    y: 0,
                })
        }

        else {
            tl.to('.left-nav-menu .lnm a', {
                y: '100%',
                ease: 'power3.out',
                duration: 1,
                stagger: .1,
            })
            .to('.left-nav-menu .lnm a', {
                display: 'none',
            })
            .to(booklet, {
                opacity: 0,
            }, '-=.8')
            .to(lno, {
                width: '110%',
                left: '-10%',
                ease: 'Circ.easeInOut',
            })
            .to(lno, {
                left: '-110%',
                ease: 'Circ.easeInOut',
            })
            .to(leftNav, {
                ease: 'Circ.easeInOut',
                left: '-105%',
            })
            .to(booklet, {
                ease: 'Circ.easeInOut',
                left: '0%',
            })
            .to([...h1Wrapper], {
                opacity: 1,
            }, '-=.8')
            .to(booklet, {
                opacity: 1,
            })
        }
        })
    })
}
leftNavAnimation();
jumpingAnimation();
cursorShowImg();

// locoInitailze();

// if (leftNav.classList.contains('hamburgerClicked')) {
        //     gsap.to(booklet, {
        //         left: '95%',
        //         duration: 1,
        //         ease: 'Circ.easeInOut',
        //     })
        //     tl.to(leftNav, {
        //         left: '-10%',
        //         duration: 1,
        //         ease: 'Circ.easeInOut',
        //     })
        //         .to(lno, {
        //             left: 0,
        //             duration: 1,    
        //             ease: 'Circ.easeInOut',
        //         }, '-=.5')
        //         .to([booklet, ...h1Wrapper], {
        //             opacity: 0,
        //         })
        //         .to(lno, {
        //             width: 0,
        //             left: '100%',
        //             duration: .85,
        //             ease: 'Circ.easeInOut',
        //         }, '-=.75')
        //         .to(booklet, {
        //             opacity: 1,
        //             delay: .1,
        //             ease: 'power1.inOut',
        //         })
        //         .fromTo('.left-nav-menu .lnm a', {
        //             display: 'block',
        //         }, {
        //             ease: 'power3.out',
        //             duration: 1,
        //             stagger: .1,
        //             y: 0,
        //         })
        // }

        // else {
        //     tl.to('.left-nav-menu .lnm a', {
        //         y: '100%',
        //         ease: 'power3.out',
        //         duration: 1,
        //         stagger: .1,
        //     })
        //     .to('.left-nav-menu .lnm a', {
        //         display: 'none',
        //     })
        //     .to(booklet, {
        //         opacity: 0,
        //     }, '-=.8')
        //     .to(lno, {
        //         width: '110%',
        //         left: '-10%',
        //         ease: 'Circ.easeInOut',
        //     })
        //     .to(lno, {
        //         left: '-110%',
        //         ease: 'Circ.easeInOut',
        //     })
        //     .to(leftNav, {
        //         ease: 'Circ.easeInOut',
        //         left: '-105%',
        //     })
        //     .to(booklet, {
        //         ease: 'Circ.easeInOut',
        //         left: '0%',
        //     })
        //     .to([...h1Wrapper], {
        //         opacity: 1,
        //     }, '-=.8')
        //     .to(booklet, {
        //         opacity: 1,
        //     })
        // }