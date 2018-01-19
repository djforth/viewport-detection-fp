import ManageDevice from 'manage_device';

describe('ManageDevice', () => {
  let device;
  let breakpoints = {
    mobile: { min: 0, max: 767 },
    tablet: { min: 768, max: 992 },
    desktop: { min: 993, max: null },
  };

  beforeAll(() => {
    device = ManageDevice(breakpoints, 800);
  });

  test('Default should tablet', () => {
    expect(device()).toEqual('tablet');
  });

  test('should change the device if expected device', () => {
    expect(device('tablet')).toEqual('tablet');
  });

  test('will not change the device if not expected device', () => {
    expect(device('phablet')).toEqual('tablet');
  });
});
