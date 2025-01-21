import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "../Css/Test1.css";

const Test1 = () => {
    const boxRef = useRef(null);
const timeline = gsap.timeline();
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

timeline.fromTo(
    '.box1',
    { x: 0 },  // Starting state (x: 0)
    { x: 100, duration: 1, repeat: -2, yoyo: true } // Ending state (x: 100)
  );

  // From box2 to y:200, yoyo animation, repeat 4 times
  timeline.fromTo(
    '.box2',
    { y: 0 },  // Starting state (y: 0)
    { y: 200, duration: 1, repeat: -4, yoyo: true } // Ending state (y: 200)
  );

  // From box3 to rotation: 360 degrees, yoyo animation, repeat 6 times
  timeline.fromTo(
    '.box3',
    { rotation: 0 },  // Starting state (rotation: 0)
    { rotation: 360, duration: 1, repeat: -6, yoyo: true } // Ending state (rotation: 360)
  );

 }, []);
  

  return (
    <>
    
    <div ref={boxRef} className="box1">Hello</div>
    <div className="box2">Hello</div>
    <div className="box3">Hello</div>
    </>
  )
  ;
};

export default Test1;
