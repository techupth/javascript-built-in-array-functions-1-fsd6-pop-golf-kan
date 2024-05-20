let words = ["hello", "world"];

function getWordLengths(words) {
  return words.length;
}

const wordLength = words.map(getWordLengths);

console.log(wordLength);
