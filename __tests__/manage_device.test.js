import ManageDevice from 'manage_device';

describe('ManageDevice', ()=>{
  let device;
  beforeAll(()=>{
    device = ManageDevice({mobile: 'iphone', tablet: 'iPad', desktop: 'macbook'});
  });

  test('Default should return mobile', ()=>{
    expect(device()).toEqual('mobile');
  });

  test('should change the device if expected device', ()=>{
    expect(device('tablet')).toEqual('tablet');
  });

  test('will not change the device if not expected device', ()=>{
    expect(device('phablet')).toEqual('tablet')
  });
});