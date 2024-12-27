function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
// use scroller as #main. in gsap
}


function loadinAnimation(){
  var tl = gsap.timeline();

tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1",{
  opacity: 0,
  onStart: function () {
    let h5timer = document.querySelector("#line1-part1 h5");

    var grow = 0;

    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 30);
  },
});

tl.to(".line h2",{
  animationName: "anima",
  opacity: 1,
})

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 0,
});

tl.from("#page1",{
  delay: 0.2,
  y: 1600,
  opacity:0,
  ease: Power4,
  duration:0.5,
})

tl.to("#loader",{
  display: "none",

})

tl.from('#nav',{
  opacity:0
})

tl.from("#hero1 h1, #hero2 h1, #hero3 h3, #hero3 h2, #hero4 h1",{
  y: 120,
  stagger: 0.2
})

}


function mouseFollower(){
    document.addEventListener('mousemove',function(dets){
      gsap.to('#crsr',{
        left: dets.x,
        top: dets.y
      })
    })
}
  

function magnetNavs(){
  Shery.makeMagnet("#nav-part2 h4", {
  });
}


function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}



loadinAnimation();
locomotiveAnimation();
// mouseFollower();
magnetNavs();
sheryAnimation();
