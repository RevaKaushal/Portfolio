import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

//constant mei hai technologies ka function 
//canvas mei hai balls ka structure

//to add technology add icon photo in assests file fir add directory to ASSESTS ki index.js file fir CONSTANTS ki index.js mei add kro 
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");