const perfectPairs = (arr, n) => {
  const indexSum = [];

  arr.forEach((element, i) => {
    for (let index = i + 1; index < arr.length; index++) {
      if (element + arr[index] === n) {
        indexSum.push(i + index);
      }
    }
  });

  console.log("result", Math.min(...indexSum));
};

perfectPairs([1, 3, 2, 4], 4);
