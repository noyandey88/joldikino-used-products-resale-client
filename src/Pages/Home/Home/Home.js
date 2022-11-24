import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Brands from '../../Home/Brands/Bands';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedItems></AdvertisedItems>
      <Brands></Brands>
    </div>
  );
};

export default Home;