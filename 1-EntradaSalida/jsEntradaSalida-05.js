/*
Sofia Benitez
Ejercicio 5BIS. pedir primero el apellido y agregarlo al principio de la concatenacion
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
    let edad;
    let apellido;

    
	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
    apellido = prompt("Ingrese su apellido");
    
	alert(apellido + ": Usted se llama " + nombre + " y tiene " + edad + " años.");
	
}