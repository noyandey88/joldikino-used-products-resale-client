import { motion } from 'framer-motion';
import React from 'react';
import Marquee from "react-fast-marquee";
import canon from '../../../assets/brands/canon-logo.webp';
import dahua from '../../../assets/brands/dahua.webp';
import fujifilm from '../../../assets/brands/fujifilm-logo.webp';
import hikvision from '../../../assets/brands/hikvision-logo.webp';
import kodak from '../../../assets/brands/kodak-logo.webp';
import leica from '../../../assets/brands/leica-logo.webp';
import panasonic from '../../../assets/brands/panasonic.webp';
import polaroid from '../../../assets/brands/polaroid.webp';
import sony from '../../../assets/brands/sony.webp';
import zeiss from '../../../assets/brands/zeiss-logo.webp';

const imageData = [
  { id: 1, imageUrl: canon },
  { id: 2, imageUrl: fujifilm },
  { id: 3, imageUrl: hikvision },
  { id: 4, imageUrl: kodak },
  { id: 5, imageUrl: leica },
  { id: 6, imageUrl: zeiss },
  { id: 7, imageUrl: polaroid },
  { id: 9, imageUrl: sony },
  { id: 10, imageUrl: panasonic },
  { id: 11, imageUrl: dahua },
];

const Bands = () => {
  return (
    <div className="px-4 lg:px-0 mt-12">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60, duration: 1.25, ease: "easeInOut", bounce: 0.3 }}
        viewport={{ once: true }}
        className="mb-8">
        <h1 className="text-xl md:text-3xl text-center font-bold">Popular Brands</h1>
      </motion.div>
      <Marquee gradient={true} speed={20}>
        {
          imageData?.map((image) => (
            <div key={image.id}
              className="p-2 h-full w-full flex justify-center mx-4">
              <img src={image?.imageUrl}
                alt="camera_brand"
                className="w-24 h-auto md:w-48 object-contain select-none"
              />
            </div>
          ))
        }
      </Marquee>
    </div>
  );
};

export default Bands;