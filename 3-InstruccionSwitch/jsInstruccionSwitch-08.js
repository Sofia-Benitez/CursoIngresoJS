/* Sofia Benitez

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/


function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			mensaje="Calor";
		break;
		default:
			mensaje="Frio";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN