/* 

Sofia Benitez

3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{

	let estacion;
	let destino;
	let porcentaje;
	let precioBase;
	let precioTotal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	if(estacion=="Invierno")
	{
		if(destino=="Bariloche")
		{
			porcentaje=20;
		}
		else
		{
			if(destino=="Mar del plata")
			{
				porcentaje=-20;
			}
			else
			{
				porcentaje=-10;
			}
		}
	}
	else
	{
		if(estacion=="Verano")
		{
			if(destino=="Bariloche")
			{
				porcentaje=-20;
			}
			else
			{
				if(destino=="Mar del plata")
				{
					porcentaje=20;
				}
				else
				{
					porcentaje=10;
				}
			}
		}
		else
		{
			if(destino="Cordoba")
			{
				porcentaje=0;
			}
			else
			{
				porcentaje=10;
			}
		}
	}

	precioBase= 15000;
	precioTotal= precioBase + (precioBase*porcentaje/100);

	alert(precioTotal);






}//FIN DE LA FUNCIÓN





/* 
Sofia Benitez
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento


function mostrar()
{
	let destinoIngresado;
	let estacionIngresada;
	let precioTotal;
	let precioBase;
	let porcentaje;


	destinoIngresado=document.getElementById("txtIdDestino").value;
	estacionIngresada=document.getElementById("txtIdEstacion").value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					porcentaje=0.20;
				break;
				case "Mar del plata":
					porcentaje=-0.20;
				break;
				default:
					porcentaje=-0.10;
			}
		break;
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
					porcentaje=-0.20;
				break;
				case "Mar del plata":
					porcentaje=0.20;
				break;
				default:
					porcentaje=0.10;
					
			}
		break;
		default:
			switch(destinoIngresado){
				case "Cordoba":
					porcentaje=0;
				break;
				default:
					porcentaje=0.10;

			}
	} 


	precioBase=15000;
	precioTotal= precioBase + (precioBase*porcentaje);
	alert(precioTotal);

}//FIN DE LA FUNCIÓN

*/