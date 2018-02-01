$(document).scroll(function(){
    console.log( $(document).scrollTop() );

        $("#box3").css('transform','translateY(' + String($(document).scrollTop() * .1) +'px)');
        $("#box2").css('transform','translateY(' + String($(document).scrollTop() * .5) +'px)');
        $("#box1").css('transform','translateY(' + String($(document).scrollTop() * .9) +'px)');
});