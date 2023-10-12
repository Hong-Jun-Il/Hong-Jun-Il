const iconWrap = document.querySelector('.icon-wrap');
const icon = document.querySelector('.icon');

iconWrap.addEventListener('click', ()=>{
    icon.classList.toggle('animation');
})