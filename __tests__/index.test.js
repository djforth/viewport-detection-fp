import Viewport from 'index';

describe('Main Viewport detection method', ()=>{
  let vp;
  beforeAll(()=>{
    vp = Viewport();
  });

  test('should return a obj with functions', ()=>{
    const methods = ['addCallback', 'getDevice', 'getWidth', 'track', 'touchAvailabile'];
    expect(Object.keys(vp)).toEqual(methods);

    methods.forEach((fn)=>{
      expect(vp[fn]).toBeFunction();
    });
  });

  test('Should return device', ()=>{
    expect(vp.getDevice()).toEqual('mobile');
  });

  test('Should return width', ()=>{
    expect(vp.getWidth()).toEqual(window.innerWidth);
  });

  test('Should return touch available', ()=>{
    expect(vp.touchAvailabile()).toBeFalsy();
  });
});
