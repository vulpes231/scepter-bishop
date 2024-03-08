export const scrollHandler = (event) => {
  event.preventDefault();
  const delta = event.deltaY || event.detail || event.wheelDelta;
  const container = document.querySelector(".bonita");

  // Determine the direction of scroll
  if (delta > 0) {
    // Scrolling down
    container.scrollLeft += 15; // Decreased scroll speed
  } else {
    // Scrolling up
    container.scrollLeft -= 15; // Decreased scroll speed
  }
};

export const isMobile = () => {
  return window.innerWidth <= 768; // Example breakpoint for mobile devices
};
