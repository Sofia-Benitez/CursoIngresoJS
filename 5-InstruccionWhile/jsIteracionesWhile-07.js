/*
Sofia Benitez
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta== 'si'){
		numeroIngresado=prompt("Ingrese el numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		
		respuesta=prompt("quiere ingresar otro numero?");
		

		

	}

	promedio=acumulador/contador;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;

}//FIN DE LA FUNCIÓN