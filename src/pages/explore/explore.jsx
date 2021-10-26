import React from 'react';
import { Link } from 'react-router-dom';
import Footbar from '../../components/footbar';
import Header from '../../components/header';
import * as S from '../../styles/pages/explore';
import onePiece from '../../imgs/onePieceExplore.png';

const Explore = () => (
  <main width="100%" height="100%">
    <Header />
    <S.Section>
      <img src={ onePiece } alt="one piece" />
      <Link to="/explore/animes">
        <button type="button">Animes</button>
      </Link>
      <button type="button">Categories</button>
      <button type="button">Movies</button>
    </S.Section>

    <Footbar />
  </main>
);

export default Explore;
