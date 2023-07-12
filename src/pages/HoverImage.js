import React, { useEffect, useRef } from "react";
import "../assets/css/HoverImage.css";
import ParallaxCard from "../component/ParallaxCard";
import Carousel from "./Carousel";
const HoverImage = () => {
  const landingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (item) => {
      const partSideX = (item.pageX * -1) / 6;
      const partSideY = (item.pageY * -1) / 6;
      landingRef.current.style.backgroundPosition = `${partSideX}px ${partSideY}px`;
    };

    const landingContentElement = landingRef.current;
    landingContentElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      landingContentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div id="landing-content" ref={landingRef}></div>
      </div>
      <div id="top-image"></div>
      <ParallaxCard/>
      <Carousel/>
    </>
  );
};

export default HoverImage;
// import React, { useEffect, useState } from 'react';
// import "../assets/css/HoverImage.css";

// const HoverImage = () => {
//   const [movementStrength, setMovementStrength] = useState(25);
//   const [height, setHeight] = useState(0);
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const pageX = e.pageX - window.innerWidth / 2;
//       const pageY = e.pageY - window.innerHeight / 2;
//       const newvalueX = width * pageX * -1 - 25;
//       const newvalueY = height * pageY * -1 - 50;
//       document.getElementById('top-image').style.backgroundPosition = `${newvalueX}px ${newvalueY}px`;
//     };

//     const handleResize = () => {
//       setHeight(movementStrength / window.innerHeight);
//       setWidth(movementStrength / window.innerWidth);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listeners on component unmount
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [movementStrength, height, width]);

//   return (
//     <div>
//         <div id="top-image"></div>
//     </div>
//   );
// };

// export default HoverImage;

