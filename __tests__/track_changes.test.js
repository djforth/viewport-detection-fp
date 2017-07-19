import TrackChanges from 'track_changes';
import SimulateEvent from './__helpers__/simulate_event';

describe('TrackChanges', ()=>{
  let spy;

  beforeAll(()=>{
    spy = jest.fn();
    TrackChanges(spy);
  });

  test('Should trigger on resize event', ()=>{
    SimulateEvent(window, 'resize');
    expect(spy).toHaveBeenCalled();
  });

  test('Should trigger on orientationchange event', ()=>{
    SimulateEvent(window, 'orientationchange');
    expect(spy).toHaveBeenCalled();
  });
});
