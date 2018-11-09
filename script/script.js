$(document).ready(function(){
   $('#openMenu').click(function(){
       $('#main').fadeIn(200);
       $('#openMenu').animate({left: '-10%'});
       $('#closeMenu').animate({left: '95%'});
       $('.menu').animate({left:'-1%'})
   });


    $('#closeMenu').click(function(){
        $('#main').fadeOut(200);
        $('#openMenu').animate({left: '0%'});
        $('#closeMenu').animate({left: '100%'});
        $('.menu').animate({left:'-50%'})
    });

});