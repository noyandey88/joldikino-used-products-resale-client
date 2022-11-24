import React from 'react';
import canon from '../../../assets/brands/canon-logo.png';
import fujifilm from '../../../assets/brands/fujifilm-logo.png';
import hikvision from '../../../assets/brands/hikvision-logo.png';
import kodak from '../../../assets/brands/kodak-logo.png';
import leica from '../../../assets/brands/leica-logo.png';
import zeiss from '../../../assets/brands/zeiss-logo.png';

const Bands = () => {
  return (
    <div className="px-4 lg:px-0 mt-12">
      <div className="mb-8">
        <h1 className="text-4xl text-center font-bold">Popular Brands</h1>
      </div>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 lg:grid-cols-6">
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={canon} alt="canon" />
        </div>
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={fujifilm} alt="canon" />
        </div>
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={hikvision} alt="canon" />
        </div>
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={kodak} alt="canon" />
        </div>
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={leica} alt="canon" />
        </div>
        <div className="shadow-md p-2 h-full w-full flex justify-center">
          <img src={zeiss} alt="canon" />
        </div>
      </div>
    </div>
  );
};

export default Bands;