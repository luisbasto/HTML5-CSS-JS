//eje04_js.js
const operacion = function (x, y){
    return x + y;
}

var a = operacion(5,8);
console.log(a);

/*operacion = function (x,y){
    return x - y;
}*/

var b = operacion(5,8);
console.log(b);

function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}


function myFun(fun,arr){
    //console.log(typeof fun);
    //console.log(typeof arr);
    let result = [];
    //let i;
    for(let i=0; i < arr.length; i++){
        result[i] = fun(arr[i]);
    }
    return result;
}

const cubo = function (x){
    return x * x * x;
} 


let array = [2,4,6,8,10];
let valores = myFun(cubo, array);
console.log('Arreglo Valores:', valores);


var num1 = 23, num2= 24, name= 'Luis';

function multiplicar(x,y){
    return x*y;
}

console.log( multiplicar(3,4) );

function adicionar(){
    var num1 = 10, num2 = 20;

    function add(){
        return name + ' anotó ' + (num1 + num2);
    }
    return add();
}

console.log(adicionar());
console.log(add());







