let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset')
let result = document.getElementById('result');

let counter = 0;

increase.addEventListener('click',function () {
   
    counter = counter++;
    console.log(counter);
    result.innerHTML = counter;
})