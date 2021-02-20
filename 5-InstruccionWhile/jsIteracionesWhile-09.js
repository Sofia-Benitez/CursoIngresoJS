/*
Sofia Benitez

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero=0;
	respuesta='si';


	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
//pongo una bandera porque el primer numero ingresado va a ser el max y el min. cambio la bandera y despues ya son los otros numeros
		if(banderaDelPrimero==0)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;

			banderaDelPrimero=1;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
				
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}
		

		respuesta=prompt("Quiere ingresar otro numero?");
	}



	txtIdMaximo.value="El numero maximo es " + numeroMaximo;
	txtIdMinimo.value="El numero minimo es " + numeroMinimo;
}//FIN DE LA FUNCIÓN