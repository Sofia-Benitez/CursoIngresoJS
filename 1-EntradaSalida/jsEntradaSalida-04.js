/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para la variable nombre
	let nombre;
	let mensajeRespuesta;

	//asigno a nombre un prompt para que el usuario ingrese el nombre

	nombre = prompt("ingrese su nombre");

	//armo una variable con la concatenacion
	mensajeRespuesta = "Su nombre es: " + nombre;
	//le asigno al ID del recuadro el valor de la variable que quiero que muestre 
	
	document.getElementById("txtIdNombre").value = mensajeRespuesta;

}