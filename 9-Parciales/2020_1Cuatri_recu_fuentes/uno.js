/* 
Sofia Benitez
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/

function mostrar()
{
	
	let contadorProductos;
	let tipoProductoIngresado;
	let precioProductoIngresado;
	let cantidadProductosIngresados;
	let marcaIngresada;
	let fabricanteIngresado;
	let precioJabonMasCaro;
	let cantidadUnidadesJabonMasCaro;
	let fabricanteJabonMasCaro;
	let contadorAlcohol;
	let acumuladorAlcohol;
	let contadorJabon;
	let acumuladorJabon;
	let contadorBarbijo;
	let acumuladorBarbijo;
	let tipoProductoMasUnidades;
	let contadorTipoMasUnidades;
	let acumuladorTipoMasUnidades;
	let promedioPorCompraTipoMasUnidades;

	//inicializo banderas, contadores y acumuladores
	contadorProductos=0;
	contadorAlcohol=0;
	acumuladorAlcohol=0;
	contadorJabon=0;
	acumuladorJabon=0;
	contadorBarbijo=0;
	acumuladorBarbijo=0;
	contadorTipoMasUnidades=0;
	acumuladorTipoMasUnidades=0;

	while(contadorProductos<5)
	{
		//ingreso de datos y validacion
		tipoProductoIngresado=prompt("Ingrese el tipo de producto");
		while(isNaN(tipoProductoIngresado)==false || tipoProductoIngresado !="barbijo" && tipoProductoIngresado != "jabón" && tipoProductoIngresado != "alcohol")
		{
			tipoProductoIngresado=prompt("Error. Ingrese el tipo de producto (barbijo , jabón o alcohol)");
		}

		precioProductoIngresado=prompt("Ingrese el precio del producto");
		precioProductoIngresado=parseFloat(precioProductoIngresado);
		while(isNaN(precioProductoIngresado)==true || precioProductoIngresado<100 || precioProductoIngresado >300)
		{
			precioProductoIngresado=prompt("Error. Ingrese el precio del producto. El precio debe estar entre 100 y 300");
			precioProductoIngresado=parseFloat(precioProductoIngresado);
		}

		cantidadProductosIngresados=prompt("Ingrese la cantidad de productos");
		cantidadProductosIngresados=parseFloat(cantidadProductosIngresados);
		while(isNaN(cantidadProductosIngresados)==true || cantidadProductosIngresados<1 || cantidadProductosIngresados >1000)
		{
			cantidadProductosIngresados=prompt("Error. Ingrese la cantidad de productos. No puede ser 0, menor a 0 o mayor a 1000");
			cantidadProductosIngresados=parseFloat(cantidadProductosIngresados);
		}

		marcaIngresada=prompt("Ingrese la marca del producto");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error. Ingrese la marca del producto");
		}

		fabricanteIngresado=prompt("Ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Error. Ingrese el fabricante del producto");
		}

		// switch acumuladores y contadores de cada tipo 
		switch(tipoProductoIngresado)
		{
			case "jabón":
				contadorJabon=contadorJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadProductosIngresados;

				if(contadorJabon==1)
				{
					precioJabonMasCaro=precioProductoIngresado;
					cantidadUnidadesJabonMasCaro=cantidadProductosIngresados;
					fabricanteJabonMasCaro=fabricanteIngresado;
				}
				else
				{
					if(precioProductoIngresado>precioJabonMasCaro)
					{
						precioJabonMasCaro=precioProductoIngresado;
						cantidadUnidadesJabonMasCaro=cantidadProductosIngresados;
						fabricanteJabonMasCaro=fabricanteIngresado;
					}
				}
			break;
			case "barbijo":
				contadorBarbijo=contadorBarbijo+1;
				acumuladorBarbijo=acumuladorBarbijo+cantidadProductosIngresados;
			break;
			case "alcohol":
				contadorAlcohol=contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadProductosIngresados;
			break;
		}


		contadorProductos=contadorProductos+1;
	}

	//busco el tipo de producto con mas unidades en total
	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
	{
		tipoProductoMasUnidades="Alcohol";
		contadorTipoMasUnidades=contadorAlcohol;
		acumuladorTipoMasUnidades=acumuladorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorJabon)
		{
			tipoProductoMasUnidades="Barbijo";
			contadorTipoMasUnidades=contadorBarbijo;
			acumuladorTipoMasUnidades=acumuladorBarbijo;
		}
		else
		{
			tipoProductoMasUnidades="Jabon";
			contadorTipoMasUnidades=contadorJabon;
			acumuladorTipoMasUnidades=acumuladorJabon;
		}
	}
	// calculo el promedio por compra
	promedioPorCompraTipoMasUnidades=acumuladorTipoMasUnidades/contadorTipoMasUnidades;

	


	//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	console.log("El jabon mas caro es del fabricante "+fabricanteJabonMasCaro+ " y tiene " + cantidadUnidadesJabonMasCaro + " unidades.")
	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	console.log("El tipo de producto con mas unidades en total es "+ tipoProductoMasUnidades + " y el promedio por compra es "+promedioPorCompraTipoMasUnidades);
	//c) Cuántas unidades de Barbijos se compraron en total
	console.log("Se compraron en total " + acumuladorBarbijo + " unidades de barbijos.");

	
}
