/*
Sofia Benitez

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let nacionalidadIngresada; 


	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);
	// while edad
	while(isNaN(edadIngresada) == true || edadIngresada<18 || edadIngresada>91)
	{
		edadIngresada=prompt("Dato incorrecto. La edad ingresada debe estar entre 18 y 90 años");
		edadIngresada=parseInt(edadIngresada);
	}


	sexoIngresado=prompt("Ingrese su sexo. (F = femenino / M = Masculino");
	// while sexo
	while(sexoIngresado != "F" && sexoIngresado != "M"){
		sexoIngresado = prompt("Dato incorrecto. Ingrese F o M.");

	}


	estadoCivilIngresado=prompt("Ingrese su estado civil. (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");
	// while estado civil 
	while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado !=3 && estadoCivilIngresado !=4)
	{
		estadoCivilIngresado=prompt("Dato incorrecto. Ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}

	sueldoIngresado=prompt("Ingrese su sueldo.");
	sueldoIngresado=parseInt(sueldoIngresado);
	//while sueldo
	while(isNaN(sueldoIngresado) == true || sueldoIngresado < 8000)
	{
		sueldoIngresado=prompt("Dato incorrecto. El sueldo debe ser mayor a 8000");
		sueldoIngresado=parseInt(sueldoIngresado);
	}

	legajoIngresado=prompt("Ingrese su numero de legajo.");
	legajoIngresado=parseInt(legajoIngresado);
	// while numero de legajo
	while(isNaN(legajoIngresado) == true || legajoIngresado<1000 || legajoIngresado> 9999)
	{
		legajoIngresado=prompt("Dato incorrecto. Su numero de legajo debe tener cuatro cifras");
		legajoIngresado=parseInt(legajoIngresado);
	}

	nacionalidadIngresada=prompt("Ingrese su nacionalidad. (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados).");
	// while nacionalidad
	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada !="N")
	{
		nacionalidadIngresada = prompt("Dato incorrecto. Ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	}


// muestro los datos validados en cajas de texto
	document.getElementById("txtIdEdad").value = edadIngresada;
	
	if(sexoIngresado== "F")
	{
		document.getElementById("txtIdSexo").value="Femenino";
	}
	else
	{
		document.getElementById("txtIdSexo").value ="Masculino";
	}

	switch(estadoCivilIngresado)
	{
		case "1":
			document.getElementById("txtIdEstadoCivil").value = "Soltero";
		break;
		case "2":
			document.getElementById("txtIdEstadoCivil").value = "Casado";
		break;
		case "3":
			document.getElementById("txtIdEstadoCivil").value = "Divorciado";
		break;
		default:
			document.getElementById("txtIdEstadoCivil").value = "Viudo";
		break;
	}
	 
	document.getElementById("txtIdSueldo").value = sueldoIngresado;

	document.getElementById("txtIdLegajo").value = legajoIngresado;

	switch(nacionalidadIngresada)
	{
		case "A":
			document.getElementById("txtIdNacionalidad").value = "Argentino";
		break;
		case "E":
			document.getElementById("txtIdNacionalidad").value = "Extranjero";
		break;
		default:
			document.getElementById("txtIdNacionalidad").value = "Nacionalizado";
		break;
	}


}// fin de la funcion

