setTimeout(function(){
    let image = document.getElementById('unvisible');
    image.classList.add('visible')
},1000)

const doorFront = document.getElementById('doorFront');
const doorBack = document.getElementById('doorBack');
const doorArea = document.getElementById('doorArea');
const text = document.getElementById('text');
const textbox = document.getElementById('textbox');

const textboxContent = "잘하셨어요! 뭔가 이상한 점을 느끼셨나요? 용사님은 지금 단순히 '문'을 없애신게 아니예요. 문이라는 '개념' 그 자체를 없애신거죠! ▼"
const steal = document.getElementById('steal')

doorArea.style.pointerEvents = 'none'

steal.addEventListener('click',()=>{
    steal.style.display = 'none'
    doorArea.style.pointerEvents = 'auto'
     text.style.display = 'none'
});

doorArea.addEventListener ('click', ()=>{
    doorFront.style.opacity = 0
    doorBack.style.opacity = 1

    let i = 0; 
    textbox.textContent = '';
    textbox.style.display = 'block'
    function typeEffect(){
        textbox.textContent = textboxContent.slice(0,i);
        i++;
        if(i<=textboxContent.length){
            setTimeout(typeEffect,80)
        }
    }
    setTimeout(typeEffect,900)
});


