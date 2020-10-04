var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
  //los numeros son las keycodes de las teclas
};

document.addEventListener("keydown", dibujarTeclado);
//cuando oprima una tecla abajo ejecuta la funcion dibujarTeclado
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
//lo que hay dentro de los limites del dibujo
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}
/*
document.addEventListener("keyword",dibujarTeclado);
function dibujarTeclado(evento)
{
  console.log("Tecla oprimida");
  console.log(evento);

    esto lo que hace es que al yo oprimir una tecla me muestra como está contruida
    ella desde dentro, me muestra el keycode (numero que lo representa)
    me muestra como se llama la tecla y otras cosas
}
NOTA: OPRIMO CTRL + SHIFT + I para desplegar la consolo
*/
