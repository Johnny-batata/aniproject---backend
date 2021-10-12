import React from 'react';
import Footbar from '../components/footbar';
import Header from '../components/header';

const Explore = () => (
  <main>
    <Header />
    <button type="button">Animes</button>
    <button type="button">Categories</button>
    <button type="button">Movies</button>
    <Footbar />
  </main>
);

export default Explore;
