/* Sofia Benitez
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/


function mostrar()
{
	let random;
	random=Math.floor(Math.random() * 10) + 1;

	alert("Este es un numero random = " + random);

}//FIN DE LA FUNCIÓN