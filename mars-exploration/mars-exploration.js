function solution1(message) {
  const correctMessage = "SOS";
  let superMessage = "";
  let notAllowedLetters = [];

  for (let i = 0; i < message.length; i++) {
    superMessage += message[i];

    const position = i + 1;
    if (position % 3 === 0 && position !== message.length) {
      superMessage += ",";
    }
  }

  for (const word of superMessage.split(",")) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] !== correctMessage[i]) {
        notAllowedLetters.push(word[i]);
      }
    }
  }

  return notAllowedLetters.length;
}

function solution2(message) {
  let notAllowedLetters = [];

  for (var i = 0; i < message.length; i++) {
    const position = i + 1;

    if (position % 3 === 2) {
      message[i] !== "O" && notAllowedLetters.push(message[i]);
      continue;
    }

    if (message[i] !== "S") {
      notAllowedLetters.push(message[i]);
    }
  }

  return notAllowedLetters.length;
}

const message = "LOSSSPSSSZ";

console.log(solution2(message));
