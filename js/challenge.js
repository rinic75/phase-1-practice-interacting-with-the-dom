let count = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const submitForm = document.querySelector('#comment-form');
const allButton = document.querySelectorAll('button');

let i =0;
let liked = 1;
let intervalId;
let likedHeart = [];

minus.addEventListener('click', ()=> {
    if(i>0) {
        i--;
        count.textContent = i;
    }
})

plus.addEventListener('click', ()=> {
    i++;
    count.textContent = i;
})

heart.addEventListener('click', ()=> {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const ul =document.querySelector('.likes')
    li.setAttribute('data-num', `${i}`)
    li.textContent = `${i} has been liked `
    if(likedHeart[i]) {
        likedHeart[i] += 1
    } else {
        likedHeart[i] = 1
    }
    span.textContent = `${likedHeart[i]} times`
    li.append(span)
    ul.appendChild(li);
})

function timer () {
    intervalId = setInterval(()=> {
        i++,
        count.textContent = i;
    }, 1000);
}

timer();

pause.addEventListener('click', ()=> {
 
    if(pause.innerHTML === ' pause ') {
        clearInterval(intervalId);
        allButton.forEach((e)=> {
            if(e.id === 'pause') {
        
            } else {
            e.setAttribute("disabled", true)
            }   
        })
        pause.textContent = ' resume ';
    } else if (pause.innerHTML === ' resume ') {
        
        timer();
        allButton.forEach((e)=> {
            if(e.id === 'pause') {
        
            } else {
            e.removeAttribute("disabled")
            }  
        pause.textContent = ' pause '; 
        })
    }
 })

 submitForm.addEventListener('submit', e => {
     e.preventDefault();
     const h3 = document.querySelector('#list')
     const p = document.createElement('p')
     p.textContent = e.target['comment-input'].value
     h3.appendChild(p)
    
 })