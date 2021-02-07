/* Sofia Benitez
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) */

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

/*  solucion con dos if
	if(edad> 12)
	{
		if (edad < 18)
		{
			alert("Es adolescente");	
		}
		
	}
*/

	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}else {
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN