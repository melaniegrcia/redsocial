$(document).ready(function() {


    alert("afkgakbjvkfddfadkgsfahdsfhgasfjdafj")

     // Codigo a ejecutarse una vez que se carga la pagina
     $("#post-button").click(function() {
         $("#contenedor-principal").append(
            '<div class="mt-5 col-1">'+
            '<div class="circulo">P</div>'+
            '</div>'+
                '<div class="post">'+
                    '<i class="fas fa-ellipsis-v"></i>'+
                    '<p class="publicacion1">'+ '<strong>'+ $("#serie-pelicula").val() +' </strong>' + 
                    '<br>' + $("#post-message").val() + '</p>'+
                    
                    '<img class="img-post" src="../img/ender.jpg" alt="comida" >'+
                    '<div class="iconos"></div>'+
                    '<i class="fas fa-heart"></i>'+
                    '<i class="fas fa-share-alt"></i>'+
                        
                '</div>'+

                '<div class="comentarios">'+
                    '<div class="circulo-coment">P</div>'+
                            'aca van los comentarios'+
                '</div>'+
        '</div>'
        //todo lo anterior, cada vez q presiono publicar, agrega una caja de post
        //a la columna de post, con los datos que hayamos agregado
         );
     });




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

    
        // condiciones para registrarse
        $("#boton-registro").click(function(){

            alert("click en registro");
            console.log("CLICK EN REGISTRO");  
    
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
    
        $("#boton-ingreso").click(function(){

            alert("click en ingreso")
    
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
                    location.href="home.html"; // location.href sirve para redireccionar a otra pagina ;D
                } else {
                   alert("Login incorrecto");
                }
            }

            
        });
    

        $("#btn-mostrar").click(function(){
            alert("click mostrar");
            $("#series-vistas").hide(); 
        });
    //$("#series-vistas").hide();
    //$(".brn.mostrar").on('click', mostrar);
    //function mostrar(){
     //   $("#series-vistas").hide();
   //     console.log(this);
   // }
});



