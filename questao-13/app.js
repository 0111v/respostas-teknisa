function getNumbers(list) {
  let max1 = 0
  let max2 = 0
  let max3 = 0

  for (let i = 0; i < list.length; i++) {
    const num = list[i];

    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  }

  return [max1, max2, max3];
}

console.log(getNumbers([7, 1, 9, 3, 12, 8]));