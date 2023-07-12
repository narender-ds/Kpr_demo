import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import "../assets/css/Card.css";
const ParallaxCard = () => {
  return (
    <div className="container">
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg1" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg2" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg3" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg4" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg5" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg6" />
        </div>
      </ParallaxTilt>
      <ParallaxTilt
        className="cardWrap"
        tiltMaxAngleX={30}
        tiltMaxAngleY={-30}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.1}
      >
        <div className="card">
          <div className="cardBg7" />
        </div>
      </ParallaxTilt>
    </div>
  );
};

export default ParallaxCard;
