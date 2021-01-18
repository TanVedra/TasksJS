// The task was given from the training platform "checkio", and this is my solution.

// Our robots are always working to improve their linguistic skills. For this mission, they research the Latin alphabet and its applications.

// The alphabet contains both vowel and consonant letters (yes, we divide the letters).
// Vowels -- A E I O U Y
// Consonants -- B C D F G H J K L M N P Q R S T V W X Z

// You are given a block of text with different words. These words are separated by whitespaces and punctuation marks.
// Numbers are not considered as words in this mission (a mix of letters and digits is not a word either).
// You should count the number of words (striped words) where the vowels with consonants are alternating;
// words that you count cannot have two consecutive vowels or consonants.
// The words consisting of a single letter are not striped -- don't count those. Casing is not significant for this mission.

// Input: A text as a string (unicode)

// Output: A quantity of striped words as an integer.

function stripedWords(line) {
    const isStriped = word => {
        const EXPRESSION = /\b[^aeiouy\s]?([aeiouy]{1}[^aeiouy\s]{1})+\b|\b[aeiouy]?([^aeiouy\s]{1}[aeiouy]{1})+\b/;
        return RegExp(EXPRESSION, 'i').test(word);
    };
    return (line.match(/\b[A-Za-z]{2,}\b/gi) || []).filter(isStriped).length;
}

console.log(stripedWords('My name is ...'), 3);
console.log(stripedWords('Hello world'), 0);
console.log(stripedWords('A quantity of striped words.'), 1);
console.log(stripedWords('Dog,cat,mouse,bird.Human.'), 3);
console.log(stripedWords(`For science, music, sport, etc, Europe uses the same vocabulary.
 The languages only differ in their grammar, their pronunciation and their most common words.`), 6);