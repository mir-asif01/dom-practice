// console.log('counter js')

let count = 0;
const plusBtn = document.getElementById('plus-Btn').addEventListener('click',function(){
    // console.log('plus btn clicked')
    count = count + 1;
    document.getElementById('count').innerText = count;
})

const minusBtn = document.getElementById('minus-Btn').addEventListener('click',function(){
    count = count -1;
    document.getElementById('count').innerText = count;
})