/*
Sofia Benitez
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let respuesta;
	let acumuladorSumaPositivos;
	let acumuladorMultiplicacionNegativos;
	let numeroIngresado;
	let banderaNegativos;

 // inicializo los dos acumuladores. el negativo tiene que inicar en 1 para equiparar. Agrego una bandera para saber si el usuario ingreso algun numero negativo
	acumuladorSumaPositivos=0;
	acumuladorMultiplicacionNegativos=1;

	banderaNegativos=0;
	respuesta='si';

	
	while(respuesta== 'si'){
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(numeroIngresado>0)
		{
			acumuladorSumaPositivos=acumuladorSumaPositivos+numeroIngresado;
		}
		else 
		{
			banderaNegativos=1;
			acumuladorMultiplicacionNegativos=acumuladorMultiplicacionNegativos*numeroIngresado;
		}

		
		respuesta=prompt("quiere ingresar otro numero?");
		


	}

	if(banderaNegativos==0)
		{
			acumuladorMultiplicacionNegativos=0;
		}
		
	txtIdSuma.value=acumuladorSumaPositivos;
	txtIdProducto.value=acumuladorMultiplicacionNegativos;

}//FIN DE LA FUNCIÓN