const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const steal1 = document.getElementById('steal1')
const visible = document.getElementById('visible')
const choosebox = document.getElementById('choosebox')

setTimeout(function(){
    let image = document.getElementById('visible');
    image.classList.add('unvisible')
},5000)
 image2.style.pointerEvents = 'none';

steal1.addEventListener('click', ()=>{
    steal1.style.display = 'none'
        image2.style.pointerEvents = 'auto';

        image2.onmouseenter = () => {
            image2.style.transition = 'transform 0.3s ease'
            image2.style.transform = 'scale(2)'
            choosebox.style.display = 'flex'
            
        }
        image2.ontouchstart = () => {
            image2.style.transition = 'transform 0.3s ease'
            image2.style.transform = 'scale(2)'
            choosebox.style.display = 'flex'
        }


})

const gazeFill = document.getElementById('gaze-fill'); 
const choose1 = document.getElementById('choose1'); 
const choose2 = document.getElementById('choose2'); 
const choose3 = document.getElementById('choose3');
const gameOver = document.getElementById('gameover');
const win = document.getElementById('win');

let gaze = 100 

function updateGaze(){
    gazeFill.style.width = gaze + '%'
      if (gaze > 60) {
    gazeFill.style.backgroundColor = '#65c466'; 
  } else if (gaze > 30) {
    gazeFill.style.backgroundColor = '#f0b84a'; 
  } else {
    gazeFill.style.backgroundColor = '#e14c4c'; 
  }
   if (gaze<= 0) {
    gameOver.style.display = 'flex'
    choose1.style.display = 'none';
     choose2.style.display = 'none';
     choose3.style.display = 'none';
     image1.style.display = 'none';
      image2.style.display = 'none';
}}



updateGaze();

if (choose1) {
    choose1.addEventListener('click', () => {
                gaze = 50
        updateGaze()
        choose1.style.display = 'none';
        choose1.style.display = 'none';
     choose2.style.display = 'none';
     choose3.style.display = 'none';
     image1.style.display = 'none';
      image2.style.display = 'none';
      win.style.display = 'flex'
    })
};
if (choose2) {
    choose2.addEventListener('click', () => {
                gaze = 0
        updateGaze()
        choose2.style.display = 'none';
    })
};



