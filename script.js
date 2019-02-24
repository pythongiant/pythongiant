$(document).ready(function(){
   $(".title").fadeIn(500);
   $("#music > i").hover(function(){
        anime({
            targets: '#music > i',
            rotate:{value:'90deg',delay:300},
            
        }); 
    })
    var waypoint = new Waypoint({
        element: document.getElementById('buttons'),
        handler: function() {
            console.log("yolo")
            anime({
                targets:"#python-graph",
                width:"70%"
            })
            anime({
                targets:"#kotlin-graph",
                width:"60%"
            })
            anime({
                targets:"#js-graph",
                width:"50%"
            })
            anime({
              targets:"#linux-graph",
              width:"55%"
            })   
        }
      })
});
