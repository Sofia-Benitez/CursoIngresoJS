/*
Sofia Benitez
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	
	let mes;
	let mensaje;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			mensaje="Este mes tiene 28 dias";
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje="Este mes tiene 31 dias";
		break;
		default:
			mensaje="Este mes tiene 30 dias";

	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN