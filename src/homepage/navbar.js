


$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if(scroll > 20){
    $(".navbar").addClass("navbar--scrolled");
  } else {
    $(".navbar").removeClass("navbar--scrolled");
  }
});

