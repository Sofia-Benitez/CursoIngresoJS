/* Sofia Benitez
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
mostrar con un solo alert
*/


function mostrar()
{
	let nota;
	let mensaje;

	nota=Math.floor(Math.random() * 10) +1;

	if(nota > 8)
	{
		mensaje = "Excelente " + nota;
	}
	else
	{
		if(nota > 4)
		{
			mensaje = "Aprobo " + nota;
		}
		else
		{
			mensaje = "Vamos, la proxima se puede " + nota;
		}
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN