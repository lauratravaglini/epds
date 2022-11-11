$(document).ready(function(){

var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

new ScrollMagic.Scene({triggerElement: "#intro"})
					.setClassToggle("#scissor-navigator", "scroll1") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#moma"})
					.setClassToggle("#scissor-navigator", "scroll2") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#tate"})
					.setClassToggle("#scissor-navigator", "scroll3") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#credit"})
					.setClassToggle("#scissor-navigator", "scroll4") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
                    
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

