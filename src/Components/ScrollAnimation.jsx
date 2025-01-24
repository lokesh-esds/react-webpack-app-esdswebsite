// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollAnimation = () => {
//   useEffect(() => {
//     gsap.to(".box", {
//       x: 500,
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       scrollTrigger: {
//         trigger: ".box", // Element to watch for scrolling
//         start: "top 80%", // When the element enters the viewport
//         end: "bottom 20%", // When it leaves
//         toggleActions: "play none none none", // Play on enter
//       },
//     });
//   }, []);

//   return (
//     <div style={{ height: "200vh", padding: "50px" }}>
//       Scroll to see the animation!
//       <div className="box" style={{ background: "lightblue", width: "100px", height: "100px" }}>
//         Animate Me
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimation;



import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dcrack from "../Assets/dc-rack.jpg";


gsap.registerPlugin(ScrollTrigger);

const SmoothScrollImage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoother or faster scrolling
    });
  
    const onScroll = (time) => {
      lenis.raf(time); // Update Lenis
      requestAnimationFrame(onScroll);
    };
    requestAnimationFrame(onScroll);
  
    // Sync Lenis with ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value); // Set scroll position
        }
        return lenis.scroll ? lenis.scroll.y : window.scrollY; // Get current scroll position
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });
  
    ScrollTrigger.refresh(); // Recalculate ScrollTrigger
  
    return () => lenis.destroy(); // Cleanup Lenis on unmount
  }, []);

  useEffect(() => {
    // Animation for the image
    gsap.fromTo(
      ".image",
      { opacity: 0, y: 100 }, // Start with image below the viewport and transparent
      {
        opacity: 1,
        y: 0, // Move into place
        duration: 1.5,
        scrollTrigger: {
          trigger: ".image",
          start: "top 80%", // Start animation when 80% into viewport
          end: "top 40%", // End animation when 40% into viewport
          scrub: true, // Smooth animation
          markers: true, // Enable for debugging
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          color: "#555",
        }}
      >
        Scroll Down to See the Image
      </div>

      <div
        className="image-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <img
          className="image"
          src={dcrack}
          alt="Web Hosting Concept"
          style={{
            width: "50%",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
};

export default SmoothScrollImage;
