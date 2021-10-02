import invokeAlert from '../functions/invokeAlert';
import { INVALID_EMAIL_PASSWORD, EMPTY_FIELD } from '../errorMsgs';

export const validateIfFieldsAreFilled = (data) => {
  const { email, password } = data;
  if (!email || !password) {
    return invokeAlert(EMPTY_FIELD);
  }

  return true;
};

export const validateIfFieldsAreCorrect = (data) => {
  const { email, password } = data;

  const mailFormat = /[a-z]+@[a-z]+.com/g;
  const less = 6;
  if (!validateIfFieldsAreFilled(data)) return;

  if (!email.match(mailFormat)
  && password.length < less) return invokeAlert(INVALID_EMAIL_PASSWORD);

  return true;
};
