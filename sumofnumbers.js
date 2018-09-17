function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list, len) {
  let retVal = 0;
  if (len === 0) {
    retVal = list[len];
  } else {
    retVal = list[len] + sumRecursion(list, len - 1);
  }
  return retVal;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num);
}

const nums = [1, 2, 3, 4, 5]; // sum is 15

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
