/*
let numero = prompt("Ingrese un numero: ");

if(numero > 10 ){
    alert("Tu numero es mayor a 10.");
}
else{
    alert("Tu numero es menor a 10.");
}
*/

//Operadores lógicos
/*
let usuario = "Usuario1";
let contraseña = "1234";

let nombreUsuario = prompt("Ingrese su nombre de ususario: ");
let constraseñaUsuario = prompt("Ingrese su contraseña: ");

if((nombreUsuario == usuario) && (constraseñaUsuario == contraseña)){
    alert("Bienvenido/a");
}
else{
    alert("Usuario o contraseña incorrectos");
}
*/
/*
Crear un algoritmo con un condicional
Algoritmo para pasar de grados farenheit a celcius
*/
/*
let gradosFarenheir = prompt("Digite los grados en Farenheit: ");

gradosFarenheir = parseInt(gradosFarenheir);

let formula = (gradosFarenheir - 32) * 5/9;

if(formula >= 100){
    alert(`La temperatura es ${formula} y puede hervir el agua.`);
}
else{
    alert(`La temperatura es ${formula} y es muy baja para hervir el agua.`);
}
*/
/*
let dato = prompt("Ingresa tu nombre: ");

while (dato != "santiago"){
    alert("hola " + dato);
}
*/
let nombre = prompt("Nombre: ")
do{
    alert("hola " + nombre)
    nombre = prompt("Ingrese otro nombre: ")
}while(dato != "Luis")
