function solution(inputArray) {
  let result = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > result) {
      result = inputArray[i] * inputArray[i + 1];
    }
  }
  console.log(result);
}

const arr = [-23, 4, -3, 8, -12];

solution(arr);
