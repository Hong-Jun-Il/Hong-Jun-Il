const sec1 = document.querySelector('.section1');

sec1.style.cursor = 'none';

const cursor = document.createElement('div');
cursor.classList.add('cursor');
sec1.appendChild(cursor);

const follow = document.createElement('div');
follow.classList.add('follow');
sec1.appendChild(follow);

function move(obj, event){
    obj.style = '';
    obj.style.top = `${event.clientY}px`;
    obj.style.left = `${event.clientX}px`;
}

if(cursor){
    sec1.addEventListener('mousemove', (event) =>{
        const e = event;
        const t = event.target;
        const f = follow;
        const c = cursor;

        if(t.tagName === 'A'){
            c.style.backgroundColor = "transparent";
        
            const rect = t.getBoundingClientRect();
            f.style.top = rect.top + 'px';
            f.style.left = rect.left + 'px';
            f.style.width = rect.width + 'px';
            f.style.height = rect.height + 'px';
        
            f.classList.add('on-focus');
        }
        else{
            move(f, e);
            move(c, e);

            f.classList.remove('on-focus');
        }
    })
}