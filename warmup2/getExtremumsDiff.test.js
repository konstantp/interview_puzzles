import getExtremumsDiff from "./getExtremumsDiff";

describe('getExtremumsDiff:', () => {
  const input = [-100, 0, 1000, 2500, 500, 10, 3000];
  it('should find the difference between the highest and the lowest point', () => {
    expect(getExtremumsDiff(input)).toBe(3100);
  });
});
