

$(document).ready(function(){
	$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
    if(scroll > 20){
    	$(".navbar").css("background", "grey");
    }
    else{
    	$(".navbar").css("background", "none");
    }
  });
});
