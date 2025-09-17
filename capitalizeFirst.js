function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalizeWords("practice makes a man perfect"));
