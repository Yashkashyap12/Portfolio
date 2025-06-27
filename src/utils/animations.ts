import gsap from "gsap";

export const animation = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const bannersY = [bannerOne, bannerThree];
    const bannersX = [bannerTwo, bannerFour];

    gsap.set(bannersY, { y: 0 });
    gsap.set(bannersX, { y: 0 });

    const tl = gsap.timeline();

    tl.to(bannersY, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
    }, 0) // Start at the same time

    .to(bannersX, {
      y: "100%",
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
    }, 0); 
  }
};
