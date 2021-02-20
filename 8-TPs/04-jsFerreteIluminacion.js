/*4. Con switch(marca) y if (cantidad)
Sofia Benitez 

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let precioBruto;
    let precioTotal;
    let marca;
    let impuesto;
    let porcentaje;
    

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marca=document.getElementById("Marca").value;
    
// precio bruto
    precioBruto= cantidadLamparas * 35;

// if (cantidad) switch (marca)

if(cantidadLamparas>5)
{
    porcentaje=50;
}
else
{
    if (cantidadLamparas==5)
    {
        switch(marca){
            case "ArgentinaLuz":
                porcentaje=40;
            break;
            default:
                porcentaje=30;
            break;
        }
    }
    else 
    {
        if(cantidadLamparas==4)
        {
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje=25;
                break;
                default:
                    porcentaje=20;
                break;
            }
        }
        else 
        {
            if(cantidadLamparas==3)
            {
                switch(marca){
                    case "ArgentinaLuz":
                        porcentaje=15;
                    break;
                    case "FelipeLamparas":
                        porcentaje=10;
                    break;
                    default:
                        porcentaje=5;
                    break;
                }
            }
            else 
            {
                porcentaje=0;
            }
        }
    }
}
//calculo el porcentaje

precioTotal= precioBruto - (precioBruto * porcentaje/100); 
// agrego el impuesto
if(precioTotal>120)
{
    impuesto = precioTotal*10/100;
    precioTotal=precioTotal+impuesto;
    alert("Usted pago " + impuesto + " de IIBB");
}
// muestro
document.getElementById("txtIdprecioDescuento").value = precioTotal;


// otras opciones para resolver el ejercicio. 
/* descuentos con SWITCH

    switch(cantidadLamparas){
        case 1:
        case 2:
            porcentaje=0;
        break;
        case 3:
            switch(marca){
                case "ArgentinaLuz":
                    porcentaje=15;
                break;
                case "FelipeLamparas":
                    porcentaje=10;
                break;
                default:
                    porcentaje=5;
                break;
            }
        break;
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje=25;
                break;
                default:
                    porcentaje=20;
                break;
            }
        break;
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                    porcentaje=40;
                break;
                default:
                    porcentaje=30;
                break;
            }
        break;
        default:
            porcentaje=50;
        break;
    }
*/


    
// descuentos 
/*    if(cantidadLamparas>5)
    {
        precioBruto=precioBruto-(precioBruto*50/100);
    }
    else
    {
    // burbuja de == 5    
        if(cantidadLamparas==5)
        {
            if(marca == "ArgentinaLuz")
            {
                precioBruto=precioBruto-(precioBruto*40/100);
            }
            else
            {
                precioBruto=precioBruto-(precioBruto*30/100);
            } // fin burbuja == 5
        }
        else
        // burbuja de == 4
        {
            if(cantidadLamparas==4)
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    precioBruto=precioBruto-(precioBruto*25/100);
                }
                else
                {
                    precioBruto=precioBruto-(precioBruto*20/100);
                }
            }
            else
            //burbuja de ==3
            {
                if(cantidadLamparas==3)
                {
                    if(marca=="ArgentinaLuz")
                    {
                        precioBruto=precioBruto-(precioBruto*15/100);
                    }
                    else
                    {
                        if(marca== "FelipeLamparas")
                        {
                            precioBruto=precioBruto-(precioBruto*10/100);
                        }
                        else
                        {
                            precioBruto=precioBruto-(precioBruto*5/100);
                        }
                    }
                }
            }
        }
        
    }

// swich de cantidad if de marca
switch(cantidadLamparas){
    case 1:
    case 2:
        porcentaje=0;
    break;
    case 3:
        if(marca=="ArgentinaLuz"){
            porcentaje=15;
        }
        else
        {
            if(marca=="FelipeLamparas"){
                porcentaje=10;
            }
            else
            {
                porcentaje=5;
            }
        }
    break;
    case 4:
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
            porcentaje=25;
        } 
        else {
            porcentaje=20;
        }
    break;
    case 5:
        if(marca=="ArgentinaLuz"){
            porcentaje=40;
        }
        else 
        {
            porcentaje=30;
        }
    break;
    default:
        porcentaje=50;
    break;
}
    
*/
	
}
