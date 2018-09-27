$(function(){

    var slides = ["Coloque aqui os slides em formato HTML."];
    
    var num = 0;

    $("#main").html(slides[0]);

    $("html").keydown(function(key){

        if(key.which == 39){

            num++;
            if(num > slides.length){

                num = (slides.length - 1); //erro aqui 
                $("#main").html(slides[num]);

            }
            $("#main").html(slides[num]);
            
        }else
        if(key.which == 37){
            num--;
            if(num < 0){
                num = 0;
            }

            $("#main").html(slides[num]);
        }

    });

})