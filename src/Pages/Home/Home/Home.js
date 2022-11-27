import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Brands from '../../Home/Brands/Bands';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Components/Spinner';

const Home = () => {

  const { data: advertisedItems = [], isLoading, refetch } = useQuery({
    queryKey: ['advertised/v2'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/advertised/v2`);
      const data = await response.json();
      return data;
    }
  });

  if (isLoading) {
    return <Spinner></Spinner>
  };

  console.log(advertisedItems)

  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      {
        advertisedItems.length > 0 &&
        <AdvertisedItems
            advertisedItems={advertisedItems}
            refetch={refetch}
            isLoading={isLoading}
          ></AdvertisedItems>
      }
      <Brands></Brands>
    </div>
  );
};

export default Home;