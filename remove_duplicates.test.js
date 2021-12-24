import remove_duplicates from "./remove_duplicates";

test('Removes duplicate characters from string', () => {
  expect(remove_duplicates('aabbaaccb')).toBe('abc');
});
