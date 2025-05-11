document.addEventListener("DOMContentLoaded",function(){
const crsr = document.querySelector("#cursore");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
});
});
document.addEventListener("DOMContentLoaded",function(){
    const crsr = document.querySelector("#cursore");
    
    document.addEventListener("mousemove", function(dets) {
        crsr.style.left =dets.x+"px"
        crsr.style.top =dets.y+"px"
    })
    })


gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to(".overlay",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".overlay",
        scroller:"body",
         marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.to("#page2",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
         marker:true,
        start:"top 25%",
        end:"top 70%",
        scrub:2
    }
})