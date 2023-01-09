let accounts;

  const splide = new Splide(".splide", {
    type: "loop",
    arrows: false,
    perMove: 3,
    pagination: false,
    autoplay: true,
    direction: 'ttb',
    height: "calc(100vh - 90px)",
    width: '30vw',
    autoHeight: true,
  });
  splide.mount();

