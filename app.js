new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    console.log(destination.item);
  }
  
  
});


/*

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: false,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title,0.5, {y: "30", opacity: 0}, {y:0, opacity: 1})

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
*/

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".pc1", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 1160686, // End number [uint]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  pulse: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [uint]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
  separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".pc2", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 1156037, // End number [uint]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  pulse: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [uint]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
  separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".pc3", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 1160686, // End number [uint]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  pulse: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [uint]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
  separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".pc4", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 1156037, // End number [uint]
  duration: 1, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  once: true, // Counting at once or recount when the element in view [boolean]
  pulse: false, // Repeat count for certain time [boolean:false|seconds]
  decimals: 0, // How many decimal places to show. [uint]
  legacy: true, // If this is true it will use the scroll event listener on browsers
  filesizing: false, // This will enable/disable File Size format [boolean]
  currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
  formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
  separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
});

