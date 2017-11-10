var texto = document.getElementById("txLineas");
var boton = document.getElementById("botonsito");
boton.addEventListener("click", dibujoPorClick)

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xInicial,yInicial,xfinal,yFinal){

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xInicial, yInicial);
lienzo.lineTo(xfinal, yFinal);
lienzo.stroke();
lienzo.closePath();

}

function dibujoPorClick(){
var lineas = parseInt(texto.value);
var l = 0;
var yi,xf;
var colorsito = "#FAA";
var espacio = ancho / lineas;

for (var l = 0; l < lineas; l++) {
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea(colorsito,0, yi, xf, 300);
}
for (var l = 0; l < lineas; l++) {
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea(colorsito,yi, 0, 300, xf);
}

dibujarLinea(colorsito, 1,1,1,299);
dibujarLinea(colorsito, 1,299,299,299);
}