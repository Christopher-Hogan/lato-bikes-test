var faders = document.querySelectorAll(".fade-in");
var sliders = document.querySelectorAll(".slide-in");

var appearOptions = {
  threshold: 0, // half of item height
  rootMargin: "0px 0px -50px 0px"
};

var appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});