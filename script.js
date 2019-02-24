$(document).ready(function(){
   $(".title").fadeIn(500);
   $("#music > i").hover(function(){
        anime({
            targets: '#music > i',
            rotate:{value:'90deg',delay:300},
            
        }); 
    })
});