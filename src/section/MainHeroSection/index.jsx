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
            <div className="grid md:grid-cols-2 md:grid-rows-3 pt-4 md:pb-16">
              <h1 className="text-[#be6d54] text-center md:text-start md:mt-auto font-bold text-4xl z-10">
                <span>Janatul</span>
                <span className="block">Rumkey PhD</span>
              </h1>
              <figure className="p-6 md:-mt-20 md:p-0 md:mr-8 md:row-span-3 md:-order-1 max-w-[480px] mx-auto">
                <img className="w-full" src="/image.avif" alt="" />
              </figure>
              <p className="text-white text-center md:text-start md:mx-6 my-2">
                Department of History,
                <span className="block md:inline-block md:ps-1">
                  Greenhill University, CA
                </span>
              </p>
              <div className="text-center md:text-start md:mt-auto my-4 md:my-0">
                <Link to="/about">
                  <button className="text-white cursor-pointer font-semibold">
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
