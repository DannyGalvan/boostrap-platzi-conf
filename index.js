var boton = document.getElementById("enviar");
boton.addEventListener("click",alerta);
var datos = document.getElementById("datos");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var boton1 = document.getElementById("comprar");
boton1.addEventListener("click",alerta1);

function alerta() 
{
    alert("su informacion ha sido enviada, " + nombre.value + " " + apellido.value + " " + "su conferencia sera de " + datos.value)    
}

function alerta1()
{
   alertas.innerHTML += "Se te enviara un Correo de Confirmación";
}

$(function()
{
    $('[data-toggle="tooltip"]').tooltip()
}
)
