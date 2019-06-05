$(document).ready(function(){

     // Muestra el formulario de login
     $("#ir-a-login").click(function(){
        $("#form-registro").hide();
        $("#form-ingreso").show();
    });

    // Muestra el formulario de registro
    $("#ir-a-registro").click(function(){
        $("#form-registro").show();
        $("#form-ingreso").hide();
    }); 

    $("#boton-registro").click(function(){

        var usuario = "pablo";
        var password = "comit2019";
        var inputPassword = $("#login-password").val();
        var inputUsuario = $("#login-user").val();

        
        if (inputUsuario === "" || 
            inputPassword === "") {
            alert("Por favor complete todos los campos")
        } else {
            if (inputUsuario === usuario && 
                inputPassword === password) {
                alert("Login correcto");
            } else {
               alert("Login incorrecto");
            }
        }
    });

    $("#botonlogin").click(function(){

        var usuario = "pablo";
        var password = "comit2019";
        var inputPassword = $("#login-password").val();
        var inputUsuario = $("#login-user").val();

        
        if (inputUsuario === "" || 
            inputPassword === "") {
            alert("Por favor complete todos los campos")
        } else {
            if (inputUsuario === usuario && 
                inputPassword === password) {
                alert("Login correcto");
            } else {
               alert("Login incorrecto");
            }
        }
    });
});
     // Codigo a ejecutarse una vez que se carga la pagina
     $("#post-button").click(function() {
         $("#contenedor-principal").append(
            '<div class="mt-5 col-1">'+
            '<div class="circulo">P</div>'+
            '</div>'+
            '<div class="mt-5 col-5">'+
                '<div class="muro">'+
                    '<i class="fas fa-ellipsis-v"></i>'+
                    '<p class="publicacion1">'+ '<strong>'+ $("#serie-pelicula").val() +' </strong>' + 
                    '<br>' + $("#post-message").val() + '</p>'+
                    
                    
                    '<div class="iconos"></div>'+
                    '<i class="fas fa-heart"></i>'+
                    '<i class="fas fa-share-alt"></i>'+
                        
                '</div>'+
        '</div>'
        //todo lo anterior, cada vez q presiono publicar, agrega una caja de post
        //a la columna de post, con los datos que hayamos agregado
         );

     });
     
    


    //  if ($("#password").val() === "commit2019")
