const config = {
  type: "carousel",
  perView: "5",
  gap: 10,
  breakpoints: {
    768: {
      perView: 1,
      gap: 20,
    },
  },
  bullets: true,
  autoplay: 2000,
};

new Glide(".glide", config).mount();
