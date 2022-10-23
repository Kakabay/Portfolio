const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

tl.to('.text', {y:'0%', duration: 0.9, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.3, delay: 0.9});
tl.to('.intro', {y: "-100%", duration: 1}, "-=0.9");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.9});
// tl.fromTo('.hero', {opacity: 0}, {opacity: 1, duration: 1});