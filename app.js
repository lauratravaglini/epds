new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title,0.5, {y: "50", opacity: 0}, {y:0, opacity: 1})

    if(destination.index === 1){
      const collage1 = document.querySelector(".c1");
      const collage2 = document.querySelectorAll(".c2");
      const collage3 = document.querySelectorAll(".c3");
      const description = document.querySelector(".description");
      tl.fromTo(collage1, 0.7, {x: "100%"}, {x: "-40%"})
      tl.fromTo(collage2, 0.7, {x: "100%"}, {x: "50%"})
      tl.fromTo(collage3, 0.7, {x: "100%"}, {x: "-83%"})
      .fromTo(description, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1})
      .fromTo(collage1, 1, {opacity:1}, {opacity:1})
      .fromTo(collage2, 1, {opacity:0}, {opacity:1})
      .fromTo(collage3, 1, {opacity:0}, {opacity:1});
    }
  }
});
