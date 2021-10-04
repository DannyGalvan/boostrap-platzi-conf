var boton = document.getElementById("enviar");
boton.addEventListener("click",alerta);
var datos = document.getElementById("datos");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");


function alerta() 
{
    alert("su informacion ha sido enviada, " + nombre.value + " " + apellido.value + " " + "su conferencia sera de " + datos.value)    
}

$(function()
{
    $('[data-toggle="tooltip"]').tooltip()
}
)
