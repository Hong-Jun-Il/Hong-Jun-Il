const intro = document.querySelector('.intro');
const main = document.querySelector('.main');
const introBtn = document.querySelector('.intro-btn');
const typingSentence1 = document.querySelector('.intro-sentence1');
const typingSentence2 = document.querySelector('.intro-sentence2');
const typingSentence3 = document.querySelector('.intro-sentence3');

// 지울거
const dd = document.querySelector('.dd');

intro.addEventListener('click', begin);

// intro fade-out animation start

function begin(){
    gsap.to(intro, {opacity: 0, duration: 1, onComplete: () => {
        intro.style.display = 'none';
        main.style.display = 'flex';
        // 밑에거 지울거임
        gsap.utils.toArray('.GSAP_appear_effect').forEach(item=>{
            appear(item);
        })
    }});
}

// intro multiple typing animation start

typingSentence1.addEventListener('animationend', ()=>{
    typingSentence2.style.visibility = "visible";
    typingSentence2.style.animation = "typing 2s steps(22, end), blink .5s step-end infinite alternate";
})

typingSentence2.addEventListener('animationend', ()=>{
    typingSentence3.style.visibility = "visible";
    typingSentence3.style.animation = "typing .9s steps(11, end), blink .5s step-end infinite alternate";
})

// intro-click appear animation

typingSentence3.addEventListener('animationend', ()=>{
    const ic = document.querySelector('.intro-click');
    ic.style.visibility = "visible";
    appear(ic);
})

function appear(item){
    let x = -100;
    let y = 0;
    let delay = item.dataset.delay;
    let duration = item.dataset.duration

    if(item.classList.contains('GSAP_appear_effect_TTB')){
        x = 0;
        y = -20;
    }

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y, },
        {autoAlpha: 1, x: 0, y: 0, delay: delay, duration: duration, overwrite: 'auto', ease: 'expo'}
    )
}
