/* Sofia Benitez

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	let hora;
	let mensaje;

	hora=document.getElementById("txtIdHora").value;
	hora=parseInt(hora);
	switch(hora){
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			mensaje="Es de noche";
		break;
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde";
		break;
		case 12:
		case 13:
			mensaje="Es el mediodia";
		break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana";
		break;
		default:
			mensaje="Es de madrugada"

	}
	
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN