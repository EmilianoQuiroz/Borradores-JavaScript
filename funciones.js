//Bloque de codigo que se puede reutilizar
//Primero se declara 
//Luego se ejecuta
//Calculadora con un switch dentro de una funcion
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+": 
            return primerNumero + segundoNumero;
            break;
        case "-": 
            return primerNumero - segundoNumero;
            break;
        case "*": 
            return primerNumero * segundoNumero;
            break;
        case "/": 
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
        }
} 
alert(calculadora(10,5,"+"))
alert(calculadora(10,5,"-"))
alert(calculadora(10,5,"*"))
alert(calculadora(10,5,"/"))