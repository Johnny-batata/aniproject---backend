/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { TitleH2, MainDiv, SubTitle, Section, LogoImg } from '../styles/pages/Login';
import Logo from '../imgs/iconedoApp3.png';
import {
  Input, EmailContainer, PasswordContainer, InputContainers, ButtonLogin,
} from '../styles/pages/LoginInputs';
import { loginUser } from '../services/api';

import { validateIfFieldsAreCorrect } from '../helpers/verify/logIn_validate';

import { Context } from '../provider/Provider';

const Login = () => {
  const { userInfo, setUserInfo } = useContext(Context);
  const [visible, setVisible] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleclick = async () => {
    if (!validateIfFieldsAreCorrect(userInfo)) {
      return;
    }
    const login = await loginUser(userInfo);
    if (login) {
      localStorage.setItem('token', login.token);
      localStorage.setItem('usermail', userInfo.email);
      return setRedirect(true);
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const renderInputs = () => (
    <InputContainers>
      <EmailContainer>
        <FaEnvelope icon="fa-light fa-envelope" />
        <Input name="email" type="text" onChange={ handleChange } />
      </EmailContainer>
      <PasswordContainer>
        <FaLock name="teste" icon="fa-solid fa-lock" />
        <Input
          name="password"
          onChange={ handleChange }
          type={ visible ? 'text' : 'password' }
        />
        <div>
          { visible ? <FaEye
            icon="fa-solid fa-eye"
            onClick={ () => setVisible(!visible) }
          /> : <FaEyeSlash
            icon="fa-solid fa-eye-slash"
            onClick={ () => setVisible(!visible) }
          /> }
        </div>
      </PasswordContainer>
      <p>esqueceu a senha?</p>
      <ButtonLogin type="submit" onClick={ handleclick }>Entrar</ButtonLogin>
    </InputContainers>
  );
  return (
    <MainDiv>
      <LogoImg src={ Logo } alt="Logo" />
      <TitleH2>Bem Vindo!</TitleH2>
      <SubTitle>Acesse sua conta aqui!</SubTitle>
      {renderInputs()}
      <Section>
        <p>Não tem conta? </p>
        <h3>Se inscreva!</h3>
      </Section>
      {redirect && <Redirect to="/inicio" />}
    </MainDiv>
  );
};
export default Login;
