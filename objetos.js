//OBJETOS
//Una variable que permite agrupar distintas variables

//Variables sueltas
/*
let nombre = "Homero";
let edad = 39;
let calle = "AV. Siempreviva 742";
*/

//Variables agrupadas en un abjeto
/*
const persona1 = {nombre: "Homero",edad: 39, calle: "AV. Siempreviva 742"}

//Otra forma de organizar las variables dentro de un objeto

const persona2 = {  
    nombre: "Lisa",
    edad: 8,
    calle: "AV. Siempreviva 742"
}//Estructura mas organizada

//Mostrar

alert(persona1.nombre);
//Primero se llama al objeto y luego a la variable especifica

//asignar

persona1.nombre = "Marge";

alert(persona1.nombre);
//Primero se llama al objeto y luego a la variable especifica
//Segundo se le asigna un nuevo valor mediante el signo igual

//Asignar con info de usuario

persona1.nombre = prompt("Ingrese un nombre: ");
alert(persona1.nombre);
*/

//-----------OBJETOS CONSTRUCTORES-------------//
/*
function persona(nombre, edad, calle) {//Primero se crea la funcion y se le asignan los parametros
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
/*Luego se crea la estructura, en la cual mediante
un this se le asigna un dato a cada variable *//*
}

persona1 = new persona("Santiago",23, "Beruti 2467");
/*Por ultimo creamos el nuevo objeto mediante new y 
le asignamos los valores correspondientes */


//Mostramos en pantalla
//alert(persona1.nombre);

//Acciones
/*
function persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){alert(`Hola ${nombre}, tu edad es ${edad} y tu domicilio es ${calle}`)}//Accion
}

persona1 = new persona("Santiago", 23,"Beruti 2467");

persona1.hablar();
*/
/*
const persona = {
    nombre: "Santiago",
    edad: 23,
    calle: "AV. Siempreviva 742"
}
console.log("nombre" in persona)
//In nos muestra un valor especifico dentro de la funcion

for(const propiedad in persona) {
    console.log(persona[propiedad]);
}
//For in recorre todos los elementos de la funcion
*/
//------------CLASES------------//
/*
class Persona{
    constructor(nombre, edad, calle){//Se le pasan los parametros al constructor
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    }
    hablar(){
        alert(`Hola soy ${this.nombre}`);
    }
}

const persona2 = new Persona("Santiago", 23, "Beruti 2467");

persona2.hablar();//Muestra automaticamente por consola 
*/
//Promediador de notas

class Nota{
    constructor(nota1, nota2, nota3){
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        
    }
    promedio(){
        console.log(nota1)   
    }
}

const notaFinal = new Nota(8, 9, 10)

notaFinal.promedio();
 

