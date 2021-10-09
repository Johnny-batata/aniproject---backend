/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';
import { getAnimesCategorys } from '../services/api';

const AnimesCards = () => {
  const { casting, buttonHandler: {
    currentButton }, buttonsLength, buttonHandler, setButtonHandler, setCasting, fetchCast, status, categorys, setCategorys, setStatus, fetchCastByCategories } = useContext(Context);

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

    fetchCastByCategories(id);
  }, [status.statusCategorie.name]);

  const changeCategory = ({ target: { value, name } }) => {
    // console.log('changeou', value);
    const { [status.statusNow]: { categories } } = casting;
    setStatus({ ...status, statusCategorie: { name, id: value } });
    setButtonHandler({ ...buttonHandler, currentButton: 0, buttonsHistory: 0 });

    const dataOfCasting = casting[status.statusNow].categories[status.statusCategorie.name];
    const verifyOffset = dataOfCasting.some(({ offset }) => offset === buttonHandler.currentButton * 40);
    console.log(verifyOffset);

    console.log('cy', [status.statusCategorie.name], dataOfCasting);
    if (!dataOfCasting) {
      console.log('entrou no console ');
      return fetchCastByCategories(value);
    }
    return setCasting({ ...casting,
      [status.statusNow]: {
        categories: {
          ...categories,
          [status.statusCategorie.name]: dataOfCasting,
        },
      },
    });

    // console.log(dataOfCasting, 'change category', casting[status.statusNow].categories);
  };

  const renderCategorys = () => (
    <S.Categorydiv>
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
    if (casting[status.statusNow].categories[status.statusCategorie.name]) return true;
    return false;
  };
  return (
    <div>
      { categorys.data && renderCategorys()}

      <S.section>
        { checkRender() && renderAnimeCards(casting[status.statusNow].categories[status.statusCategorie.name].filter((el) => el.offset === currentButton * 40)) }
        <S.ButtonsDiv>
          { buttonsLength && renderButtons() }
        </S.ButtonsDiv>

      </S.section>

    </div>
  );
};

export default AnimesCards;
