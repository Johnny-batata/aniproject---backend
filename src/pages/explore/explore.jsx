import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footbar from '../../components/footbar';
import Header from '../../components/header';
import * as S from '../../styles/pages/explore';
import onePiece from '../../imgs/onePieceExplore.png';
import { Context } from '../../provider/Provider';

const Explore = () => {
  const { status, setStatus } = useContext(Context);

  const handleClick = ({ target: { name } }) => {
    console.log(name, 'name');
    if (name === 'animes') {
      return setStatus({
        ...status, statusNow: 'All', statusCategorie: { name: 'All', id: 0 } });
    }
    if (name === 'categories') {
      return setStatus({
        ...status, statusNow: 'Categories', statusCategorie: { name: 'All', id: 0 } });
    }
    return setStatus({
      ...status, statusNow: 'Movies', statusCategorie: { name: 'All', id: 0 } });
  };
  return (
    <main width="100%" height="100%">
      <Header />
      <S.Section>
        <img src={ onePiece } alt="one piece" />
        <Link to="/explore/animes">
          <button type="button" name="animes" onClick={ handleClick }>Animes</button>
        </Link>
        {/* <Link to="/explore/categories">
          <button type="button" name="categories">Categories</button>
        </Link> */}
        <Link to="/explore/movies">
          <button type="button" onClick={ handleClick }>Movies</button>
        </Link>

      </S.Section>

      <Footbar />
    </main>
  );
};

export default Explore;
