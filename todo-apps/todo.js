const inputText = document.querySelector('.inputText');
const plus = document.querySelector('.plus');
const list = document.querySelector('.list');
const allClearBtn = document.querySelector('.allClearBtn');

function addTodo(e){
    if(e.key == 'Enter' || e.type == 'click'){
        if(inputText.value == ''){
            alert('할 일을 입력하세요.');
        }
        else{
            const makeList = document.createElement('li');
            const delBtn = document.createElement('button');

            makeList.innerHTML = inputText.value;
            list.appendChild(makeList);
            makeList.appendChild(delBtn);

            delBtn.innerText = 'X'
            inputText.value = '';

            delBtn.addEventListener('click', deleteList);

            makeList.addEventListener('click', function(){
                makeList.classList.toggle('completed');
            })
        }
    }

}

function deleteList(e){
    const removeList = e.target.parentElement;

    removeList.remove();
}

allClearBtn.addEventListener('click', function(){
    if(confirm('전체 삭제하시겠습니까?') == true){
        list.replaceChildren();
    }
})