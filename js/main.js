$(document).ready(function() {
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
                    
                    '<img class="comida" src="../img/thanos.jpg" alt="comida" >'+
                    '<div class="iconos"></div>'+
                    '<i class="fas fa-heart"></i>'+
                    '<i class="fas fa-share-alt"></i>'+
                        
                '</div>'+
        '</div>'
        //todo lo anterior, cada vez q presiono publicar, agrega una caja de post
        //a la columna de post, con los datos que hayamos agregado
         );
     });
});