
var xv = 0;
var yv = 0;
var tam = 0;
var a = 0;
var f = 0;
var amplitude = 100;
var frequency = 50;

function dibujar(tamaño, x, y) {
    document.getElementById("grafico").innerHTML = '<svg width="800" height="600">'
       
        + '<rect x="' + x + '" y="' + y + '" width="' + tamaño + '" height="' + tamaño + '"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}

function anim(tamaño, x, y,amplitude,frequency) {
    xv = x;
    yv = y;
    xh = x;
    yh = y;
    tam = tamaño;
    a = amplitude;
    f = frequency;
    myVar = setInterval(show, 60);
}

function show() {
    xv++;
    yv = ((200/2) + amplitude * Math.cos(yh/frequency));
    xh++;
    yh++;
    document.getElementById("grafico").innerHTML = '<svg width="800" height="600">'
        + '<rect x="' + xv + '" y="' + yv + '" width="' + tam + '" height="' + tam + '"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}
