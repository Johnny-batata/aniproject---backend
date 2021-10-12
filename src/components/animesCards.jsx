/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';
import { getAnimesCategorys } from '../services/api';
import Footbar from './footbar';

const AnimesCards = () => {
  const { casting, buttonHandler: {
    currentButton }, buttonsLength, buttonHandler, setButtonHandler, searchBar, setButtonsLength, fetchCast, status, categorys, setCategorys, setStatus, fetchCastByCategories } = useContext(Context);

  const fetchCategorys = async () => {
    const data = await getAnimesCategorys();
    return setCategorys({ ...categorys, data });
  };
  useEffect(() => {
    fetchCast(currentButton * 40);
    fetchCategorys();
  }, []);

  useEffect(() => {
    const { statusCategorie: { id } } = status;
    const verifyAnimes = Object.keys(casting[status.statusNow].categories).some((el) => el === status.statusCategorie.name);
    console.log('verify', verifyAnimes);
    if (verifyAnimes) {
      return setButtonsLength(casting[status.statusNow].categories[status.statusCategorie.name].buttons);
    }

    fetchCastByCategories(id);
  }, [status.statusCategorie.name]);

  const changeCategory = ({ target: { value, name } }) => {
    setStatus({ ...status, statusCategorie: { name, id: value } });
    setButtonHandler({ ...buttonHandler, currentButton: [0], buttonsHistory: [0] });
  };

  const renderCategorys = () => (
    <S.Categorydiv marginTop={ !searchBar ? '56px' : '0px' }>
      <button
        type="button"
        onClick={ changeCategory }
        value="0"
        name="All"
      >
        All
      </button>

      {categorys.data.map(({ attributes: { title }, id }, index) => (
        <button
          key={ index }
          type="button"
          onClick={ changeCategory }
          value={ id }
          name={ title }
        >
          {title}

        </button>
      ))}
    </S.Categorydiv>
  );

  const renderAnimeCards = (dataToMap) => dataToMap.map((el, index) => (
    <S.div key={ index }>
      <img src={ el.tiny } alt={ el.title } />
      <p>
        {el.title}
      </p>
      <p>
        {el.averageRating}
        {' '}
        <FaStar icon="fa-solid fa-star" />
      </p>
      <p>
        nº de episódios:
        {' '}
        {el.episodesData}
      </p>
      <button type="button">Ver mais </button>
    </S.div>
  ));
  const handleClick = (value) => {
    const verifyOffset = buttonHandler.buttonsHistory.some((el) => el === value);
    if (verifyOffset === true) return setButtonHandler({ ...buttonHandler, currentButton: value });
    fetchCast(value * 40);
    setButtonHandler({ ...buttonHandler, currentButton: value, buttonsHistory: [...buttonHandler.buttonsHistory, value] });
  };

  const renderButtons = () => buttonsLength.map((el, index) => (
    <button type="button" onClick={ () => handleClick(index) } key={ index }>
      {el}
    </button>
  ));

  const checkRender = () => {
    if (casting[status.statusNow].categories[status.statusCategorie.name]) {
      return true;
    }
    return false;
  };
  return (
    <div>
      { categorys.data && renderCategorys()}

      <S.section>
        { checkRender() && renderAnimeCards(casting[status.statusNow].categories[status.statusCategorie.name].animes.filter((el) => el.offset === currentButton * 40)) }
        <S.ButtonsDiv>
          { buttonsLength && renderButtons() }
        </S.ButtonsDiv>

      </S.section>

      <Footbar />
    </div>
  );
};

export default AnimesCards;
