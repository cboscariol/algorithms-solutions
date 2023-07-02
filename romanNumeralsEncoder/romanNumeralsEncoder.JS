const romanNumeralsEncoder = (romanNumber) => {
  const valuesObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    const currentNumber = valuesObj[romanNumber[i]];
    //console.log("currentNumber", currentNumber);
    const nextNumber = valuesObj[romanNumber[i + 1]];
    //console.log("nextNumber", nextNumber);

    if (currentNumber < nextNumber) {
      result -= 1;
    } else {
      result += currentNumber;
    }
  }

  return result;
};

console.log(romanNumeralsEncoder("XXV"));
console.log(romanNumeralsEncoder("XIV"));
console.log(romanNumeralsEncoder("MDCLXVI"));
