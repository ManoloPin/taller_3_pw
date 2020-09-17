
var xv = 0;
var yv = 0;
var tam = 0;
function dibujar(tamaño,x, y) {
    document.getElementById("grafico").innerHTML = '<svg width="800" height="600">'
        // + '<circle cx="' + x + '" cy="' + y + '" r="' + radio + '" stroke="green" stroke-width="4" fill="yellow" />'
        + '<rect x="' + x + '" y="' + y + '" width="'+tamaño+'" height="'+tamaño+'"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
}

function anim(tamaño,x, y) {
    xv = x;
    yv = y;
    tam = tamaño;
    myVar = setInterval(show, 60);
}

function show() {
    xv++;  // controlan el movimiento 
    yv++;
    document.getElementById("grafico").innerHTML = '<svg width="800" height="600">'
    //  + '<circle cx="' + xv + '" cy="' + yv + '" r="' + rad +'" stroke="green" stroke-width="4" fill="blue" />'
        + '<rect x="' + xv + '" y="' + yv + '" width="'+tam+'" height="'+tam+'"" stroke="green" stroke-width="4" fill="yellow" />'
        + '</svg>';
    
}
