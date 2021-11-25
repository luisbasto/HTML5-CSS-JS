//eje03_js.js
let miVar=30;
let contador = 'Hola mundo';

function alerta(){
    contador=10;
    miVar = 100;
    texto = 'Este es un texto con comillas simples.';
    texto2 = "Este es un texto con comillas dobles.";
    texto3 = 'Ess es un \'texto con comillas\' simples dentro del mismo.';
    console.log(miVar);
    console.log(contador);
    if (contador == '10.a'){
        console.log('el entero es igual al real');
    }else{
        console.log('el entero no es igual al real');
    }
    //alert(texto);
}

function hacerClic(){
    document.getElementsByTagName('p')[1].onclick = alerta;
    document.getElementById('uno').onclick = alerta;
    console.log(contador);
}

window.onload = hacerClic;