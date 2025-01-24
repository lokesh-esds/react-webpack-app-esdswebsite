import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "../Css/Test1.css";

const Test1 = () => {
    const boxRef = useRef(null); // Reference for the .box4 element
    const scrollTimeout = useRef(null); // To handle scroll stop
  useEffect(() => {
    // gsap.to(boxRef.current, { x: 100, duration: 2 });
    // gsap.to('.box', { opacity: 0.5, duration: 2 });
    // gsap.from('.box', { x: 100, duration: 2 }); duration doesn't apply to from part of the animation
    // gsap.fromTo('.box', { x:100, opacity: 0,duration: 3 }, { x:400,opacity: 1, duration: 2 });
    // gsap.fromTo('.box', 
    //     { x: 100, opacity: 0 }, 
    //     { x: 400, opacity: 1, duration: 2, repeat: -1, yoyo: true }
    //   );
//     timeline
//   .to('.box1', { x: 100, duration: 1 ,repeat: -2, yoyo: true})
//   .to('.box2', { y: 200, duration: 1, repeat: -4, yoyo: true })
//   .to('.box3', { rotation: 360, duration: 1,    repeat: -6, yoyo: true });

// timeline.fromTo(
//     '.box1',
//     { x: 0 },  // Starting state (x: 0)
//     { x: 100, duration: 1, repeat: -2, yoyo: true } // Ending state (x: 100)
//   );

  // From box2 to y:200, yoyo animation, repeat 4 times
//   timeline.fromTo(
//     '.box2',
//     { y: 0 },  // Starting state (y: 0)
//     { y: 300, duration: 1, repeat: -4, yoyo: true } // Ending state (y: 200)
//   );

  // From box3 to rotation: 360 degrees, yoyo animation, repeat 6 times
//   timeline.fromTo(
//     '.box3',
//     { rotation: 0 },  // Starting state (rotation: 0)
//     { rotation: 360, duration: 1, repeat: -6, yoyo: true } // Ending state (rotation: 360)
//   );

// timeline
//   .fromTo('.box1', { x: 0 }, { x: 150, duration: 2, repeat: -1, yoyo: true }) // First animation
//   .fromTo('.box1', { x: 150 }, { x: 300, duration: 3, repeat: -2, yoyo: true }) // Second animation
//   .fromTo('.box1', { x: 300 }, { x: 0, duration: 2, repeat: 0 }); // Third animation
// gsap.to('.box1', { x: 100, duration: 1, repeat: -4, yoyo: true });
// gsap.to('.box2', { y: -50, duration: 0.5, repeat: -1, yoyo: true });
// gsap.to('.box3', { rotation: 360, duration: 2, repeat: -1 });


 }, []);
 useEffect(() => {
    const handleScroll = () => {
      // Clear previous timeout to ensure animation runs while scrolling
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Animate the box dynamically while scrolling
      gsap.to(boxRef.current, {
        x: "+=20", // Move 20px to the right on each scroll event
        duration: 0.2, // Quick animation for a smooth effect
        ease: "power1.out",
      });

      // Set a timeout to stop the animation when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        gsap.to(boxRef.current, { x: 100, duration: 0.5 }); // Reset position
      }, 200); // Adjust debounce time for smoother stop detection
    };

    // Attach the scroll listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
{/*     
     <div ref={boxRef} className="box1">Hello</div>
    <div className="box2">Hello</div>
    <div className="box3">Hello</div> */}
    {/* <div className="box4" style={{width:"200px",height:"100px",overflow:"auto",background:"lightgray",whiteSpace:"nowrap"}} onScroll={()=>{gsap.to(".box4",{x:500,duration:2,repeat:-2,yoyo:true})}}>
        
    {Array(50).fill("Scrollable content ").map((text, index) => (
    <span key={index}>{text}</span>
  ))}
         </div>  */}
    <div style={{ height: "200vh", padding: "20px" }}>
      {/* Scrollable area */}
      <div
        ref={boxRef}
        className="box4"
        style={{
          width: "200px",
          height: "100px",
          overflow: "auto",
          background: "lightgray",
          whiteSpace: "nowrap",
          position: "relative", // Required for 'x' animations
        }}
      >
        {/* Overflowing content to enable scroll */}
        {Array(50)
          .fill("Scrollable content ")
          .map((text, index) => (
            <span key={index}>{text}</span>
          ))}
      </div>
    </div>
      
    
    </>
  )
  ;
};

export default Test1;
