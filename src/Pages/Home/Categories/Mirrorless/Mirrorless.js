import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from '../../../../Components/CategoryProduct';
import Spinner from '../../../../Components/Spinner';
import MirrorlessCamera from './MirrorlessCamera';

const Mirrorless = () => {
  const { data: cameras = [], isLoading, refetch } = useQuery({
    queryKey: ['products/camera'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products/camera?category=mirrorless`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          cameras?.map(camera => <MirrorlessCamera
            key={camera._id}
            camera={camera}
          ></MirrorlessCamera>)
        }
      </div>
    </div>
  );
};

export default Mirrorless;