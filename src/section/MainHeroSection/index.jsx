import React from "react";
import { Link } from "react-router-dom";

const MainHeroSection = () => {
  return (
    <div>
      <div className="bg-[#e9e6df] pt-28 w-full">
        <div className="">
          {/* Hero Section Container */}
          <div className="grid bg-[#0b322b]">
            {/* Content */}
            <div className="grid font-['Work Sans'] md:grid-cols-2 md:grid-rows-3 pt-4 md:pb-16">
              <h1
                className="text-[#ff2222] text-center md:text-start md:mt-auto font-bold text-3xl md:text-6xl z-10"
                style={{ textShadow: "0px 2px 2px rgba(0, 0, 0, 0.4)" }}
              >
                Jannatul Rumky
              </h1>
              <figure className="p-6 md:-mt-20 md:p-0 md:mr-5 max-w-[400px] md:row-span-3 md:-order-1 mx-auto rounded-[44px]">
                <img className="w-full rounded-[44px]" src="/dp.png" alt="" />
              </figure>
              <p className="text-white md:font-light text-center md:text-start md:ms-4 my-4">
                Post-doctoral Researcher,{" "}
                <span className="block md:flex">Cornell University</span>
              </p>
              <div className="text-center md:text-start md:mt-auto my-4 md:my-0 md:ms-4">
                <Link to="/about">
                  <button className="text-white cursor-pointer font-light">
                    Read All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroSection;
