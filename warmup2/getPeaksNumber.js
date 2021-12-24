function isPeak(input = [], index) {
  return input[index - 1] < input[index] && input[index] > input[index + 1];
}

// compare first item in a list only with next item
function firstIsPeak(input = []) {
  return input[1] != undefined && input[0] > input[1];
}

// compare last item in a list only with previous item
function lastIsPeak(input = []) {
  return input[input.length - 1] > input[input.length - 2]
}

export default function getPeaksNumber(input = []) {
  const peaks = input.filter((item, index) => {
    if (index == 0) {
      return firstIsPeak(input);
    } else if (index == input.length - 1) {
      return lastIsPeak(input)
    }
    return isPeak(input, index);
  });

  return peaks.length;
}
