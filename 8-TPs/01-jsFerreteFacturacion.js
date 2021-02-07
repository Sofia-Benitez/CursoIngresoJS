/*
Sofia Benitez 
TP 1 
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno= document.getElementById("txtIdPrecioUno").value;
    precioDos= document.getElementById("txtIdPrecioDos").value;
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma = precioUno + precioDos + precioTres; 

    alert("La suma de los tres productos es " + suma);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;

    precioUno= document.getElementById("txtIdPrecioUno").value;
    precioDos= document.getElementById("txtIdPrecioDos").value;
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    promedio = suma /3; 

    alert("El promedio de los tres productos es " + promedio);
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let total;

    precioUno= document.getElementById("txtIdPrecioUno").value;
    precioDos= document.getElementById("txtIdPrecioDos").value;
    precioTres= document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    iva = (21 * suma)/100;
    total= suma+iva;

    alert("El precio final de los tres productos mas IVA es " + total);
}