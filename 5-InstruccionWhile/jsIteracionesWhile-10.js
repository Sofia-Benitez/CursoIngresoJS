/*
Sofia Benitez

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
muestro con console.log
*/
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let contadorPositivos;
	let contadorNegativos;
	let contadorPares;
	let contadorCeros;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;

	//inicializo contadores y acumuladores
	contadorPositivos=0;
	contadorNegativos=0;
	contadorPares=0;
	contadorCeros=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	promedioNegativos=0;
	promedioPositivos=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		//positivos negativos y ceros
		if(numeroIngresado<0){
			acumuladorNegativos=acumuladorNegativos+numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			if(numeroIngresado==0)
			{
				contadorCeros=contadorCeros+1;
			}
			else
			{
				acumuladorPositivos=acumuladorPositivos+numeroIngresado;
				contadorPositivos=contadorPositivos+1;
			}
		}

		// numeros pares
		if(numeroIngresado % 2 ==0)
		{
			contadorPares=contadorPares+1;
		}

		respuesta=prompt("Quiere ingresar otro numero?");
	}//fin del while

	// cuentas necesarias para mostrar despues del while 
	if(contadorPositivos>0)
	{
		promedioPositivos=acumuladorPositivos/contadorPositivos;
	}
	
	if(contadorNegativos>0)
	{
		promedioNegativos=acumuladorNegativos/contadorNegativos;
	}
	
	diferenciaPositivosNegativos=acumuladorPositivos-acumuladorNegativos;


	console.log("la suma de negativos es :"+ acumuladorNegativos);
	console.log("Suma de los positivos " + acumuladorPositivos);
	console.log("Cantidad de positivos " + contadorPositivos);
	console.log("Cantidad de negativos " + contadorNegativos);
	console.log("Cantidad de ceros " + contadorCeros);
	console.log("Cantidad de números pares " + contadorPares);
	console.log("Promedio de positivos es " + promedioPositivos);
	console.log("Promedios de negativos es " + promedioNegativos);
	console.log("Diferencia entre positivos y negativos es " + diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN