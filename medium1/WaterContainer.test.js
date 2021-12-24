import WaterContainer from "./WaterContainer";

describe('WaterContainer:', () => {
  const walls = [2, 3, 5, 3, 4, 3, 6, 3];
  const waterContainer = new WaterContainer(walls);

  it('should sort array of numbers', () => {
    expect(waterContainer.sort(walls)).toEqual([2, 3, 3, 3, 3, 4, 5, 6]);
  });

  it('should return mimum value from array', () => {
    expect(waterContainer.min(walls)).toBe(2);
  });

  it('should return maximum value from array', () => {
    expect(waterContainer.max(walls)).toBe(6);
  });

  it('should compose and return unit key', () => {
    expect(waterContainer.getUnitKey(0, 4)).toBe('0-4');
    expect(waterContainer.getUnitKey(1, 5)).toBe('1-5');
  });

  it('should decompose unit key and return wall indexes', () => {
    expect(waterContainer.getWallIndexes('0-4')).toEqual([0, 4]);
    expect(waterContainer.getWallIndexes('1-5')).toEqual([1, 5]);
  });

  it('should create units and calculare their volumes', () => {
    expect(waterContainer.createUnits()).toEqual({ '0-1': 2, '0-2': 4, '0-3': 6, '0-4': 8, '0-5': 10, '0-6': 12, '0-7': 14, '1-2': 3, '1-3': 6, '1-4': 9, '1-5': 12, '1-6': 15, '1-7': 18, '2-3': 3, '2-4': 8, '2-5': 9, '2-6': 20, '2-7': 15, '3-4': 3, '3-5': 6, '3-6': 9, '3-7': 12, '4-5': 3, '4-6': 8, '4-7': 9, '5-6': 3, '5-7': 6, '6-7': 3 });
  });

  it('should check if unit already has been processed and exists', () => {
    expect(waterContainer.unitExists('1-5')).toBe(true);
    expect(waterContainer.unitExists('3-8')).toBe(false);
  });

  it('should calculate unit volume by unit key', () => {
    expect(waterContainer.calculateVolume('1-5')).toBe(12);
    expect(waterContainer.calculateVolume('2-7')).toBe(15);
  });

  it('should detect the largest unit and return its volume', () => {
    expect(waterContainer.detectLargestUnit()).toBe(20);
  });
});
