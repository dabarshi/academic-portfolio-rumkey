import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="bg-[#0a342e] ">
      <div className="pb-8 pt-6 md:pb-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#be6d54] font-extrabold font-[Lora] drop-shadow-2xl">
          {title}
          <span className="text-5xl md:text-7xl">.</span>
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
