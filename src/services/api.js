import invokeAlert from '../helpers/functions/invokeAlert';

const registerNewUser = async (newUSer) => {
  const endpoint = 'http://localhost:10000/signup';
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newUSer }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }

  return data;
};

const loginUser = async (user) => {
  const endpoint = 'http://localhost:10000/login';
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }

  return data;
};

export { registerNewUser, loginUser };
