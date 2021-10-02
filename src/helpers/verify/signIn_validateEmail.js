import invokeAlert from '../functions/invokeAlert';
import { INVALID_EMAIL_PASSWORD, EMPTY_FIELD, INVALID_NICKNAME_NAME } from '../errorMsgs';

export const validateIfFieldsAreFilled = (data) => {
  const { name, nickname, birthdate, email, password } = data;
  if (!name || !nickname || !birthdate || !email || !password) {
    return invokeAlert(EMPTY_FIELD);
  }

  return true;
};

export const validateIfFieldsAreCorrect = (data) => {
  const { name, nickname, email, password } = data;

  const mailFormat = /[a-z]+@[a-z]+.com/g;
  const less = 6;
  const nameLess = 6;
  validateIfFieldsAreFilled(data);

  if (nickname.length < less || name < nameLess) return invokeAlert(INVALID_NICKNAME_NAME);
  if (!email.match(mailFormat)
  && password.length < less) return invokeAlert(INVALID_EMAIL_PASSWORD);

  return true;
};
