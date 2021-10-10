/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAnimesByStatus, getAnimesByCategorys } from '../services/api';

const Context = createContext();

const Provider = ({ children }) => {
  const user = {
    email: '',
    password: '',
  };

  const defaultButtonHandler = {
    currentButton: 0,
    buttonsHistory: [0],
    offset: 0,
  };

  const defaultCasting = {
    current: {
      categories: {
        All: [],
      },
    },
    incoming: {
      categories: {
        All: [],
      },
    },
    finished: {
      categories: {
        All: [],
      },
    },
  };

  const defaultStatus = {
    statusNow: 'current',
    statusCategorie: { name: 'All', id: 0 },
  };
  const [userInfo, setUserInfo] = useState(user);
  const [casting, setCasting] = useState(defaultCasting);
  const [buttonsLength, setButtonsLength] = useState([]);
  const [buttonHandler, setButtonHandler] = useState(defaultButtonHandler);
  const [status, setStatus] = useState(defaultStatus);
  const [categorys, setCategorys] = useState([]);

  const fetchCast = async (curr) => {
    const { [status.statusNow]: { categories } } = casting;
    const castingData = await getAnimesByStatus(curr, status.statusNow);

    const dataOfCasting = casting[status.statusNow].categories[status.statusCategorie.name];
    const Animedata = dataOfCasting.concat(castingData.dataNew);

    setButtonsLength(castingData.totalLength);
    return setCasting({ ...casting,
      [status.statusNow]: {
        categories: {
          ...categories,
          [status.statusCategorie.name]: Animedata,

        },
      },
    });
  };

  const fetchCastByCategories = async (categoryId) => {
    const { [status.statusNow]: { categories } } = casting;
    const castingData = await getAnimesByCategorys(0, categoryId, status.statusNow);

    const dataOfCasting = casting[status.statusNow].categories[status.statusCategorie.name] || [];
    const Animedata = dataOfCasting.concat(castingData.dataNew);

    setButtonsLength(castingData.totalLength);
    return setCasting({ ...casting,
      [status.statusNow]: {
        categories: {
          ...categories,
          [status.statusCategorie.name]: Animedata,
        },
      },
    });
  };

  const context = {
    userInfo,
    setUserInfo,
    casting,
    setCasting,
    buttonsLength,
    setButtonsLength,
    buttonHandler,
    setButtonHandler,
    fetchCast,
    status,
    setStatus,
    categorys,
    setCategorys,
    fetchCastByCategories,
  };

  const location = useLocation();
  const history = useHistory();
  const tokenHandler = (token) => {
    const path = ['/', '/cadastrar'];
    const checkPath = path.some((el) => location.pathname === el);

    if (!checkPath && !token) return history.push('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(location);
    tokenHandler(token);
  }, []);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
