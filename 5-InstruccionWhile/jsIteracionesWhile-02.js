/* 
Sofia Benitez

2. WHILE El usuario elige cuantos numeros ingresar
 y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos).
 sacar el promedio de esos numeros*/

function mostrar()
{
	let contador;
	let numeroIngresado;
	let contadorMayores10Menores20;
	let respuesta;
	let acumuladorMayores10Menores20;
	let promedio;
 
	contador=0;
	contadorMayores10Menores20=0;
	acumuladorMayores10Menores20=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>9 && numeroIngresado<21)
		{
			contadorMayores10Menores20=contadorMayores10Menores20+1;
			acumuladorMayores10Menores20=acumuladorMayores10Menores20+numeroIngresado;
		}


		respuesta=prompt("Quiere ingresar otro numero?");
	}

	promedio=acumuladorMayores10Menores20/contadorMayores10Menores20;
	alert("Los numeros mayores a 10 y menores a 20 son " + contadorMayores10Menores20 + " y el promedio de esos numeros es " + promedio);
	
	 
 
	
 
}

/*function mostrar()
{
	let contador;
	let numeroIngresado;
	let contadorMayores10Menores20;

	contador=0;
	contadorMayores10Menores20=0;
	

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>9 && numeroIngresado<21)
		{
			contadorMayores10Menores20=contadorMayores10Menores20+1;
		}
		

		contador=contador+1;

	}

alert("Los numeros ingresados mayores que 10 y menores a 20 son "+contadorMayores10Menores20);
}/*







/*
Sofia Benitez
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
function mostrar()
{
	let contador;

	contador=11;

	while(contador>1){
		contador=contador-1;
		console.log(contador);
	}

}//FIN DE LA FUNCIÓN*/