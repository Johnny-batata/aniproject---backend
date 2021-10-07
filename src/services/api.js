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

const getAnimesByStatus = async (offset = 0, status = 'CURRENT') => {
  console.log(offset, 'offset do fetch');

  const endpoint = `http://localhost:10000/animesStatus/${offset}/${status.toLowerCase()}`;
  const token = localStorage.getItem('token');

  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }
  const dataNew = data.data.map(({
    id, attributes: { titles: { en_jp }, updatedAt, posterImage: { tiny }, averageRating },
  }) => ({ id, title: en_jp, updatedAt, tiny, averageRating, offset }));
  console.log(data);

  const totalLength = [];
  for (let i = 1; (i * 40) <= (data.totalLength + 40); i += 1) {
    // if ((el * 40)  >  (buttonsLength + 40) ) return ;

    console.log(i);
    totalLength.push(i);
  }
  console.log(totalLength);

  return { dataNew, totalLength };
};

const getAnimesCategorys = async (offset = 0) => {
  const endpoint = `http://localhost:10000/categorys/${offset}`;
  const token = localStorage.getItem('token');
  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }
  return data.data;
};

export { registerNewUser, loginUser, getAnimesByStatus, getAnimesCategorys };
