const list = document.querySelector('[data-list]');
const button = document.querySelectorAll('[data-change]');


function changeDisplay(label){
    if(label=='show'){
        list.style.display = 'block';
    }else if(label=='hide'){
        list.style.display = 'none';
    }
}

button.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        changeDisplay(event.target.dataset.change);
    });
});