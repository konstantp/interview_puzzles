import groupAnagrams from "./groupAnagrams";

describe('groupAnagrams:', () => {
  const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

  it('should group the anagrams together from given array of strings', () => {
    expect(groupAnagrams(input)).toEqual([
      ["ate", "eat", "tea"],
      ["nat", "tan"],
      ["bat"]
    ]);
  });
});
