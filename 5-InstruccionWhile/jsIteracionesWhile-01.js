/*
pedir nombre y edad y mostrar el nombre de la persona mas vieja y la mas joven 
*/


function mostrar()
{
	let nombre;
	let edad;
	let respuesta;
	let personaMasVieja;
	let personaMasJoven;
	let numeroMaximo;
	let numeroMinimo;
	let banderaDelPrimero;
	

	banderaDelPrimero=0;
	
	respuesta="si";


	while(respuesta=="si")
	{
		
	nombre= prompt("Ingrese el nombre de la persona");
	//validar el nombre
	while(isNaN(nombre)== false)
	{
		nombre= prompt("Error. Ingrese el nombre de la persona");
	}

	edad= prompt("Ingrese la edad de la persona");
	edad=parseInt(edad);

	// validar la edad
	while(isNaN(edad)== true || edad < 0 || edad > 108)
	{

		edad= prompt("Error. Ingrese la edad de la persona");
		edad=parseInt(edad);
	}

	if(banderaDelPrimero==0)
	{
		numeroMinimo=edad;
		numeroMaximo=edad;
		personaMasJoven=nombre;
		personaMasVieja=nombre;

		banderaDelPrimero=1;
	}
	else
	{
		if(edad<numeroMinimo)
		{
			numeroMinimo=edad;
			personaMasJoven=nombre;
		}
			
		if(edad>numeroMaximo)
		{
			numeroMaximo=edad;
			personaMasVieja=nombre;
			
		}
		
	}

	respuesta=prompt("quiere ingresar otra persona?");
	}


	alert("La persona mas vieja es " + personaMasVieja + " cuya edad es " + numeroMaximo);
	alert("la persona mas joven es " + personaMasJoven + " cuya edad es " + numeroMinimo);
}//FIN DE LA FUNCIÓN




/* Sofia Benitez
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	let contador;

	contador=0
	while(contador<10){
		contador=contador+1;
		console.log(contador);
		
	}
}//FIN DE LA FUNCIÓN

*/