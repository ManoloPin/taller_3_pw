
var xv = 0;
var yv = 0;
var tam = 0;
var a = 0;
var f = 0;
var amplitude = 100;
var frequency = 50;
var tim = 0;

function anim(tamanio, amplitude, frequency, tiempo) {

    //Validacion tamanio no vacio
    if (document.getElementById('tamanio').value.length == 0) {
        alert('El campo no puede ser vacio.');
        return false
    }
    //Validacion tamanio numerico
    if (isNaN(parseInt((document.getElementById('tamanio').value)))) {
        alert('El campo debe ser numerico.');
        return false
    }
    //Validacion tiempo no vacio
    /* Dejo comentareada la validacion hasta que arreglemos el problema con la variable para el tiempo
        if (document.getElementById('tiempo').value.length == 0) {
        alert('El campo tiempo no puede ser vacio.');
        return false
    }
    //Validacion tiempo numerico
    if (isNaN(parseInt((document.getElementById('tiempo').value)))) {
        alert('El campo tiempo debe ser numerico.');
        return false
    }*/
    xv = 70;
    yv = 200;
    yh = yv;
    tam = tamanio;
    a = amplitude;
    f = frequency;
    tim = tiempo;
    myVar = setInterval(show, tim);
}

function show() {
    xv++;
    yv = ((300 / 2) + amplitude * Math.cos(yh++ / frequency));
    document.getElementById("grafico").innerHTML = '<svg width="1800" height="350">'
        + '<rect x="' + xv + '" y="' + yv + '" width="' + tam + '" height="' + tam + '"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}
