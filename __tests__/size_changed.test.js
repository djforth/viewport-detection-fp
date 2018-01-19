import SizeChanged from 'size_changed';

describe('SizeChanged', () => {
  let dev = 'mobile';
  let tracker, device;
  let breakpoints = {
    mobile: { min: 0, max: 767 },
    tablet: { min: 768, max: 992 },
    desktop: { min: 993, max: null },
  };

  beforeEach(() => {
    device = jest.fn(d => {
      if (!d) return dev;
      dev = d;
      return d;
    });

    tracker = SizeChanged(breakpoints, device, 500);
  });

  test('should return false if size matches', () => {
    expect(tracker(500)).toBeFalsy();
    expect(device).toHaveBeenCalledTimes(1);
  });

  test('should return false if device matches', () => {
    expect(tracker(700)).toBeFalsy();
    expect(device).toHaveBeenCalled();
  });

  test('should return true if device changed to tablet', () => {
    expect(tracker(900)).toBeTruthy();
    expect(device).toHaveBeenCalledTimes(3);
    expect(device).toHaveBeenLastCalledWith('tablet');
  });

  test('should return true if device changed to desktop', () => {
    expect(tracker(1000)).toBeTruthy();
    expect(device).toHaveBeenCalledTimes(3);
    expect(device).toHaveBeenLastCalledWith('desktop');
  });
});
