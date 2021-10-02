/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Context = createContext();

const Provider = ({ children }) => {
  const user = {
    email: '',
    password: '',
  };
  const [userInfo, setUserInfo] = useState(user);

  const context = {
    userInfo, setUserInfo,
  };

  const tokenHandler = (token) => {
    const location = useLocation();

    if (location.pathname !== '/' && location.pathname !== '') { console.log(token, 'token'); }
  };

  useEffect(() => {
    axios.get('https://kitsu.io/api/edge/anime')
      .then((data) => { console.log(data); });
    const token = localStorage.getItem('token');
    console.log(location);
    tokenHandler(token);
  }, []);

  useEffect(() => {

  });

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };
