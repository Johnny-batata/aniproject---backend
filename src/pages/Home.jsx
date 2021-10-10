import React from 'react';
import Header from '../components/header';
import * as S from '../styles/pages/Home';
import AnimesCards from '../components/animesCards';
import { Context } from '../provider/Provider';
// import Footbar from '../components/footbar';

const Home = () => (
  <div>
    <S.div>
      <Header />
    </S.div>
    <AnimesCards />

    {/* <Footbar /> */}
  </div>
);
export default Home;
