import React, { useEffect, useState } from "react";
import Ima from "../assets/images/card-left-01.webp";

const BackgroundImage = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageWidth = 100 + scroll / 5 + "%";

  return (
    <>``
      <div className="header" id="parallax">
        <img
          className="header-image"
          src={Ima}
          alt="Parallax Image"
          style={{ width: imageWidth }}
        />
      </div>
    </>
  );
};

export default BackgroundImage;
