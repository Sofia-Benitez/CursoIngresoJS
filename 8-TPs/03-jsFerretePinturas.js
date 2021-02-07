/*3.	
Sofia Benitez

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let centigrados; 

    fahrenheit=parseFloat(fahrenheit);
    centigrados=parseFloat(centigrados);

    fahrenheit=document.getElementById("txtIdTemperatura").value;

    centigrados= (fahrenheit - 32) / 1.8;

    alert(fahrenheit + " Fahrenheit son " + centigrados + " centigrados.");


}   


function CentigradosFahrenheit () 
{
    let fahrenheit;
    let centigrados; 

    fahrenheit=parseFloat(fahrenheit);
    centigrados=parseFloat(centigrados);

    centigrados=document.getElementById("txtIdTemperatura").value;	

    fahrenheit= centigrados * 1.8 + 32;

    alert(centigrados + " centigrados son " + fahrenheit + " Fahrenheit.")
}
