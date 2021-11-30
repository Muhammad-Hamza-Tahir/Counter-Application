let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset')
let result = document.getElementById('result');

let counter = 0;

increase.addEventListener('click',function () {
   
   // console.log(counter);
    result.innerHTML = counter++;
    

})

decrease.addEventListener('click',function () {
     result.innerText = counter--;
})

reset.addEventListener('click',function () {
    counter = 0;
    result.innerText = 0;
})