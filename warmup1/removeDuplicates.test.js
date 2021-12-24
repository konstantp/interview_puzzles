import removeDuplicates from "./removeDuplicates";

describe('removeDuplicates:', () => {
  it('should remove duplicate characters from string', () => {
    expect(removeDuplicates('aabbaaccb')).toBe('abc');
  });
});
