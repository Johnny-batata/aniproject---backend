import React from 'react';
import { FaUser, FaCompass, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/footer';

const Footbar = () => (
  <S.Footer>
    <Link to="/explore">
      <FaCompass icon="fa-solid fa-compass" />
    </Link>
    <Link to="/inicio">
      <FaHome />
    </Link>
    <Link to="/profile">
      <FaUser icon="fa-solid fa-user" />
    </Link>
  </S.Footer>
);
export default Footbar;
