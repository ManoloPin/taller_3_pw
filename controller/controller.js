
var xv = 0;
var yv = 0;
var tam = 0;
var a = 0;
var f = 0;
var amplitude = 100;
var frequency = 50;

function dibujar(tamaño) {
    document.getElementById("grafico").innerHTML = '<svg width="1800" height="350">'

        + '<rect x="' + 70 + '" y="' + 200 + '" width="' + tamaño + '" height="' + tamaño + '"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}

function anim(tamaño, amplitude, frequency) {
    xv = 70;
    yv = 200;
    yh = yv;
    tam = tamaño;
    a = amplitude;
    f = frequency;
    myVar = setInterval(show, 10);
}

function show() {
    xv++;
    yv = ((200 / 2) + amplitude * Math.cos(yh++ / frequency));

    document.getElementById("grafico").innerHTML = '<svg width="1800" height="350">'
        + '<rect x="' + xv + '" y="' + yv + '" width="' + tam + '" height="' + tam + '"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}
