/*
Sofia Benitez

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/


function mostrar()
{
  let respuesta;
  let tipoProductoIngresado;
  let cantidadDeBolsasIngresadas;
  let precioPorBolsaIngresada;
  let acumuladorPrecioBruto;
  let acumuladorBolsasTotal;
  let importeTotalConDescuento;
  let descuento;
  let precioBruto;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let tipoMasCantidadBolsasTotal;
  let tipoMasCaro;
  let precioMasCaro;
  let banderaMasCaro;

  respuesta="si";
  acumuladorPrecioBruto=0;
  acumuladorBolsasTotal=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;
  banderaMasCaro=0;


  while(respuesta=="si")
  {
    tipoProductoIngresado=prompt("Ingrese el tipo de producto");
    while(isNaN(tipoProductoIngresado)==false || tipoProductoIngresado != "arena" && tipoProductoIngresado != "cal" && tipoProductoIngresado != "cemento")
    {
      tipoProductoIngresado=prompt("Error. Ingrese el tipo de producto (cal, arena o cemento)");
    }

    cantidadDeBolsasIngresadas=prompt("Ingrese la cantidad de bolsas");
    cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas);
    while(isNaN(cantidadDeBolsasIngresadas)==true || cantidadDeBolsasIngresadas<1)
    {
      cantidadDeBolsasIngresadas=prompt("Error. Ingrese la cantidad de bolsas. No puede ser 0 o menos");
      cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas);
    }

    precioPorBolsaIngresada=prompt("Ingrese el precio por bolsa");
    precioPorBolsaIngresada=parseFloat(precioPorBolsaIngresada);
    while(isNaN(precioPorBolsaIngresada)==true || cantidadDeBolsasIngresadas<1)
    {
      precioPorBolsaIngresada=prompt("Error. Ingrese el precio por bolsa. No puede ser 0 o menos");
      precioPorBolsaIngresada=parseFloat(precioPorBolsaIngresada);
    }

    precioBruto=cantidadDeBolsasIngresadas*precioPorBolsaIngresada;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;
    acumuladorBolsasTotal=acumuladorBolsasTotal+cantidadDeBolsasIngresadas;

    switch(tipoProductoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadDeBolsasIngresadas;
      break;
      case "cal":
        acumuladorCal=acumuladorCal+cantidadDeBolsasIngresadas;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadDeBolsasIngresadas;
      break;
    }

    //tipo mas caro
    if(banderaMasCaro==0 || precioPorBolsaIngresada>precioMasCaro)
    {
      precioMasCaro=precioPorBolsaIngresada;
      tipoMasCaro=tipoProductoIngresado;
      banderaMasCaro=1;
    }
    

    respuesta=prompt("Quiere ingresar otro producto?");
  }//fin while

  //calculo importe con descuento

  if(acumuladorBolsasTotal>30)
  {
    descuento=25;
  }
  else
  {
    if(acumuladorBolsasTotal>10)
    {
      descuento=15;
    }
    else
    {
      descuento=0;
    }
  }

  importeTotalConDescuento= acumuladorPrecioBruto - acumuladorPrecioBruto*descuento/100;

  //busco el tipo con mas cantidad de bolsas en total
  if(acumuladorCemento>acumuladorCal && acumuladorCemento>acumuladorArena)
  {
    tipoMasCantidadBolsasTotal="Cemento";
  }
  else
  {
    if(acumuladorCal>acumuladorArena)
    {
      tipoMasCantidadBolsasTotal="Cal";
    }
    else
    {
      tipoMasCantidadBolsasTotal="Arena";
    }
  }

  //muestro los resultados

  //a) El importe total a pagar , bruto sin descuento y...
  console.log("El importe total a pagar es $"+acumuladorPrecioBruto);
  //b) el importe total a pagar con descuento(solo si corresponde)
  if(descuento>1)
  {
    console.log("El importe total a pagar con %"+descuento+ " de descuento es "+importeTotalConDescuento);
  }
 
  //d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  console.log("El tipo con mas cantidad de bolsas en total es " + tipoMasCantidadBolsasTotal);
  //f) El tipo mas caro
  console.log("El tipo mas caro es "+tipoMasCaro);
  
}
