import ManageDevice from './manage_device';
import TrackChange from './track_changes';
import SizeChanged from './size_changed';

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints; // works on most browsers // works on IE10/11 and Surface

export default bp => {
  const breakpoints = bp || {
    mobile: { min: 0, max: 767 },
    tablet: { min: 768, max: 1023 },
    desktop: { min: 1024, max: null },
  };

  let deviceWidth = window.innerWidth;
  let device = ManageDevice(breakpoints, deviceWidth);

  let callbacks = [];
  let touch = isTouchDevice();
  const changeCheck = SizeChanged(breakpoints, device, deviceWidth);

  const obj = {
    addCallback(cb) {
      if (Object.prototype.toString.call(cb) === '[object Function]') {
        cb = [cb];
      }
      callbacks = callbacks.concat(cb);

      return obj;
    },
    getDevice() {
      return device();
    },
    getWidth() {
      return deviceWidth;
    },
    track() {
      TrackChange(e => {
        let width = window.innerWidth;
        let check = changeCheck(width);
        if (check) {
          deviceWidth = width;
          callbacks.forEach(cb => {
            cb(device(), width);
          });
        }
      });
    },
    touchAvailable() {
      return touch;
    },
  };

  return obj;
};
