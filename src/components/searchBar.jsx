import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import { ImListNumbered, ImEqualizer } from 'react-icons/im';
import { Context } from '../provider/Provider';
import * as S from '../styles/components/searchbar';

// MdOutlineFormatListNumbered;

const SearchBar = () => {
  const { profileData, sideBarHandler } = useContext(Context);
  return (
    <S.Div>
      <input type="text" />
      <FaSearch icon="fa-solid fa-search" />
      <ImEqualizer />
      <ImListNumbered />
    </S.Div>
  );
};

export default SearchBar;
