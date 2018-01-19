import CheckDevice from './check_device';

const include = (arr, obj) => arr.indexOf(obj) != -1;

export default (breakpoints, width) => {
  let device = CheckDevice(breakpoints)(width);
  let expected = Object.keys(breakpoints);
  return d => {
    if (!include(expected, d)) return device;
    device = d;
    return device;
  };
};
