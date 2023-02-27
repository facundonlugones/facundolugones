
//definimos la funcion hola mundo
function holamundo() {

    console.log("hola mundo");
}

//invocamos la funcion holamundo

holamundo()
holamundo()
holamundo()
holamundo()
holamundo()
holamundo()


function sumar(a,b) {
    var resultado = a+b;

    return resultado;
    
}

suma = sumar(3,4); 
console.log(suma);

suma2 = sumar(5,5);
suma3 = sumar(4,4);
suma4 = sumar(5,4);


//ejemplo alternativo

function sumar(a,b) {
    var resultado = a+b;

    return (a+b);
    
}

suma = sumar(3,4); 
console.log(suma);