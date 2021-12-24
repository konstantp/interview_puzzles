export default function removeDuplicates(input = '') {
  if (!input) {
    return '';
  }

  return [...input.trim()].reduce((uniques, character) => {
    if (character && !uniques.includes(character)) {
      uniques.push(character);
    }
    return uniques;
  }, []).join('');
}
