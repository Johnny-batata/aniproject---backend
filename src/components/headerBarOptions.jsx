import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { Context } from '../provider/Provider';

import * as S from '../styles/components/headerBarOptions';

const HeaderBarOptions = () => {
  const { profileData, sideBarHandler } = useContext(Context);

  return (
    <S.Div>
      { profileData && profileData.map(({ _id, name, nickname, email }, index) => (
        <section key={ index }>
          <FaBars
            icon="fa-solid fa-bars"
            onClick={ () => sideBarHandler() }
          />
          <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt={ name } />
          <h1>
            @
            {nickname}
            {' '}
          </h1>
          <hr />
        </section>))}
      <button type="button">My animes</button>
      <button type="button">My characters</button>
      <button type="button">History</button>
      <button type="button">Logout</button>

    </S.Div>
  );
};

export default HeaderBarOptions;
