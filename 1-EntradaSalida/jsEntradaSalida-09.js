/*
Sofia Benitez
ejercicio 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego pedirle al usuario el porcentaje 
mostrar el importe con un aumento del porcentaje ingresado por el usuario
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//defino las variables
	let sueldo;
	let aumento;
	let porcentaje;
	let resultado;

// asigno el valor ingresado en la caja de textos a sueldo y parseo 

	sueldo = document.getElementById("txtIdSueldo").value;

// le pido al usuario el porcentaje 
	porcentaje = prompt("Ingrese el porcentaje")
// parseo

    sueldo = parseInt(sueldo);
	porcentaje= parseInt(porcentaje);
	
//saco el porcentaje
	aumento = (porcentaje * sueldo)/100;

//sumo el sueldo al porcentaje
	resultado = sueldo + aumento;

// muestro el resultado en la caja de texto
	document.getElementById("txtIdResultado").value = resultado;
}
