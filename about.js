var tlcamera = new TimelineMax();
var tlpart3 = new TimelineMax();
var tllens = new  TimelineMax();
var tllens2 = new  TimelineMax();

tlcamera
.from(".camera",4,{width:"80%" , marginLeft:"10vh" , autoAlpha:0},"-=2")
.from(".part2 p:nth-of-type(1)" , 5 , {left:"45%" , autoAlpha:0})
.from(".part2 p:nth-of-type(2)" , 5 , {left:"45%" , autoAlpha:0})
.to(".part2 p:nth-of-type(2)" , 3 , {color:"rgba(253, 253, 70, 0.77)"})

tllens
.from(".lens1",6,{width:"80%" , marginLeft:"10vh" , autoAlpha:0 },"-=2")
.from(".part2 p:nth-of-type(3)" , 5 , {left:"45%" , autoAlpha:0})
.to(".part2 p:nth-of-type(3)" , 3 , {color:"rgba(253, 253, 70, 0.77)"})

tllens2
.from(".lens2",6,{width:"80%" , marginLeft:"15vh" , autoAlpha:0},"-=1")
.from(".part2 p:nth-of-type(4)" , 5 , {left:"45%" , autoAlpha:0})
.to(".part2 p:nth-of-type(4)" , 3 , {color:"rgba(253, 253, 70, 0.77)"})


tlpart3
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 0%,  rgb(29, 29, 29)  24%,rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 10%, rgb(29, 29, 29) 34%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 20%, rgb(29, 29, 29) 44%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 30%, rgb(29, 29, 29) 54%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 40%, rgb(29, 29, 29) 64%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 50%, rgb(29, 29, 29) 74%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 60%, rgb(29, 29, 29) 84%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 70%, rgb(29, 29, 29) 94%, rgb(29, 29, 29) 100%)"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 80%, rgb(29, 29, 29) 100%"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 90%, rgb(29, 29, 29) 100%"})
.to(".part3",1,{background: "linear-gradient(110deg, rgba(0,0,0,0) 98%, rgb(29, 29, 29) 100%"})
.to(".part3",1,{background: "transparent"})

var controller = new ScrollMagic.Controller();

var camera = new ScrollMagic.Scene({
    triggerElement:".stop1",
    triggerHook:0,
    duration:350
})
.setTween(tlcamera) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
//.setPin(".part2")
.addTo(controller);

var lens_1 = new ScrollMagic.Scene({
    triggerElement:".camera",
    triggerHook:0,
    duration:450
})
.setTween(tllens) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
//.setPin(".part2")
.addTo(controller);

var lens_2 = new ScrollMagic.Scene({
    triggerElement:".lens1",
    triggerHook:0,
    duration:450
})
.setTween(tllens2) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
//.setPin(".part2")
.addTo(controller);


var part3 = new ScrollMagic.Scene({
    triggerElement:".stop2",
    triggerHook:0,
    duration:300
})
.setTween(tlpart3) // trigger a TweenMax.to tween
//.addIndicators() // add indicators (requires plugin)
//.setPin(".part2")
.addTo(controller);

