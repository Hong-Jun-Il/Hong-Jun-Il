function cursor() {
    const test = document.querySelector('.test');
    const c = document.querySelector('.cursor');
    const box = document.querySelectorAll('.box');
    const div = document.querySelectorAll('.cursor > div');
    const img = document.querySelectorAll('.bottom img')
    test.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;

        c.style.transform = `translate(${x}px, ${y}px)`;

        box.forEach((e) => {
            e.addEventListener('mouseenter', (e) => {
                if (e.target.classList.contains('box1')) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[0].classList.add('visible');
                }
                else if (e.target.classList.contains('box2')) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[1].classList.add('visible');
                }
                else if (e.target.classList.contains('box3')) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[2].classList.add('visible');
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

cursor();

gsap.from(box, {
    y: -100,
    stagger: .2
})