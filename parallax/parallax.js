const box1 = document.querySelector('#section1 .parallax__item__img');
const box2 = document.querySelector('#section2 .parallax__item__img');
const box3 = document.querySelector('#section3 .parallax__item__img');
const box4 = document.querySelector('#section4 .parallax__item__img');
const box5 = document.querySelector('#section5 .parallax__item__img');
const box6 = document.querySelector('#section6 .parallax__item__img');
const box7 = document.querySelector('#section7 .parallax__item__img');
const box8 = document.querySelector('#section8 .parallax__item__img');
const box9 = document.querySelector('#section9 .parallax__item__img');

gsap.to(box1, {
    x: 500,
    duration: 2,
    rotation: 360,
    borderRadius: 100,
});

gsap.to(box2, {
    x: 500,
    duration: 2,
    rotation: 360,
    borderRadius: 100,
    scrollTrigger: {
        trigger: box2
    }
})