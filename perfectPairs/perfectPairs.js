const perfectPairs = (arr, n) => {
  let indexSum = [];

  arr.forEach((element, i) => {
    for (let index = i + 1; index < arr.length; index++) {
      if (element + arr[index] === n) {
        indexSum.push(i + index);
      }
    }
  });

  console.log("result", Math.min(...indexSum));
};

perfectPairs([1, 2, 2, 5, 3], 4);
