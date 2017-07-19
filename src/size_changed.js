
const CheckDevice = (breakpoints)=>(width)=>{
  for (let dev in breakpoints){
    if (breakpoints[dev]){
      let {min, max} = breakpoints[dev];
      if (max === null && width > min) return dev;
      if (width > min && width < max) return dev;
    }
  }

  return null;
};

export default (breakpoints, device, width)=>{
  let currentWidth = width;
  const checker = CheckDevice(breakpoints);
  return (changeWidth)=>{
    if (changeWidth === currentWidth) return false;
    currentWidth = changeWidth;
    let newDevice = checker(currentWidth);
    if (newDevice === null) return false;
    if (device() === newDevice) return false;
    device(newDevice);
    return true;
  };
};
