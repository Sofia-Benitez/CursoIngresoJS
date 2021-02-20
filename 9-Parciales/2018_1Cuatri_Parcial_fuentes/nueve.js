/*
Sofia Benitez

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 ) */


function mostrar()
{

    let marcaIngresada;
    let pesoIngresado;
    let temperaturaIngresada;
    let banderaDelPrimero;
    let contadortemperaturasPares;
    let contadorProductosMenosCero;
    let promedioPeso;
    let pesoMaximo;
    let pesoMinimo;
    let marcaMasPesada;
    let respuesta;
    let contadorPeso;
    let acumuladorPeso;


    // inicializo las variables, bandera y contador

    respuesta= "si";
    banderaDelPrimero= 0;
    contadorPeso=0;
    contadorProductosMenosCero=0;
    acumuladorPeso=0;
    contadortemperaturasPares=0;

    while(respuesta=="si")
    {
        marcaIngresada=prompt("Ingrese la marca del producto");
        while(isNaN(marcaIngresada)== false)
        {
            marcaIngresada=prompt("Error. Ingrese la marca del producto");
        }

        pesoIngresado=prompt("Ingrese el peso del producto");
        pesoIngresado=parseFloat(pesoIngresado);
        while(isNaN(pesoIngresado)== true || pesoIngresado<1 || pesoIngresado>100)
        {
            pesoIngresado=prompt("Error. Ingrese el peso del producto. El producto no puede pesar menos de 1kg ni mas de 100kg");
            pesoIngresado=parseFloat(pesoIngresado);
        }

        temperaturaIngresada=prompt("Ingrese la temperatura del producto");
        temperaturaIngresada=parseFloat(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)== true || temperaturaIngresada<-30 || temperaturaIngresada>30)
        {
            temperaturaIngresada=prompt("Error. Ingrese la temperatura del producto. La temperatura debe estar entre -30 y 30 grados");
            temperaturaIngresada=parseFloat(temperaturaIngresada);
        }
        

        //a) La cantidad de temperaturas pares.
        if(temperaturaIngresada %2==0)
        {
            contadortemperaturasPares=contadortemperaturasPares+1;
        }
        //c) La cantidad de productos que se conservan a menos de 0 grados.

        if(temperaturaIngresada<0)
        {
            contadorProductosMenosCero=contadorProductosMenosCero+1;
        }
       
       // peso
       contadorPeso=contadorPeso+1;
       acumuladorPeso=acumuladorPeso+pesoIngresado;

        
       //f) El peso máximo y el mínimo.

       if(banderaDelPrimero==0)
       {
           pesoMaximo=pesoIngresado;
           pesoMinimo=pesoIngresado;
           marcaMasPesada=marcaIngresada;

           banderaDelPrimero=1;
       }
       else
       {
           if(pesoIngresado<pesoMinimo)
           {
               pesoMinimo=pesoIngresado;
           }
           if(pesoIngresado>pesoMaximo)
           {
               pesoMaximo=pesoIngresado;
               marcaMasPesada=marcaIngresada; //b) La marca del producto más pesado
           }
       }



        respuesta=prompt("Quiere ingresar otro producto?");
    }//fin del while

    
    //d) El promedio del peso de todos los productos.
    if(contadorPeso>0)
    {
        promedioPeso=acumuladorPeso/contadorPeso;
    }
   

    console.log("La cantidad de temperaturas pares es " + contadortemperaturasPares);
    console.log("La marca del producto mas pesado es " + marcaMasPesada);
    console.log("La cantidad de productos que se almacenan a temperaturas -0 grados es " + contadorProductosMenosCero);
    console.log("El promedio del peso de los productos es " + promedioPeso);
    console.log("El producto mas pesado pesa " + pesoMaximo);
    console.log("El producto menos pesado pesa " + pesoMinimo);




}// fin de la funcion
