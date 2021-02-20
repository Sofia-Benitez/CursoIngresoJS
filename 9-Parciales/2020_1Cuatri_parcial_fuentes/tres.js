/*
Sofia Benitez
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo") y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaIngresada;
	let respuesta;
	let banderaDelPrimero;
	let personaMasTemperatura;
	let numeroMaximo;
	let contadorMayoresViudos;
	let contadorHombresViudosOSolteros;
	let contadorTerceraEdadMasTemperatura;
	let contadorHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let promedioEdadHombresSolteros;
	


	//inicalizo acumuladores, contadores, banderas
	respuesta="si";
	banderaDelPrimero=0;
	contadorMayoresViudos=0;
	contadorHombresViudosOSolteros=0;
	contadorTerceraEdadMasTemperatura=0;
	contadorHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;
	promedioEdadHombresSolteros=0;


	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese el nombre del pasajero");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Eror. Ingrese el nombre del pasajero");
		}

		edadIngresada=prompt("Ingrese la edad del pasajero: " + nombreIngresado);
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>110)
		{
			edadIngresada=prompt("Error. La edad no puede ser menor a 0 ni mayor a 110. Ingrese la edad del pasajero: " + nombreIngresado);
			edadIngresada=parseInt(edadIngresada);
		}
		
		sexoIngresado=prompt("Ingrese el sexo del pasajero: " + nombreIngresado);
		while(isNaN(sexoIngresado)==false || sexoIngresado != "f" && sexoIngresado !="m")
		{
			sexoIngresado=prompt("Error. Ingrese el sexo del pasajero "+ nombreIngresado + " (f o m)");
		}

		estadoCivilIngresado=prompt("Ingrese el estado civil del pasajero: "+nombreIngresado);
		while(isNaN(estadoCivilIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado=prompt("Error. Ingrese el estado civil del pasajero: "+nombreIngresado + " (soltero, casado o viudo)");
		}

		temperaturaIngresada=prompt("Ingrese la temperatura del pasajero: " + nombreIngresado);
		temperaturaIngresada=parseFloat(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<35.5 || temperaturaIngresada>45)
		{
			temperaturaIngresada=prompt("Error. Ingrese la temperatura del pasajero: " + nombreIngresado);
			temperaturaIngresada=parseFloat(temperaturaIngresada);
		}


		//a) El nombre de la persona con mas temperatura.
		if(banderaDelPrimero==0)
		{
			numeroMaximo=temperaturaIngresada;
			personaMasTemperatura=nombreIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(temperaturaIngresada>numeroMaximo)
			{
				numeroMaximo=temperaturaIngresada;
				personaMasTemperatura=nombreIngresado;
			}
		}

	//b) Cuantos mayores de edad estan viudos
	if(edadIngresada>18 && estadoCivilIngresado=="viudo")
	{
		contadorMayoresViudos=contadorMayoresViudos+1;
	}
	//c) La cantidad de hombres que hay solteros o viudos.
	if(sexoIngresado=="m" && (estadoCivilIngresado=="soltero" || estadoCivilIngresado=="viudo")) 
	{
		contadorHombresViudosOSolteros=contadorHombresViudosOSolteros+1;
	}

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	if(edadIngresada>60 && temperaturaIngresada>38)
	{
		contadorTerceraEdadMasTemperatura=contadorTerceraEdadMasTemperatura+1;
	}

	//e) El promedio de edad entre los hombres solteros.*/

	if(estadoCivilIngresado=="soltero" && sexoIngresado=="m")
	{
		contadorHombresSolteros=contadorHombresSolteros+1;
		acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
	}



		
	
	respuesta=prompt("Quiere ingresar otro pasajero?");
	}//fin while ingresos

	promedioEdadHombresSolteros = acumuladorEdadHombresSolteros/contadorHombresSolteros;

	//muestro los resultados
	console.log("La persona con mas temperatura es "+personaMasTemperatura);
	console.log("De los pasajeros ingresados "+contadorMayoresViudos+ " son mayores de edad y viudos.");
	console.log("De los pasajeros ingresados " + contadorHombresViudosOSolteros + " son hombres solteros o viudos.");
	console.log(contadorTerceraEdadMasTemperatura + " personas de la tercera edad tienen mas de 38 de temperatura.");
	console.log("El promedio de la edad de los hombres solteros es " + promedioEdadHombresSolteros);

}
