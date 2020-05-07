"use strict";
// //1
// let str= 'This., -/ is #! a ;: {} $ % ^ & * book 2009';
// function delSpam(str) {
//     let correct = str.replace(/[^a-zA-Z0-9\s]/g,'');
//     return correct.replace(/\s+/g,' ');
// }
//
// console.log(delSpam(str));

// //2
// function zeros(num,len) {
//     let str = "";
//     for (let i = 0;  i< len;i++){
//         str += "0";
//     }
//     str = str + num.toString();
//     return str;
// }
// console.log(zeros(7,2));

// //3
//
// let str = "hello world hello world";
//
// function camelCase(str) {
//     let array = str.split(" ");
//     for ( let i=1 ;i< array.length;i++){
//         let temp = [...array[i]];
//         temp[0] = temp[0].toUpperCase();
//         array[i] = temp.join().replace(/,/g,'');
//     }
//     return array.join().replace(/,/g,'');
// }
//
// console.log(camelCase(str));

// //4
//
// function fibo(n) {
//     if (n<=0) return ;
//     if (n<=1) return 1;
//     if (n<=2) return 1;
//     return (fibo(n-1) + fibo(n-2));
// }
//
// function createArray(n){
//     let arr = [0];
//     for (let i=1; i<n;i++){
//         arr[i] = fibo(i);
//     }
//     return arr;
// }
//
// console.log(createArray(25));

// //5
// const array = [12,-2,5,6,-1,788,0,-56,8];
// let arrResult = array.filter(elem => elem > 0);
// console.log(arrResult);


//6
class Artist{
    constructor(name, surname, email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

}
//дальше не понятно



//7
let counter = 0;
const divCounter = document.getElementById('counter'),
      button = document.getElementById('button');
button.addEventListener("click",function(){
   divCounter.textContent = ++counter;
});

//8
const p = document.getElementsByTagName('p'),
      articlesButton = document.getElementById('articlesButton');
articlesButton.addEventListener('click', function numberMe() {
    let count = 1;
    for(let elem of p){
        elem.textContent = count++ + ". " + elem.textContent;

    }
    articlesButton.removeEventListener('click', numberMe);
});

//9
const colorBlock = document.querySelectorAll('.colorBlock');
for (let elem of colorBlock){
    elem.addEventListener('click', blueColor);
}
function blueColor(event) {
    event.target.style.backgroundColor = "blue";
    event.target.removeEventListener('click', blueColor);
    event.target.addEventListener('click', redColor);
}
function redColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.removeEventListener('click', redColor);
    event.target.addEventListener('click', blueColor);
}
