const intro = document.querySelector('.intro');
const main = document.querySelector('.main');

intro.addEventListener('click', begin);


// intro start

function begin(){
    gsap.to(intro, {opacity: 0, duration: 1, onComplete: () => {
        intro.style.display = 'none';
        main.style.display = 'flex';
        LoadLandingPage();
    }});
}

// landing page

function LoadLandingPage(){
    function startLoader(){
        let counterElement = document.querySelector('.counter');
        let currentValue = 0;
    
        function updateCounter(){
            if(currentValue === 100){
                return;
            }
            currentValue += Math.floor(Math.random()*10)+1;
            if(currentValue > 100){
                currentValue = 100;
            }
    
            counterElement.textContent = `${currentValue}%`;
    
            let delay = Math.floor(Math.random()*200)+250;
            setTimeout(updateCounter, delay);
        }
    
        updateCounter();
    }
    
    startLoader();
    
    gsap.from('.circles', {
        duration: 2, // duration 추가
        top: '-100%',
        ease: 'elastic.out',
        delay: 0.5,
    });
    
    gsap.to('.circle-inner', {
        duration: 1, // duration 추가
        width: '75px',
        height: '75px',
        ease: 'power4.inOut',
        delay: 2,
    });
    
    gsap.to('.circle-inner-rotator', {
        duration: 1, // duration 추가
        scale: 1,
        ease: 'power4.inOut',
        delay: 2.5,
    });
    
    gsap.to('.circles', {
        duration: 1.5, // duration 추가
        rotation: 360,
        ease: 'power4.inOut',
        delay: 3,
    });
    
    gsap.to('.block', {
        duration: 0.75, // duration 추가
        display: 'block',
        height: '200px',
        ease: 'power4.inOut',
        delay: 4,
    });
    
    gsap.to('.block', {
        duration: 0.75, // duration 추가
        width: '800px',
        ease: 'power4.inOut',
        delay: 4.5,
    });
    
    gsap.fromTo('.main-container', {
        duration: 2,
        left: '100%',
        scale: 0.5,
        ease: 'power4.inOut',
        delay: 4,
    },{
        duration: 2,
        left: '50%',
        scale: 0.5,
        transform: 'translateX(-50%)', // transform 대신에 x 사용
        ease: 'power4.inOut',
        delay: 4,
    });
    
    gsap.to('.block', {
        duration: 1.5, // duration 추가
        width: '0px',
        ease: 'power4.inOut',
        delay: 5, 
    });
    
    gsap.to('.block', {
        duration: 1, // duration 추가
        height: '0px',
        ease: 'power4.inOut',
        delay: 6,
    });
    
    gsap.to('.circles', {
        duration: 1.5, // duration 추가
        rotation: 0,
        ease: 'power4.inOut',
        delay: 6.5,
    });
    
    gsap.to('.loader', {
        duration: 2.5, // duration 추가
        scale: 0,
        ease: 'power4.inOut',
        delay: 7,
    });
    
    gsap.to('.main-container', {
        duration: 2, // duration 추가
        scale: 1,
        ease: 'power4.inOut',
        delay: 7.5,
    });
}


// MAIN SECTION
// const testElements = document.querySelectorAll('.test');

// gsap.from(testElements, {
//     autoAlpha: 0,
//     y: 50,
//     rotation: 100,
//     duration: 1,
//     ease: 'back.out(1.5)',
//     stagger: {
//         amount: .8,
//     },
//     scale: .5
// });


