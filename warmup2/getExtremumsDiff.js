export default function getExtremumsDiff(input = []) {
  let min = input[0];
  let max = input[0];

  input.forEach((item) => {
    if (item > max) {
      max = item;
    } else if (item < min) {
      min = item;
    }
  });

  return max - min;
}
