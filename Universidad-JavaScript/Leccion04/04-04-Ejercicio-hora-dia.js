let horaDia = 9;
let mensaje;

if( horaDia >= 6 && horaDia <= 11  ) {
    mensaje = "Buenos días";
}

else if ( horaDia >= 12 && horaDia <= 18  ) {
    mensaje = "Buenas tardes";
}

else if ( horaDia >= 19 && horaDia <= 24  ) {
    mensaje = "Buenas noches";
}

else if ( horaDia >= 0 && horaDia < 6 ) {
    mensaje = "Durmiendo";
}

else {
    mensaje = "valor incorrecto";
}

console.log(mensaje);