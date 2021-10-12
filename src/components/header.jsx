import React, { useContext } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import * as S from '../styles/components/header';
import { Context } from '../provider/Provider';
import HeaderBarOptions from './headerBarOptions';
import SearchBar from './searchBar';

const Header = () => {
  const { barOn, sideBarHandler, searchBar, searchBarHandler } = useContext(Context);

  const renderHeaderDefault = () => (
    <S.SectionDefault>
      <FaBars
        icon="fa-solid fa-bars"
        onClick={ () => sideBarHandler() }
      />
      <h1>Current Animes</h1>
      <FaSearch
        icon="fa-solid fa-search"
        onClick={ () => searchBarHandler() }

      />
    </S.SectionDefault>
  );

  return (
    <S.Header>
      {' '}
      { renderHeaderDefault() }
      { barOn && <HeaderBarOptions /> }
      { searchBar && <SearchBar /> }
    </S.Header>

  );
};
// );
export default Header;
