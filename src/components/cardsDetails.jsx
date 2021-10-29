/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
// import { FaStar } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';
import { getAnimeById } from '../services/api';

import Footbar from './footbar';

const CardsDetails = () => {
  const { animeOnDetails } = useContext(Context);
  const { id } = useParams();
  console.log(id, 'id');
  useEffect(() => {
    getAnimeById(id);
  });

  return (
    <div>
      <p>batata </p>
      <Footbar />
    </div>
  );
};

export default CardsDetails;
