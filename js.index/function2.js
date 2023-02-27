
/**console.log("HolaMundo");

let numero1 = 3;
let numero2 = 4;

let resultado = numero1+numero2;

console.log("la suma de numero1 y numero2 es:"+ resultado);

document.getElementById("boton").onclick = function click () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "probando primer evento js";
}*/

document.getElementById("boton").addEventListener("click", function press() {
    console.log("hola mundo desde eventlistener");

    document.getElementById("demo").innerHTML = "probando nuestro evento"
})


document.getElementById("boton_color").addEventListener("click", function color() {
    document.body.style.backgroundColor = "blue";
})


document.getElementById("boton_default").addEventListener("click", function _default() {
    document.body.style.backgroundColor = "antiquewhite";

})

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "yellow";
}