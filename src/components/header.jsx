import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import * as S from '../styles/components/header';

const Header = () => {
  console.log('batta');
  return (
    <S.Header>
      <FaBars icon="fa-solid fa-bars" />
      <FaSearch icon="fa-solid fa-search" />
    </S.Header>
  );
};

export default Header;
