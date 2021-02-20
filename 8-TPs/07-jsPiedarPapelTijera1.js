/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/



function comenzar()
{
	var eleccionMaquina;
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;
    eleccionMaquina= parseInt(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    let mensaje;
    
    eleccionMaquina=eleccionMaquina;
	switch(eleccionMaquina)
    {
        case 1:
            mensaje="Empató";
        break;
        case 2:
            mensaje="Perdió";
        break;
        default:
            mensaje="Ganó";
        break;
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
function papel()
{
    let mensaje;

    switch(eleccionMaquina)
    {
        case 1:
            mensaje="Ganó";
        break;
        case 2:
            mensaje="Empató";
        break;
        default:
            mensaje="Perdió";
        break;
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
function tijera()
{
    let mensaje;

	switch(eleccionMaquina)
    {
        case 1:
            mensaje="Perdió";
        break;
        case 2:
            mensaje="Ganó";
        break;
        default:
            mensaje="Empató";
        break;
    }
alert(mensaje);

}//FIN DE LA FUNCIÓN