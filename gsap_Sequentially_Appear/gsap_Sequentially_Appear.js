gsap.utils.toArray('.sequence').forEach(item => animate(item));

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

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y, },
        {autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.5, overwrite: 'auto', ease: 'expo'}
    )
}
