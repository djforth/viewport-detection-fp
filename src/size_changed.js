import CheckDevice from './check_device';

export default (breakpoints, device, width) => {
  let currentWidth = width;
  const checker = CheckDevice(breakpoints);
  device(checker(currentWidth));
  return changeWidth => {
    if (changeWidth === currentWidth) return false;
    currentWidth = changeWidth;
    let newDevice = checker(currentWidth);
    if (newDevice === null) return false;
    if (device() === newDevice) return false;
    device(newDevice);
    return true;
  };
};
