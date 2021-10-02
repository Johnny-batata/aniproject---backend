import React, { useState } from 'react';
import {
  FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaSkull, FaBirthdayCake,
} from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import { registerNewUser } from '../services/api';
import { LogoImg } from '../styles/pages/Login';
import { MainDiv } from '../styles/pages/SignIn';
import { ButtonLogin } from '../styles/pages/LoginInputs';
import Logo from '../imgs/iconedoApp3.png';
import { validateIfFieldsAreCorrect } from '../helpers/verify/signIn_validateEmail';

const user = {
  name: '',
  nickname: '',
  birthdate: '',
  email: '',
  password: '',
};
const SignIn = () => {
  const [userInfo, setUserInfo] = useState(user);
  const [visible, setVisible] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleclick = async () => {
    if (!validateIfFieldsAreCorrect(userInfo)) {
      return;
    }
    const register = await registerNewUser(userInfo);
    console.log(register, 'eu aqui');
    if (register) return setRedirect(true);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const renderSections = () => (
    <section>
      <input
        type="text"
        name="name"
        onChange={ handleChange }
        placeholder="nome"
        required
      />
      <FaUser icon="fa-user fa-solid" />
      <FaSkull icon="fa-skul fa-solid" />
      <FaBirthdayCake icon="fa-solid fa-cake-candles" />
      <input
        type="text"
        onChange={ handleChange }
        name="nickname"
        placeholder="apelido"
        required
      />
      <input
        type="date"
        data-date=""
        onChange={ handleChange }
        name="birthdate"
        data-date-format="DD MMMM YYYY"
        required
      />
      <input
        type="text"
        name="email"
        onChange={ handleChange }
        placeholder="email"
        required
      />
      <FaEnvelope icon="fa-light fa-envelope" />
      <FaLock icon="fa-solid fa-lock" />
      <input
        type={ visible ? 'text' : 'password' }
        onChange={ handleChange }
        name="password"
        placeholder="senha"
        required
      />
      { visible ? <FaEye
        icon="fa-solid fa-eye"
        onClick={ () => setVisible(!visible) }
      /> : <FaEyeSlash
        icon="fa-solid fa-eye-slash"
        onClick={ () => setVisible(!visible) }
      /> }
    </section>
  );

  return (
    <MainDiv>
      <LogoImg src={ Logo } alt="Logo" />
      {renderSections()}
      <ButtonLogin type="submit" onClick={ handleclick }>Cadastrar</ButtonLogin>
      {redirect && <Redirect to="/" />}
    </MainDiv>
  );
};

export default SignIn;
