import React from "react";
import img1 from "../../assets/1.avif";
import img2 from "../../assets/2.avif";
import img3 from "../../assets/3.avif";
const DisplayImages = () => {
  return (
    <div className="flex">
      <img className="w-full" src={img1} alt="" />
      <img className="w-full" src={img2} alt="" />
      <img className="w-full" src={img3} alt="" />
    </div>
  );
};

export default DisplayImages;
