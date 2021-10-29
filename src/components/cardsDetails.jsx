/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
// import { FaStar } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';

import Footbar from './footbar';

const CardsDetails = () => {
  const { animeOnDetails, fetchCastById } = useContext(Context);
  const { id } = useParams();
  console.log(id, 'id');
  useEffect(() => {
    fetchCastById(id);
  });

  return (
    <div>
      <p>batata </p>
      <Footbar />
    </div>
  );
};

export default CardsDetails;
