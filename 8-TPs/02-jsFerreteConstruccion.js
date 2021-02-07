/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    let largo;
    let ancho;
    let terrenoRectangular;
    let total;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    terrenoRectangular = (ancho + largo)*2;
    total = terrenoRectangular * 3;

    alert("La cantidad de alambre a comprar es " + total + " metros")

}
function Circulo () 
{
	let radio;
    let perimetro;
    let total;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    perimetro = 2 * 3.14 * radio;
    total = perimetro * 3;
    alert("La cantidad de alambre a comprar es " + total + " metros");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cal;
    let cemento;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    cal = area * 3;
    cemento = area * 2;

    alert("Para hacer un contrapiso de " + area + " se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de centento.")


}