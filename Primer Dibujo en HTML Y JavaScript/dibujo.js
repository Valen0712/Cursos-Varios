var texto = document.getElementById("texto_lineas");
//obtener el elemento dentro de texto por su id...
var boton = document.getElementById("botoncito");
//obtener el elemento boton por su id...
boton.addEventListener("click", dibujoPorClick );
//cuando le de click al boton me ejecuta la funcion dibujoPorClick

var d = document.getElementById("dibujito");
//perimetro o limites del dibujo
var ancho = d.width;
var lienzo = d.getContext("2d");
//lo que hay dentro de "dibujito"

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  //me permite dibujar
  lienzo.strokeStyle = color;
  //color de la linea
  lienzo.moveTo(xinicial, yinicial);
  //Punto de inicio de la linea
  lienzo.lineTo(xfinal, yfinal);
  //Trazar linea hasta...
  lienzo.stroke();
  //dibuja la linea
  lienzo.closePath();
  //levantar el lapiz :v
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  //pedirle al usuario un numero de lineas
  var l = 0;
  var yi, xf;
  var colorcito = "#0091ff";
  //color de las lineas
  var espacio = ancho / lineas;
  //distancia entre lineas

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    //como va acambiando Y inicial
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    //xinicial y Yfinal no cambian
    console.log("Linea " + l);
    //esto solo lo muestra la consola
  }

  dibujarLinea(colorcito, 1,1,1,299);
  //dibuja el eje y
  dibujarLinea(colorcito, 1,299,299,299);
  //dibuja el eje x
}
