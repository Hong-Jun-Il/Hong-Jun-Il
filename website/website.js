function locoInitailze(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.section'),
        smooth: true
    });
}

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

function cursorShowImg(){
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

// locoInitailze();
// jumpingAnimation();
// cursorShowImg();