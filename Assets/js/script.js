//jquery - alerta de correo enviado
$(document).ready(function(){
    var botoncorreo = $("#enviar-correo");
    botoncorreo.on("click", function(){
        alert("El correo fue enviado correctamente");
    })
});

//jquery - Cambio de color en títulos
$("#titulo-ingredientes").on("dblclick", function(){
    $("#titulo-ingredientes").css({"color": "red"});
});

$("#titulo-preparacion").on("dblclick", function(){
    $("#titulo-preparacion").css({"color": "red"});
});

//carrusel
$('#myCarousel').carousel({
    interval: 5000
  });

$("#myCarousel .carousel-inner > .item").css("display","block");


//toggle
$('.tituloCard').on('click', function(){
    $('.textoCard').toggle('fast', function(){
        //toggle completado
    });
});




// Ejemplos en javascript
// document.getElementById("enviar-correo").addEventListener("click", function(){
//   alert("El correo fue enviado correctamente");
// });

// var titulo = document.getElementById("titulo-preparacion");
// var titulo2 = document.getElementById("titulo-ingredientes");

// document.getElementById("titulo-preparacion").addEventListener("dblclick", function(){
//     titulo.style.color = "red";
// });

// document.getElementById("titulo-ingredientes").addEventListener("dblclick", function(){
//     titulo2.style.color = "red";
// });








