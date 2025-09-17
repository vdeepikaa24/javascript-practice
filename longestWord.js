const longestWord = (sentence) => {
    let words = sentence.split(" ");
    let longest = "";
    words.map(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
};
console.log(longestWord("Practice makes a man perfect"));