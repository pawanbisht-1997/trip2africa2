  // responsive header 
  $(document).ready(function(){
    $(".hamburger").click(function(){
      $(".menu").toggleClass("resp-menu");
      $(".fa-bars").toggleClass("none");
      $(".fa-xmark").toggleClass("block");
    });
    $(".one").click(function(){
       $("#subone").toggleClass("submenuvis");
       $("#subtwo").removeClass("submenuvis");
       $("#subthree").removeClass("submenuvis");
     });
     $(".two").click(function(){
       $("#subtwo").toggleClass("submenuvis");
       $("#subone").removeClass("submenuvis");
       $("#subthree").removeClass("submenuvis");
     });
     $(".three").click(function(){
      $("#subthree").toggleClass("submenuvis");
      $("#subtwo").removeClass("submenuvis");
      $("#subone").removeClass("submenuvis");
    });


  });



 