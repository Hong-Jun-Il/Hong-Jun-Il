// const sec1 = document.querySelector('.section1');

// sec1.style.cursor = 'none';

// const cursor = document.createElement('div');
// cursor.classList.add('cursor');
// sec1.appendChild(cursor);

// const follow = document.createElement('div');
// follow.classList.add('follow');
// sec1.appendChild(follow);

// function move(obj, event){
//     obj.style = '';
//     obj.style.top = `${event.clientY}px`;
//     obj.style.left = `${event.clientX}px`;
// }

// if(cursor){
//     sec1.addEventListener('mousemove', (event) =>{
//         const e = event;
//         const t = event.target;
//         const f = follow;
//         const c = cursor;

//         if(t.tagName === 'A'){
//             c.style.backgroundColor = "transparent";

//             const rect = t.getBoundingClientRect();
//             f.style.top = rect.top + 'px';
//             f.style.left = rect.left + 'px';
//             f.style.width = rect.width + 'px';
//             f.style.height = rect.height + 'px';

//             f.classList.add('on-focus');
//         }
//         else{
//             move(f, e);
//             move(c, e);

//             f.classList.remove('on-focus');
//         }
//     })
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

function cursorShowImg(){
    const sec3 = document.querySelector('#section3');
    const c = document.querySelector('.project-cursor');
    const projectItem = document.querySelectorAll('.project-item');
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
                else if (e.target === projectItem[4]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[4].classList.add('visible');
                }
                else if (e.target === projectItem[5]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[5].classList.add('visible');
                }
                else if (e.target === projectItem[6]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[6].classList.add('visible');
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

jumpingAnimation();
// cursorShowImg();
