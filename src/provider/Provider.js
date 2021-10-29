/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import checkPath from '../helpers/functions/checkPath';
import tokenHandler from '../helpers/functions/tokenHandler';
import {
  getAnimesByStatus,
  getAnimesByCategorys, getProfileInfo, getAllAnimes, getAllMovies, getAnimeById } from '../services/api';

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
        All: {
          animes: [],
          buttons: [],
        },
      },
    },
    incoming: {
      categories: {
        All: {
          animes: [],
          buttons: [],
        },
      },
    },
    finished: {
      categories: {
        All: {
          animes: [],
          buttons: [],
        },
      },
    },
    All: {
      categories: {
        All: {
          animes: [],
          buttons: [],
        },
      },
    },
    Categories: {
      categories: {
        All: {
          animes: [],
          buttons: [],
        },
      },
    },
    Movies: {
      categories: {
        All: {
          animes: [],
          buttons: [],
        },
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
  const [profileData, setProfileData] = useState([]);
  const [barOn, setBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [animeOnDetails, setAnimeOnDetails] = useState({});

  const location = useLocation();
  const history = useHistory();

  const fetchProfileData = async () => {
    const email = localStorage.getItem('usermail');

    const data = await getProfileInfo(email);

    setProfileData([data]);
  };

  const checkCasting = async (curr, path) => {
    const { [status.statusNow]: { categories } } = casting;
    if (path === '/inicio') return getAnimesByStatus(curr, status.statusNow);
    if (path === '/explore/animes') return getAllAnimes(curr);
    if (path === '/explore/movies') return getAllMovies(curr);

    return true;
  };

  const fetchCast = async (curr, loc) => {
    const { [status.statusNow]: { categories } } = casting;

    const castingData = await checkCasting(curr, loc);
    console.log('casting', castingData);

    const dataOfCasting = casting[status.statusNow].categories[status.statusCategorie.name].animes;
    const Animedata = dataOfCasting.concat(castingData.dataNew);

    setButtonsLength(castingData.totalLength);
    return setCasting({ ...casting,
      [status.statusNow]: {
        categories: {
          ...categories,
          [status.statusCategorie.name]: {
            ...[status.statusCategorie.name],
            animes: Animedata,
            buttons: castingData.totalLength,
          },
        },
      },
    });
  };

  const fetchCastByCategories = async (categoryId) => {
    const { [status.statusNow]: { categories } } = casting;
    const castingData = await getAnimesByCategorys(0, categoryId, status.statusNow);
    console.log(categoryId, status.statusNow, 'status', castingData);

    const dataOfCasting = casting[status.statusNow].categories[status.statusCategorie.name] || [];
    const Animedata = dataOfCasting.concat(castingData.dataNew);

    setButtonsLength(castingData.totalLength);
    return setCasting({ ...casting,
      [status.statusNow]: {
        categories: {
          ...categories,
          [status.statusCategorie.name]: {
            ...[status.statusCategorie.name],
            animes: Animedata,
            buttons: castingData.totalLength,
          },
        },
      },
    });
  };

  const fetchCastById = async (id) => {
    const animes = await getAnimeById(id);
    console.log(animes.dataNew, 'fetchcast by id');
    console.log('fetchcast by id');
    return setAnimeOnDetails(animes.dataNew);
  };

  const sideBarHandler = () => {
    setBar(!barOn);
  };

  const searchBarHandler = () => {
    setSearchBar(!searchBar);
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
    profileData,
    setProfileData,
    barOn,
    setBar,
    sideBarHandler,
    searchBar,
    setSearchBar,
    searchBarHandler,
    animeOnDetails,
    fetchCastById,
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    tokenHandler(token, history, location);
    fetchProfileData();
  }, []);

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
