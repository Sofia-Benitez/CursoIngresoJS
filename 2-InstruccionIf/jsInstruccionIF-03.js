/* Sofia Benitez

Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
 */ 


function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);


	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	if(edad < 18)
	{
		alert("Es menor de edad");
	}
}//FIN DE LA FUNCIÓN