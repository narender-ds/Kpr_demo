import React, { useEffect } from "react";
import "../assets/css/Carousel.css";
const Carousel = () => {
  useEffect(() => {
    const leftPerspectives = [
      { x: -10, z: -4 },
      { x: -20, z: -8 },
      { x: -30, z: -12 },
      { x: -40, z: -16 },
      { x: -50, z: -20 },
      { x: 10, z: -4 },
    ];

    const rightPerspectives = [
      { x: 10, z: -4 },
      { x: 20, z: -8 },
      { x: 30, z: -12 },
      { x: 40, z: -16 },
      { x: 50, z: -20 },
      { x: -10, z: -4 },
    ];

    const translateImage = (target, p) => {
      target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
    };

    const animateCards = (item, perspectives) => {
      const count = parseInt(item.dataset.counter);
      translateImage(item, perspectives[count - 1]);
      item.dataset.counter = (count === 6 ? 1 : count + 1).toString();
    };

    const loop = () => {
      setInterval(() => {
        leftCards.forEach((item) => {
          animateCards(item, leftPerspectives);
        });

        rightCards.forEach((item) => {
          animateCards(item, rightPerspectives);
        });
      }, 1000);
    };

    const leftCards = document.querySelectorAll(".left .item");
    const rightCards = document.querySelectorAll(".right .item");

    loop();
  });

  return (
    <div  className="mainContainer" >
      <div className="gallery">
        <div className="left">
          <div className="inner">
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-01.webp"
              data-counter="1"
              alt="Left Card 1"
            />
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-02.webp"
              data-counter="2"
              alt="Left Card 2"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-03.webp"
              data-counter="3"
              alt="Left Card 3"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-04.webp"
              data-counter="4"
              alt="Left Card 4"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-05.webp"
              data-counter="5"
              alt="Left Card 5"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-left-06.webp"
              data-counter="6"
              alt="Left Card 6"
            />

          </div>
        </div>

        <div className="right">
          <div className="inner">
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-01.webp"
              data-counter="1"
              alt="Right Card 1"
            />
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-02.webp"
              data-counter="2"
              alt="Right Card 2"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-03.webp"
              data-counter="3"
              alt="Right Card 3"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-04.webp"
              data-counter="4"
              alt="Right Card 4"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-05.webp"
              data-counter="5"
              alt="Right Card 5"
            />{" "}
            <img
              className="item"
              src="https://kprverse.com/images/compressed/webp/collection/card-right-06.webp"
              data-counter="6"
              alt="Right Card 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
