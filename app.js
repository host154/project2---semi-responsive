const intro = document.querySelector(".about");
const part1 = intro.querySelector('.img2');
const text = intro.querySelector('.about div');

//end part

var tl1 = new TimelineMax();
var tl1_text = new TimelineMax();
var tl2 = new TimelineMax();
var tl2_text = new TimelineMax();
var tl3 = new TimelineMax();
var tl3_text = new TimelineMax();
var tl4 = new TimelineMax();
var tl4_text = new TimelineMax();
var tl_quote = new TimelineMax();

tl_quote
.to(".quotes p",2,{color:"#d4af37"})
.to(".quotes",2,{borderColor:"gray"} , "-=2")


tl1
.from(".img1", 2 ,{marginTop:0 , autoAlpha:0} , "-=7")
tl1_text
.from(".bar1",1,{width:"0px"})

tl2
.from(".img2", 2 ,{marginTop:0 , autoAlpha:0})
tl2_text
.from(".bar2",1,{width:"0px"})

tl3
.from(".img3", 2 ,{autoAlpha:0})
tl3_text
.from(".bar3",1,{width:"0px"})

tl4
.from(".img4", 2 ,{marginTop:0 , autoAlpha:0})
tl4_text
.from(".bar4",1,{width:"0px"})


var controller = new ScrollMagic.Controller();

var quote = new ScrollMagic.Scene({
    triggerElement:".title h2",
    triggerHook:0.05,
    duration:"100%"
})
.setTween(tl_quote) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var img1 = new ScrollMagic.Scene({
    triggerElement:".quotes",
    triggerHook:0,
    duration:"90%",
    reverse:false
})
.setTween(tl1) // trigger a TweenMax.to tween
 //.addIndicators({name: "1 "}) // add indicators (requires plugin)
.addTo(controller);

var bar1 = new ScrollMagic.Scene({
    triggerElement:".quotes",
    triggerHook:0,
    duration:"90%"
})
.setTween(tl1_text) // trigger a TweenMax.to tween
//.addIndicators({name: "1 "}) // add indicators (requires plugin)
.addTo(controller);

var img2 = new ScrollMagic.Scene({
    triggerElement:".text",
    triggerHook:0,
    duration:"50%",
    reverse:false
})
.setTween(tl2) // trigger a TweenMax.to tween
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bar2 = new ScrollMagic.Scene({
    triggerElement:".text",
    triggerHook:0,
    duration:"90%"
})
.setTween(tl2_text) // trigger a TweenMax.to tween
// .addIndicators({name: "1 "}) // add indicators (requires plugin)
.addTo(controller);

var img3 = new ScrollMagic.Scene({
    triggerElement:".img2",
    triggerHook:0,
    duration:"80%",
    reverse:false
 
})
.setTween(tl3) // trigger a TweenMax.to tween
 //.addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bar3 = new ScrollMagic.Scene({
    triggerElement:".txt2",
    triggerHook:0,
    duration:"100%"
})
.setTween(tl3_text) // trigger a TweenMax.to tween
//.addIndicators({name: "1 "}) // add indicators (requires plugin)
.addTo(controller);

var img4 = new ScrollMagic.Scene({
    triggerElement:".img3",
    triggerHook:0,
    duration:"100%",
    reverse:false
})
.setTween(tl4) // trigger a TweenMax.to tween
// .addIndicators() // add indicators (requires plugin)
.addTo(controller);

var bar4 = new ScrollMagic.Scene({
    triggerElement:".img4",
    triggerHook:0,
    duration:"90%"
})
.setTween(tl4_text) // trigger a TweenMax.to tween
// .addIndicators({name: "1 "}) // add indicators (requires plugin)
.addTo(controller);
