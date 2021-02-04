/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//defino las variables
	let sueldo;
	let aumento;
	let resultado;

// asigno el valor ingresado en la caja de textos a sueldo y parseo 

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

//saco el porcentaje
	aumento = (10 * sueldo)/100;
//sumo el sueldo al porcentaje
	resultado = sueldo + aumento;
// muestro el resultado en la caja de texto
	document.getElementById("txtIdResultado").value = resultado;
}
