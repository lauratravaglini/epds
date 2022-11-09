$(document).ready(function(){
// Init ScrollMagic
var controller = new ScrollMagic.Controller();
     
$(".section").each(function(){
    
    // build a scene
    var Scene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        duration: "80%", // when it starts to fade away
        triggerHook: 0.9 
    })
    .setClassToggle(this, "fade-in") // add class
    .addIndicators({
        name: "fade scroll",
        colorTrigger: "black",
        colorStart: "pink",
        colorEnd: "green"

    })  
    .addTo(controller);
    })

});
