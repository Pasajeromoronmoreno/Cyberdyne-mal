$(function(){
    

    // -- Cargar menu
    $.ajax("../../header.html").done(function(result){
        $("#menu").html(result);
    });

    // -- Cargar footer
    $.ajax("../../footer.html").done(function(result){
        $("#footer").html(result);
    });

    // -- Cargar pagina 1
    $.ajax("/pages/page1.html").done(function(result){
        $("#content-principal").html(result);
    });

    // -- Carga cuando se hace click en algun item del menu
    $(document).on("click","#menu-principal li > a",function(e){
        e.preventDefault();
        var url = $(this).attr("href");

        // -- Cargo el contenido de la pagina en el div principal
        $.ajax(url).done(function(result){
            $("#content-principal").html(result);
        });
    });
});