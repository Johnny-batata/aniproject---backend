import React, { useContext } from 'react';
import { FaUser, FaCompass, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as S from '../styles/components/footer';
import { Context } from '../provider/Provider';

const Footbar = () => {
  const { status, setStatus } = useContext(Context);

  const handleClick = () => {
    setStatus({ ...status, statusNow: 'current', statusCategorie: { name: 'All', id: 0 } });
  };

  return (
    <S.Footer>
      <Link to="/explore">
        <FaCompass icon="fa-solid fa-compass" />
      </Link>
      <Link to="/inicio" onClick={ handleClick }>
        <FaHome />
      </Link>
      <Link to="/profile">
        <FaUser icon="fa-solid fa-user" />
      </Link>
    </S.Footer>
  );
};
export default Footbar;
