/* Sofia Benitez 
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	/* De esta forma hay una opcion que saca dos mensajes 
	
	if(edad > 12 && edad < 18)
	{
		alert("Es adolescente");
	
		if(edad < 13)
		{
			alert("Es nino");
		}
			
	}
	else 
		{
			alert("Es mayor de edad");
		}

}
*/ 
	/* opcion que funciona pero costosa

	if(edad<13)
	{
		alert("nino");
	}
	else
	{
	if(edad > 12 && edad < 18)
	{
		alert("adolescente");
	}
	else
	{
		alert("mayor");
	}
}
*/

	if(edad<13)
	{
		alert("nino");
	}
	else
	{ 
		if(edad>18)
		{
			alert("mayor");
		}
		else
		{
			alert("adolescente");
		}
	}
}


//FIN DE LA FUNCIÓN