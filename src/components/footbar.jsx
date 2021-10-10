import React from 'react';
import { FaUser, FaCompass, FaHome } from 'react-icons/fa';
import * as S from '../styles/components/footer';

// <i className="fa-solid fa-house" />;
const Footbar = () => (
  <S.Footer>
    <FaCompass icon="fa-solid fa-compass" />
    <FaHome />
    <FaUser icon="fa-solid fa-user" />
  </S.Footer>
);
export default Footbar;
