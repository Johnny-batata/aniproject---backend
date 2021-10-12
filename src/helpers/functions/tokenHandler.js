import checkPath from './checkPath';

const tokenHandler = (token, history, location) => {
  const verifyPath = checkPath(location);

  if (!verifyPath && !token) return history.push('/');
};

export default tokenHandler;
