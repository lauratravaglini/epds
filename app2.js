$(document).ready(function(){

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build scenes for scroller
new ScrollMagic.Scene({triggerElement: "#intro", duration: "100%", triggerHook: 1 })
.setClassToggle("#scissor-navigator", "scroll1") // add class toggle
.addIndicators({
    name: "navigator",
    colorTrigger: "red",
    colorStart: "red",
    colorEnd: "green"

}) // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#moma", duration: "100%", triggerHook: 1 })
.setClassToggle("#scissor-navigator", "scroll2") // add class toggle
.addIndicators({
    name: "navigator",
    colorTrigger: "red",
    colorStart: "red",
    colorEnd: "green"

}) // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#tate", duration: "100%", triggerHook: 1 })
.setClassToggle("#scissor-navigator", "scroll3") // add class toggle
.addIndicators({
    name: "navigator",
    colorTrigger: "red",
    colorStart: "red",
    colorEnd: "green"

}) // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({triggerElement: "#credit", duration: "100%", triggerHook: 1 })
.setClassToggle("#scissor-navigator", "scroll4") // add class toggle
.addIndicators({
    name: "navigator",
    colorTrigger: "red",
    colorStart: "red",
    colorEnd: "green"

}) // add indicators (requires plugin)
.addTo(controller);

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
        colorEnd: "purple"

    }) 

    .addTo(controller);
    })

});

