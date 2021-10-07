/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';
import { getAnimesCategorys } from '../services/api';

const AnimesCards = () => {
  const { casting, buttonHandler: { currentButton }, buttonsLength, buttonHandler, setButtonHandler, fetchCast, status, categorys, setCategorys } = useContext(Context);

  const fetchCategorys = async () => {
    const data = await getAnimesCategorys();
    return setCategorys({ ...categorys, data });
  };
  useEffect(() => {
    fetchCast(currentButton * 40);
    fetchCategorys();
  }, []);

  const changeCategory = ({ target: { value } }) => {

  };

  const renderCategorys = () => (
    <S.Categorydiv>
      {categorys.data.map(({ attributes: { title } }, index) => (<button key={ index } type="button">{title}</button>))}
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
        <FaStar icon="fa-solid fa-star" />
      </p>
      <button type="button">Ver mais </button>
    </S.div>
  ));
  const handleClick = (value) => {
    const verifyOffset = buttonHandler.buttonsHistory.some((el) => el === value);
    console.log(verifyOffset, 'verify offset', buttonHandler, value);
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
    if (casting[status.statusNow].categories[status.statusCategorie]) return true;
    return false;
  };
  return (
    <div>
      { categorys.data && renderCategorys()}

      <S.section>
        {/* {console.log(casting[status.statusNow].categories[status.statusCategorie].filter((el) => el.offset === currentButton * 40), currentButton * 40)} */}
        {/* {console.log('filtro', casting[status.statusNow][status.statusCategorie].filter((el) => el))} */}
        { checkRender() && renderAnimeCards(casting[status.statusNow].categories[status.statusCategorie].filter((el) => el.offset === currentButton * 40)) }
        <S.ButtonsDiv>
          { buttonsLength && renderButtons() }
        </S.ButtonsDiv>

      </S.section>

    </div>
  );
};

export default AnimesCards;
