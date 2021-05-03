$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
     });
    $("#toggle").click(function(){
        $("p").toggle();
    });
   
    $("#sdown").click(function(){
        $("#down").slideDown();
    });
    $("sdown").click(function(){
        $("#down").slideUp();
    });
    $("#sdown").click(function(){
        $("#down").slideToggle();
    });
    $("#fdown").click(function(){
        $("#fade").fadeIn();
    });
    $("#fdown").click(function(){
        $("#fade").fadeOut();
    });
    $("button").click(function(){
        $("p").addClass("blue");
    });
    $("p").before("<b>hello there</b>");
    $("p").after("<b>after example</b>");
    $("p").append("<b>append example</b>");
    
    $("#get").click(function(){
        $("#get").text("#Changed!");
    });

    $("#changeA").click(function(){
        $("#link").attr("href","https://www.facebook.com/")
    });
});