let dia = prompt("Ingresa un dia: ")

while (dia != "salida"){
switch (dia){
    case "lunes":
        alert("Hoy trabajas.");
        break;
    case "martes":
        alert("Hoy trabajas.");
        break;
    case "miercoles":
        alert("Hoy trabajas.");
        break;
    case "jueves":
        alert("Hoy trabajas.");
        break;
    case "viernes":
        alert("Hoy trabajas.");
        break;
    case "sabado":
        alert("Hoy descansas.");
        break;
    case "domingo":
        alert("Hoy descansas.");
        break;
        default:
            alert("no es un dia valido");
            break;
    }
    dia = prompt("Ingresa un dia: ")
}