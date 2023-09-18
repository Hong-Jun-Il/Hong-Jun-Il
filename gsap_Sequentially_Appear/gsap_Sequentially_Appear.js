gsap.utils.toArray('.sequence').forEach(item => {
    if(item.closest('.sec1') || item.closest('.header')){
        animate(item);
    }
    else if(item.closest('.sec2')){
        hide(item);
        ScrollTrigger.create({
            trigger: item,
            onEnter: ()=>{animate(item)},
            once: 'true',
            // once를 true로 하면 애니메이션이 한번만 나옴
        })
    }
})

function animate(item){
    let x = -100;
    let y = 0;
    let delay = item.dataset.delay;

    if(item.classList.contains('sequence_TTB')){
        x = 0;
        y = -100;
    }

    else if(item.classList.contains('sequence_BTT')){
        x = 0;
        y = 100;
    }

    else if(item.classList.contains('sequence_RTL')){
        x = 100;
        y = 0
    }

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y, },
        {autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.5, overwrite: 'auto', ease: 'expo'}
    )
}

function hide(item){
    gsap.set(item, {autoAlpha: 0});
}