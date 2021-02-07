/*
Sofia Benitez
ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego pedirle el porcentaje al usuario y luego
mostrar el importe con el descuento que ingreso el usuario
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let porcentaje;

	importe = document.getElementById("txtIdImporte").value;
	porcentaje = prompt("ingrese el porcentaje");

	importe = parseInt(importe);
	porcentaje = parseInt(porcentaje);

	descuento = (porcentaje * importe)/100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
