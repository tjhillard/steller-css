module.exports = (className) => {
  const el = document.querySelector(className);
  return getComputedStyle(el);
};
