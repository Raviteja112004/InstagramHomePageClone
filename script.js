let i =0;
const arr =['images/screenshot1.png','images/screenshot2.png','images/screenshot3.png','images/screenshot4.png'];

setInterval(()=>{
document.querySelector('#front').src= arr[i];
i = (i+1)%arr.length;

},1000);

let p =document.querySelector('.par');
let btn = document.querySelector('.btn');
let change = ()=> p.innerHTML='Either Id or password is wrong';



