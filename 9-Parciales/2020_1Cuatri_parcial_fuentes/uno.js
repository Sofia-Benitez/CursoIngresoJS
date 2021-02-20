/*
Sofia Benitez

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	let contadorTotal;
	let productoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let precioMasBajoAlcohol;
	let productoMasUnidades;
	let cantidadProductoMasUnidades;
	let contadorJabon;
	let acumuladorJabon;
	let banderaDelPrimero;
	let contadorAlcohol;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let acumuladorBarbijo;
	let fabricanteMasBarato;
	let cantidadUnidadesMasBarato;
	let contadorMasUnidades;
	let promedioPorCompra;
	

	//inicializo
	contadorTotal=0;
	contadorJabon=0;
	acumuladorJabon=0;
	banderaDelPrimero=0;
	contadorAlcohol=0;
	acumuladorAlcohol=0;
	contadorBarbijo=0;
	acumuladorBarbijo=0;
	contadorMasUnidades=0;

	while(contadorTotal<5)
	{
		contadorTotal=contadorTotal+1;

		//ingreso de productos y validacion
		productoIngresado=prompt("Ingrese el producto " + contadorTotal);
		while(isNaN(productoIngresado)== false || productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol")
		{
			productoIngresado=prompt("Error. Ingrese el producto (barbijo, jabón o alcohol)");
		}

		precioIngresado=prompt("Ingrese el precio del producto");
		precioIngresado=parseInt(precioIngresado);
		while(isNaN(precioIngresado)== true || precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("Error. Ingrese el precio del producto. El precio debe ser mayor a 100 y menor a 300");
			precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad de unidades");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada)== true || cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("Error. Ingrese la cantidad de unidades. La cantidad no puede ser 0, menor a 0 ni mayor a 1000");
			cantidadIngresada=parseInt(cantidadIngresada);
		}

		marcaIngresada=prompt("Ingrese la marca del producto ingresado");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Error. Ingrese la marca del producto ingresado");
		}

		fabricanteIngresado=prompt("Ingrese el fabricante del producto ingresado");
		while(isNaN(marcaIngresada)==false)
		{
			fabricanteIngresado=prompt("Error. Ingrese el fabricante del producto ingresado");
		}

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		// busco la cantidad de unidades por tipo y la cantidad de compras que se hicieron para desp el promedio(b)
		switch(productoIngresado){
			case "alcohol":
				contadorAlcohol= contadorAlcohol+1;
				acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;

				//busco el alcohol mas barato. cuando el contador es 1 O el precio ingresado es mas bajo
				if(contadorAlcohol==1 || precioIngresado < precioMasBajoAlcohol)//if(banderaDelPrimero==0)  no es necesaria la bandera porque ya tengo contador. 
				{
					precioMasBajoAlcohol=precioIngresado;
					cantidadUnidadesMasBarato=cantidadIngresada;
					fabricanteMasBarato=fabricanteIngresado;

					//banderaDelPrimero=1;
				}
			break;
			case "barbijo":
				contadorBarbijo=contadorBarbijo+1;
				acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
			break;
			case "jabón":
				contadorJabon=contadorJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadIngresada;//c) Cuántas unidades de jabones hay en total
			break;
		}


	}// fin del while

	//b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorJabon>acumuladorAlcohol && acumuladorJabon>acumuladorBarbijo)
	{	
		productoMasUnidades="jabón";
		cantidadProductoMasUnidades=acumuladorJabon; 
		contadorMasUnidades=contadorJabon;
	}
	else
	{
		if(acumuladorAlcohol>acumuladorBarbijo)
		{
			productoMasUnidades="alcohol";
			cantidadProductoMasUnidades=acumuladorAlcohol;
			contadorMasUnidades=contadorAlcohol;
		}
		else
		{
			productoMasUnidades="barbijo";
			cantidadProductoMasUnidades=acumuladorBarbijo;
			contadorMasUnidades=contadorBarbijo;
		}
	}

	promedioPorCompra=cantidadProductoMasUnidades/contadorMasUnidades;


	//muestro los resultados
	document.write("El alcohol mas barato cuesta $" + precioMasBajoAlcohol + " es del fabricante " + fabricanteMasBarato + " y hay " + cantidadUnidadesMasBarato + " unidades.");
	document.write("El tipo de producto con mas unidades es el " + productoMasUnidades + " y el promedio por compra es " + promedioPorCompra);
	document.write("Hay " + acumuladorJabon+ " unidades de jabon en total");


}
