export default function remove_duplicates(input = '') {
  if (!input) {
    return '';
  }

  return [...input].reduce((uniques, character) => {
    if (!uniques.includes(character)) {
      uniques.push(character);
    }
    return uniques;
  }, []).join('');
}
