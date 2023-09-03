const myDate = () => {
  return new Date();
};

const myTime = () => {
  return new Date().getTime();
};

const FullYear = () => {
  return new Date().getFullYear();
};

module.exports = { myDate, myTime, FullYear };
