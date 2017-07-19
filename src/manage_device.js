const include = (arr, obj)=>(arr.indexOf(obj) != -1);


export default (breakpoints)=>{
  let device = 'mobile';
  let expected = Object.keys(breakpoints);

  return (d)=>{
    if (!include(expected, d)) return device;
    device = d;
    return device;
  };
};
