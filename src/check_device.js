export default breakpoints => width => {
  for (let dev in breakpoints) {
    if (breakpoints[dev]) {
      let { min, max } = breakpoints[dev];
      if (max === null && width >= min) return dev;
      if (width >= min && width < max) return dev;
    }
  }

  return null;
};
