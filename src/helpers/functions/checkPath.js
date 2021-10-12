const checkPath = (location) => {
  const path = ['/', '/cadastrar'];
  const check = path.some((el) => location.pathname === el);
  return check;
};

export default checkPath;
