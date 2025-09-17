const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    str.split("").map(char => {
        if(vowels.includes(char)) {
            count++;
        }
    });
    return count;
};
console.log(countVowels("Practice makes a man perfect"));