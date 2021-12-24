export default function groupAnagrams(input = []) {
  const groups = {};
  input.forEach((item) => {
    const groupKey = [...item].sort().join('');
    if (groupKey in groups) {
      groups[groupKey].push(item);
      groups[groupKey].sort();
    } else {
      groups[groupKey] = [item];
    }
  });
  return Object.values(groups)
}
