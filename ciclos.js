/*
//DO WHILE
//Primero pedimos los datos
let nombre = prompt("Ingrese su nombre: ")

do{
    //Luego se ejecuta el codigo
    alert("Hola " + nombre)
    nombre = prompt("Ingrese otro nombre: ")
}while(nombre != "luis")//Por ultimo se pone la condicion
*/
/* WHILE
//Primero pedimos los datos que

let nombre = prompt("Ingrese su nombre: ")

//Se crea la condicion 
while(nombre != "luis"){//Mientras nombre sea diferente de luis
    alert("Hola " + nombre)//Se ejecutara una alerta saludando al nombre que se digito
    nombre = prompt("Ingrese otro nombre: ")
}
*/
/*Un programa que que muestre los numeros del uno al 10

let numero = 1

while (numero <=10){
    alert(numero)
    numero++//De esta manera siempre se incrementa de a uno
}
*/

/*Ciclo FOR
for(i=0; i<10;i++){
    alert(i);
}
*/
/*Tablas con for 
let numero = parseInt(prompt("Ingrese un numero: "))

for(let i=1; i<=10; i++){
    let resultado = numero * i
    alert(`${numero} X ${i} = ${resultado}`)
}
*/

/*Turnos con for

for(let i=0; i<30;i++){
    let nombre = prompt("Ingrese su nombre: ");

    alert(`${nombre}, su turno es el Nº ${i}`)
}
*/
