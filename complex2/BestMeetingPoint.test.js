
import BestMeetingPoint from "./BestMeetingPoint";

describe('BestMeetingPoint:', () => {
  const locations = [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ];
  const meetingPoint = new BestMeetingPoint(locations);

  it('should detect and limits of the area of possible best solutions', () => {
    expect(meetingPoint.minRow).toBe(0);
    expect(meetingPoint.maxRow).toBe(2);
    expect(meetingPoint.minCol).toBe(0);
    expect(meetingPoint.maxCol).toBe(4);
  });

  it('should detect and return people positions', () => {
    expect(meetingPoint.detectPeoplePositions()).toEqual([[0, 0], [0, 4], [2, 2]]);
  });

  it('should calculate steps between 2 locations', () => {
    expect(meetingPoint.calculateSteps([0, 0], [1, 2])).toBe(3);
    expect(meetingPoint.calculateSteps([2, 3], [1, 2])).toBe(2);
  });


  it('should calculate possibilities', () => {
    expect(meetingPoint.calculatePossibilities()).toEqual({ "0-0": 8, "0-1": 7, "0-2": 6, "0-3": 7, "0-4": 8, "1-0": 9, "1-1": 8, "1-2": 7, "1-3": 8, "1-4": 9, "2-0": 10, "2-1": 9, "2-2": 8, "2-3": 9, "2-4": 10 });
  });

  it('should detect best meeting point', () => {
    expect(meetingPoint.detectMeetingPoint()).toEqual([0, 2]);
  });
});
