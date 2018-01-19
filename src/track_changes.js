export default tracker => {
  window.addEventListener('resize', tracker, false);

  window.addEventListener('orientationchange', tracker, false);
};
