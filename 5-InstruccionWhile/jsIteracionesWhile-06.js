/* Sofia Benitez
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5){
		contador=contador+1;
		numeroIngresado=prompt("Ingrese el " + contador + " numero");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;

	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN
