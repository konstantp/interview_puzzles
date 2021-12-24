import getPeaksNumber from "./getPeaksNumber";

describe('getPeaksNumber:', () => {
  const input = [-100, 0, 1000, 2500, 500, 10, 3000];
  it('should find the number of peaks', () => {
    expect(getPeaksNumber(input)).toBe(2);
  });
});
