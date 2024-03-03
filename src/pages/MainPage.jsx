import React from "react";
import {
  Back1,
  Back2,
  Craft,
  Header,
  Hero,
  Info,
  ItemDisplay,
  Shop,
} from "../components";

const MainPage = () => {
  const isMobile = () => {
    return window.innerWidth <= 768; // Example breakpoint for mobile devices
  };

  const scrollHandler = (event) => {
    event.preventDefault();
    const delta = event.deltaY || event.detail || event.wheelDelta;
    const container = document.querySelector(".bonita");

    // Determine the direction of scroll
    if (delta > 0) {
      // Scrolling down
      container.scrollLeft -= 20; // Decreased scroll speed
    } else {
      // Scrolling up
      container.scrollLeft += 20; // Decreased scroll speed
    }
  };

  // Prevent default vertical scrolling behavior for desktop
  React.useEffect(() => {
    const container = document.querySelector(".bonita");
    if (!isMobile()) {
      const preventDefault = (event) => {
        event.preventDefault();
      };

      container.addEventListener("wheel", preventDefault, { passive: false });

      return () => {
        container.removeEventListener("wheel", preventDefault);
      };
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-900 text-white flex flex-col lg:flex-row lg:overflow-scroll bonita"
      onWheel={isMobile() ? null : scrollHandler}
    >
      <Header />
      <Hero />
      <Shop />
      <Back1 />
      <ItemDisplay />
      <Craft />
      <Back2 />
      <Info />
    </div>
  );
};

export default MainPage;
