/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
// import { getAnimesCategorys } from '../services/api';
import Header from '../components/header';
import * as S from '../styles/pages/Home';
import AnimesCards from '../components/animesCards';
import { Context } from '../provider/Provider';

const Home = () => {
  // const [categorys, setCategorys] = useState([]);
  const { casting, buttonHandler: { currentButton }, fetchCast } = useContext(Context);

  // const handleClick = ({ target: { value } }) => {
  //   console.log(value);
  //   fetchCast(current * 40, value);
  // };

  // const fetchCategorys = async () => {
  //   const data = await getAnimesCategorys();
  //   return setCategorys({ ...categorys, data });
  // };
  // useEffect(() => {
  //   fetchCategorys();
  // }, []);

  // const renderCategorys = () =>
  //   // console.log('entrou');
  //   (
  //     <div>
  //       {categorys.data.map(({ attributes: { title } }, index) => (<button key={ index } type="button">{title}</button>))}
  //     </div>
  //   );
  return (
    <div>
      <S.div>
        <Header />
        <select>
          <option>Casting </option>
          <option>Incoming</option>
        </select>
        {/* { categorys.data && renderCategorys()} */}
      </S.div>
      <AnimesCards />

      {/* {console.log(categorys.data, 'eu')} */}
    </div>
  );
};
export default Home;
