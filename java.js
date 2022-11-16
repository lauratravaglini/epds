TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const tl = new TimelineMax({ delay: 0.5});
  }
});