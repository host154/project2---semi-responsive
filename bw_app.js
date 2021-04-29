
// var tl1 = new TimelineMax();
// var tl1_text = new TimelineMax();
// var tl2 = new TimelineMax();
// var tl2_text = new TimelineMax();
// var tl3 = new TimelineMax();
// var tl3_text = new TimelineMax();
// var tl4 = new TimelineMax();
// var tl4_text = new TimelineMax();
// var tl_quote = new TimelineMax();

// tl_quote
// .to(".quotes p",2,{color:"#d4af37"})
// .to(".quotes",2,{borderColor:"gray"} , "-=2")


// tl1
// .from(".img1", 2 ,{marginTop:0 , autoAlpha:0} , "-=7")
// tl1_text
// .from(".bar1",1,{width:"0px"})

// tl2
// .from(".img2", 2 ,{marginTop:0 , autoAlpha:0})
// tl2_text
// .from(".bar2",1,{width:"0px"})

// tl3
// .from(".img3", 2 ,{autoAlpha:0})
// tl3_text
// .from(".bar3",1,{width:"0px"})

// tl4
// .from(".img4", 2 ,{marginTop:0 , autoAlpha:0})
// tl4_text
// .from(".bar4",1,{width:"0px"})


// var controller = new ScrollMagic.Controller();

// var quote = new ScrollMagic.Scene({
//     triggerElement:".title h2",
//     triggerHook:0.05,
//     duration:"100%"
// })
// .setTween(tl_quote) // trigger a TweenMax.to tween
// .addIndicators() // add indicators (requires plugin)
// .addTo(controller);
const home = document.querySelector('#Home');


var tl_title = new TimelineMax();

tl_title
.to(".topheading #heading1", 4 ,{marginTop:"-10vh" , autoAlpha:0},"-=3")
.to(".topheading #bwpic1", 4 ,{marginLeft:"50vw", width: "35%",autoAlpha:0.8},"-=2")
.to(".topheading #bwpic1", 4 ,  {marginTop:"-10vh" ,autoAlpha:0},"-=2")
.to(".topheading #heading2", 8 ,{marginTop:"-60vh" , autoAlpha:0.8 , fontSize:"8vh"} , "+=1")
.to(".topheading p" , 5 , {  autoAlpha:1})
var controller = new ScrollMagic.Controller();

var top = new ScrollMagic.Scene({
    triggerElement:"#Home",
    triggerHook:0,
    duration:5000
})
.setTween(tl_title) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
.setPin(home)
.addTo(controller);
