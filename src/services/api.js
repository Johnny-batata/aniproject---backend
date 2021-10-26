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
  const dataNew = data.data.map(async ({
    id, attributes: { titles: { en_jp }, updatedAt, posterImage: { tiny }, averageRating,
    }, totalEpisodes, categoriasId,
  }) => ({ id, title: en_jp, updatedAt, tiny, averageRating, offset, categoriasId, episodesData: totalEpisodes }));

  const totalLength = [];
  for (let i = 1; (i * 40) <= (data.totalLength + 40); i += 1) {
    totalLength.push(i);
  }
  return { totalLength, dataNew: await Promise.all(dataNew) };
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
  console.log(data, 'data');
  if (data.err) { return invokeAlert(data.err.message); }
  return data.data;
};

const getAllAnimes = async (offset = 0, filter = 'averageRating') => {
  const endpoint = `http://localhost:10000/animes/${offset}`;
  const token = localStorage.getItem('token');
  const responses = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
      body: JSON.stringify({ ...filter }),
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
  console.log(responses, 'responses');

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }
  const dataNew = data.data.map(async ({
    id, attributes: { titles: { en_jp }, updatedAt, posterImage: { tiny }, averageRating,
    }, totalEpisodes, categoriasId,
  }) => ({ id, title: en_jp, updatedAt, tiny, averageRating, offset, categoriasId, episodesData: totalEpisodes }));

  const totalLength = [];
  for (let i = 1; (i * 40) <= (data.totalLength + 40); i += 1) {
    totalLength.push(i);
  }
  return { totalLength, dataNew: await Promise.all(dataNew) };
};

const getAnimesByCategorys = async (offset = 0, categoryId, status) => {
  const endpoint = `http://localhost:10000/animesCategorys/${offset}/${categoryId}/${status}`;
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
  const dataNew = data.data.map(async ({
    id, attributes: { titles: { en_jp }, updatedAt, posterImage: { tiny }, averageRating,
    }, totalEpisodes, categoriasId,
  }) => ({ id, title: en_jp, updatedAt, tiny, averageRating, offset, categoriasId, episodesData: totalEpisodes }));

  const totalLength = [];
  for (let i = 1; (i * 40) <= (data.totalLength + 40); i += 1) {
    totalLength.push(i);
  }
  return { totalLength, dataNew: await Promise.all(dataNew) };
};

const getProfileInfo = async (email) => {
  const endpoint = 'http://localhost:10000/profile';
  const token = localStorage.getItem('token');

  console.log(email, 'get info profile');
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({ email }),

  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }
  return data.user;
};

export {
  registerNewUser,
  loginUser, getAnimesByStatus, getAnimesCategorys,
  getAnimesByCategorys, getProfileInfo, getAllAnimes };
