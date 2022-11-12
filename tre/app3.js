gsap.set(".draw", {
    visibility: "visible" });
  
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  
  
  const draw = () => {
    let tl = gsap.timeline({
      defaults: { duration: 3, ease: 'none' },
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top top" } });
  
  
    tl.to('.hand', {
      y: 1270,
      ease: "none" }).
  
    from(".draw", 3,
    { drawSVG: 0 }, "<").
    to(".circle",
    {
      duration: 0.5,
      autoAlpha: 1,
      ease: "bounce" },
  
    "<").
    to(".circle2",
    {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "bounce" },
    "<0.8");
  
  };
  
  //master timeline
  const master = gsap.timeline();
  master.add(draw());