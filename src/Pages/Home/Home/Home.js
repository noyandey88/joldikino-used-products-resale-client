import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Components/Spinner';
import DownloadApp from '../../../Components/downloadApp/DownloadApp';
import Faq from '../../../Components/faq/Faq';
import Hero from '../../../Components/hero/Hero';
import NewCollections from '../../../Components/newCollections/NewCollections';
import Review from '../../../Components/review/Review';
import Subscribe from '../../../Components/subscribe/Subscribe';
import Teams from '../../../Components/teams/Teams';
import Brands from '../../Home/Brands/Bands';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';

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
    return <Spinner/>
  };

  console.log(advertisedItems);

  return (
    <div>
      <Hero/>
      <Categories></Categories>
      {
        advertisedItems.length > 0 &&
        <AdvertisedItems
            advertisedItems={advertisedItems}
            refetch={refetch}
            isLoading={isLoading}
          ></AdvertisedItems>
      }
      <NewCollections/>
      {/* <Stats /> */}
      <Teams/>
      <Review/>
      <Faq />
      <Subscribe/>
      <Brands/>
      <DownloadApp />
    </div>
  );
};

export default Home;