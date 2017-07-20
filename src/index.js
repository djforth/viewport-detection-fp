
import ManageDevice from './manage_device';
import TrackChange from './track_changes';
import SizeChanged from './size_changed';

const isTouchDevice = ()=>{
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

export default (breakpoints)=>{
  breakpoints = breakpoints || {
    mobile: {min: 0, max: 767}
    , tablet: {min: 768, max: 992}
    , desktop: {min: 993, max: null}
  };

  let device = ManageDevice(breakpoints);
  let deviceWidth = window.innerWidth;
  let callbacks = [];
  let touch = isTouchDevice();
  const changeCheck = SizeChanged(
    breakpoints
    , device
    , deviceWidth
  );

  const obj = {
    addCallback(cb){
      if (Object.prototype.toString.call(cb) === '[object Function]'){
        cb = [cb];
      }
      callbacks = callbacks.concat(cb);

      return obj;
    }
    , getDevice(){
      return device();
    }
    , getWidth(){
      return deviceWidth;
    }
    , track(){
      TrackChange((e)=>{
        let width = window.innerWidth;
        let check = changeCheck(width);
        if (check){
          deviceWidth = width;
          callbacks.forEach((cb)=>{
            cb(device(), width);
          });
        }
      });
    }
    , touchAvailabile(){
      return touch;
    }
  };

  return obj;
};
