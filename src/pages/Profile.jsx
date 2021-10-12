/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import Header from '../components/header';
import FootBar from '../components/footbar';
import * as S from '../styles/pages/Profile';
import { Context } from '../provider/Provider';

const Profile = () => {
  const { profileData } = useContext(Context);
  return (
    <main>
      <Header />
      <S.Div>
        { profileData && profileData.map(({ _id, name, nickname, email }, index) => (
          <section key={ index }>
            <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt={ name } />
            <h1>
              @
              {nickname}
              {' '}
            </h1>
            <p>{email}</p>
          </section>))}
      </S.Div>
      <S.Section>
        <nav>
          <button type="button">My animes</button>
          <button type="button">History</button>
          <button type="button">Logout</button>
        </nav>
      </S.Section>

      <FootBar />
    </main>
  );
};

export default Profile;
