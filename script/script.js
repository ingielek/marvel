$(document).ready(function(){
    var quotes = [
        'Captain America: Before we get started, does anyone want to get out?',
        'Drax the Destroyer: NOTHING goes over my head! My reflexes are too fast, I would catch it.',
        "Nick Fury: Sir! I am going to have to ask you to exit the donut!", 'Hulk: Hulk...SMASH!'
    ]

    $count = 1;

    $('.main').fadeIn(200);
    $('.closeMenu').animate({left: '93.5%'});
    $('.menu').animate({left:'-1%'})

   $('.openMenu').click(function(){
       $('.main').fadeIn(200);
       $('.openMenu').animate({left: '-10%'});
       $('.closeMenu').animate({left: '93.5%'});
       $('.menu').animate({left:'-1%'})
   });

   $(".nextBtn").click(function() {
       if ($count == 1) {
           shrink()
           $('#slider').delay(1000).animate({left:"-100%"}, 1000);
           zoom()
           $count = 2;
       } else if ($count == 2) {
           shrink()
           $('#slider').delay(1000).animate({left:"-200%"}, 1000);
           zoom()
           $count = 3;
       }
   });

   $('.prevBtn').click(function() {
       if ($count == 3 ){
           shrink()
           $('#slider').delay(1000).animate({ left:"-100%"}, 1000);
           zoom()
           $count = 2;
       } else if ($count == 2 ) {
           shrink()
           $('#slider').delay(1000).animate({left:"0%"}, 1000);
           zoom()
           $count =1;
       }
   });

   function shrink() {
       $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 100% 100%, 100% 0%, 10% 20%)"});

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 100% 100%, 90% 20%, 10% 20%)"});

       }, 150)

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 90% 80%, 90% 20%, 10% 20%)"});

       }, 300)

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 10% 80%, 90% 80%, 90% 20%, 10% 20%)"});

       }, 450)
   }

   function zoom() {
       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 90% 80%, 90% 20%, 10% 20%)"});
       }, 2000)

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 100% 100%, 90% 20%, 10% 20%)"});
       }, 2150)

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(10% 20%, 0% 100%, 100% 100%, 100% 0%, 10% 20%)"});
       }, 2300)

       setTimeout(function () {
           $('.sliderSite').css({'clip-path': "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)"});
       }, 2450)
   }

   $('.flipToSignUp').click(function() {
       $('.signInForm').css("animation-name", 'showSignUp');
       $('.signInForm').css("transform", "translate(-50%, -50%) rotateY(180deg)");

       $('.signUpForm').css("animation-name", 'hideSignIn');
       $('.signUpForm').css("transform", "translate(-50%, -50%) rotateY(0deg)");
   });

    $('.flipToSignIn').click(function() {
        $('.signInForm').css("animation-name", 'hideSignUp');
        $('.signInForm').css("transform", "translate(-50%, -50%) rotateY(0deg)");

        $('.signUpForm').css("animation-name", 'showSignIn');
        $('.signUpForm').css("transform", "translate(-50%, -50%) rotateY(180deg)");
    });


});