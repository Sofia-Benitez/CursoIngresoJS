/*
Sofia Benitez

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */

function mostrar()
{
  let tipoProductoIngresado;
  let cantidadBolsasIngresadas;
  let precioPorBolsaIngresada;
  let acumuladorCantidad;
  let precioBruto;
  let respuesta;
  let descuento;
  let acumuladorPrecioBruto;
  let precioTotalConDescuento;
  let acumuladorArena;
  let acumuladorCemento;
  let acumuladorCal;
  let tipoMasCantidad;
  let acumuladorPrecioArena;
  let acumuladorPrecioCemento;
  let acumuladorPrecioCal;
  let tipoMasCaro;
  let banderaMasCaro;
  let precioMasAlto;


  //inicializo bandera y acumulador
  acumuladorCantidad=0;
  acumuladorPrecioBruto=0;
  acumuladorArena=0;
  acumuladorCemento=0;
  acumuladorCal=0;
  acumuladorPrecioArena=0;
  acumuladorPrecioCal=0;
  acumuladorPrecioCemento=0;
  respuesta="si";
  banderaMasCaro=0;

  //ingreso de productos y validacion

  while(respuesta=="si")
  {
    tipoProductoIngresado=prompt("Ingrese el tipo de producto");
    while(isNaN(tipoProductoIngresado) == false || tipoProductoIngresado != "arena" && tipoProductoIngresado != "cal" && tipoProductoIngresado != "cemento")
    {
      tipoProductoIngresado=prompt("Error. Ingrese el tipo de producto (arena, cal o cemento)");
    }

    cantidadBolsasIngresadas=prompt("Ingrese la cantidad de bolsas");
    cantidadBolsasIngresadas=parseFloat(cantidadBolsasIngresadas);
    while(isNaN(cantidadBolsasIngresadas) == true || cantidadBolsasIngresadas<0 || cantidadBolsasIngresadas==0)
    {
      cantidadBolsasIngresadas=prompt("Error. Ingrese la cantidad de bolsas en numeros. La cantidad no puede ser menor a 0");
      cantidadBolsasIngresadas=parseFloat(cantidadBolsasIngresadas);
    }

    precioPorBolsaIngresada=prompt("Ingrese el precio por bolsa");
    precioPorBolsaIngresada=parseFloat(precioPorBolsaIngresada);
    while(isNaN(precioPorBolsaIngresada)==true || precioPorBolsaIngresada<0 || precioPorBolsaIngresada==0)
    {
      precioPorBolsaIngresada=prompt("Error. Ingrese el precio por bolsa. El precio no puede ser menor a 0");
      precioPorBolsaIngresada=parseFloat(precioPorBolsaIngresada);
    }

    //acumuladores totales
    acumuladorCantidad=acumuladorCantidad+cantidadBolsasIngresadas;
    precioBruto=precioPorBolsaIngresada*cantidadBolsasIngresadas;
    acumuladorPrecioBruto=acumuladorPrecioBruto + precioBruto;

    //acumulo la cantidad de bolsas por tipo de producto y el precio total por producto
    switch(tipoProductoIngresado)
    {
      case "arena":
        acumuladorArena=acumuladorArena+cantidadBolsasIngresadas;
        acumuladorPrecioArena=acumuladorPrecioArena+precioPorBolsaIngresada;
      break;
      case "cemento":
        acumuladorCemento=acumuladorCemento+cantidadBolsasIngresadas;
        acumuladorPrecioCemento=acumuladorPrecioCemento+precioPorBolsaIngresada;
      break;
      default:
        acumuladorCal=acumuladorCal+cantidadBolsasIngresadas;
        acumuladorPrecioCal+cantidadBolsasIngresadas;
      break;
    }

    //f) El tipo mas caro. con bandera O si el precio ingresado es mas grande que el que ya era el mas caro
    if(banderaMasCaro==0 || precioPorBolsaIngresada>precioMasAlto)
    {
      precioMasAlto=precioPorBolsaIngresada;
      tipoMasCaro=tipoProductoIngresado;
      banderaMasCaro=1;
    }
    
    
    respuesta=prompt("Quiere ingresar otro producto?");
  }// fin del while respuesta

  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  if(acumuladorCantidad>30)
  {
    descuento=25;
  }
  else
  {
    if(acumuladorCantidad>10)
    {
      descuento=15;
    }
    else
    {
      descuento=0;
    }
  }

  // calculo porcentaje 

  
  precioTotalConDescuento= acumuladorPrecioBruto - (acumuladorPrecioBruto*descuento/100);

  //d) Informar el tipo con mas cantidad de bolsas. CAMBIAR POR TIPO DE PRODUCTO CON N MAXIMO
  if(acumuladorCal>acumuladorCemento && acumuladorCal>acumuladorArena)
  {
    tipoMasCantidad="Cal";
  }
  else
  {
    if(acumuladorCemento>acumuladorArena)
    {
      tipoMasCantidad="Cemento";
    }
    else
    {
      tipoMasCantidad="Arena";
    }
  }

 




//muestro los resultados
  //a) El importe total a pagar , bruto sin descuento y...
  console.log("El importe total a pagar sin descuento es $" + acumuladorPrecioBruto);
  //b) el importe total a pagar con descuento(solo si corresponde)
  if(descuento>1)
  {
    console.log("El importe total a pagar con %" + descuento +  " de descuento es $" + precioTotalConDescuento);
  }
  

  //tipo con mas cantidad de bolsas
  console.log("El tipo con mas cantidad de bolsas es "+tipoMasCantidad);
  //tipo mas caro
  console.log("El tipo mas caro es " + tipoMasCaro);

}
