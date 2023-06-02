import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../Components/Spinner';
import DownloadApp from '../../../Components/downloadApp/DownloadApp';
import Faq from '../../../Components/faq/Faq';
import NewCollections from '../../../Components/newCollections/NewCollections';
import Review from '../../../Components/review/Review';
import Stats from '../../../Components/stats/Stats';
import Subscribe from '../../../Components/subscribe/Subscribe';
import Brands from '../../Home/Brands/Bands';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
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
    return <Spinner></Spinner>
  };

  console.log(advertisedItems);

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
      <Stats />
      <NewCollections/>
      <Review/>
      <Faq />
      <Subscribe/>
      <DownloadApp />
    </div>
  );
};

export default Home;