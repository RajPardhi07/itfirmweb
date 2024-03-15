function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  
  
  }
  
  init();


  var li = gsap.timeline();


  li.from(".text-pg1 i",{
    y:-400,
    opacity:0,
    duration:1,
    stagger:3
    
  })
  .to(".movingcircle",{
    scale:1.8,
    duration:0.8,
    repeat:-1,
    yoyo:true
 })
  .from(".text-pg1 h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:3
    
  })
  
  .from(".text-pg1 h5",{
    y:100,
    opacity:0,
    duration:0.7,
    
  })
  .from(".text-pg1 button",{
    y:100,
    opacity:0,
    duration:0.7,
    
  })

  .from(".left-arrow",{
    
    opacity:0,
    duration:0.7,
    
  },"hero")

  .from(".right-arrow",{
    
    opacity:0,
    duration:0.7,
    
  },"hero")




  gsap.to("#rrr",{
    top:"65%",
    duration:1.5,
    repeat:-1,
    yoyo:true
 })

 gsap.to("#aaa",{
    top:"-17%",
    duration:1.2,
    repeat:-1,
    yoyo:true
 })

 gsap.to("#qqq",{
    top:"-6%",
    duration:1.3,
    repeat:-1,
    yoyo:true
 })

 gsap.to("#vvv",{
    left:"6%",
    duration:3,
    repeat:-1,
    yoyo:true
 })

 gsap.to("#ttt",{
  top:"-1%",
  duration:2,
  repeat:-1,
  yoyo:true
})
 
 gsap.to("#movingpg3",{
    scale:3,
    duration:0.8,
    repeat:-1,
    yoyo:true
 })

 var Ei = gsap.timeline();


 Ei.from(".center-page4 h4",{
    y:-100,
    opacity:0,
    duration:0.8,
    
    scrollTrigger:{
      trigger:".center-page4 h4",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  .from(".center-page4 h1",{
    y:-100,
    opacity:0,
    duration:0.8,
    stagger:3,
    scrollTrigger:{
      trigger:".center-page4 h1",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })

  .from(".box-page4",{
    x:100,
    opacity:0,
    duration:0.8,

    scrollTrigger:{
      trigger:".box-page4",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  
function cursor() {
    var cursor = document.querySelector("#cursor")
  
    document.addEventListener("mousemove", function (dets) {
      cursor.style.left = `${dets.x}px`
      cursor.style.top = `${dets.y}px`
    })
  }
  
  cursor();



  // function page11Swiper() {
  //   var swiper = new Swiper("#page11 .mySwiper", {
  //     slidesPerView: 3,
  
  
  //     spaceBetween: 18,
  //     grabCursor: true,
  //     // freeMode: true,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: "#page11 .swiper-button-next",
  //       prevEl: "#page11 .swiper-button-prev",
  //     },
  //   });
  
  //   var rightp10 = document.querySelector("#page11 .swiper-wrapper")
  //   rightp10.addEventListener("mousemove", function (dets) {
  //     gsap.to("#fox", {
  //       top: `${dets.y}px`,
  //       left: `${dets.x}px`,
  //       scale: 1
  //     })
  
  //   })
  
  //   rightp10.addEventListener("mouseleave", function (dets) {
  //     gsap.to("#fox", {
  //       top: `${dets.y}px`,
  //       left: `${dets.x}px`,
  //       scale: 0
  //     })
  
  
  //   })
  
  // }
  
  
  // page11Swiper();
  


  var Vi = gsap.timeline();


 Vi.from(".text-page6 h5",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:3,

    scrollTrigger:{
      trigger:".text-page6 h5",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  .from(".text-page6 h1",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:3,
    scrollTrigger:{
      trigger:".text-page6 h1",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  var Vi = gsap.timeline();


 Vi.from(".center-page7 h4",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:3,

    scrollTrigger:{
      trigger:".center-page7 h4",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  .from(".center-page7 h1",{
    y:50,
    opacity:0,
    duration:0.8,
    stagger:3,
    scrollTrigger:{
      trigger:".center-page7 h1",
      scroller:"#main",
      start:"top 70%",
      end:"top 69%",
      scrub:3,
      

    }
  })


  function buttonMove1() {
    var icon1 = document.querySelector(".icon1-page8")

    icon1.addEventListener("mouseenter", function () {
        gsap.to(".icon1-page8 span", {
            y: "-3.5vw",
        })

    })

    icon1.addEventListener("mouseleave", function () {
        gsap.to(".icon1-page8 span", {
            y: "0",
        })

    })
}

function buttonMove2() {
  var icon2 = document.querySelector(".icon2-page8")

  icon2.addEventListener("mouseenter", function () {
      gsap.to(".icon2-page8 span", {
          y: "-3.5vw",
      })

  })

  icon2.addEventListener("mouseleave", function () {
      gsap.to(".icon2-page8 span", {
          y: "0",
      })

  })
}

function buttonMove3() {
  var icon3 = document.querySelector(".icon3-page8")

  icon3.addEventListener("mouseenter", function () {
      gsap.to(".icon3-page8 span", {
          y: "-3.5vw",
      })

  })

  icon3.addEventListener("mouseleave", function () {
      gsap.to(".icon3-page8 span", {
          y: "0",
      })

  })
}

function buttonMove4() {
  var icon4 = document.querySelector(".icon4-page8")

  icon4.addEventListener("mouseenter", function () {
      gsap.to(".icon4-page8 span", {
          y: "-3.5vw",
      })

  })

  icon4.addEventListener("mouseleave", function () {
      gsap.to(".icon4-page8 span", {
          y: "0",
      })

  })
}






buttonMove1();
buttonMove2();
buttonMove3();
buttonMove4();