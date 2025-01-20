// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(first, second) {
  // Math.max es más rápido!
  return Math.max(first, second)
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length === 0) return null
  let longestWord = words[0]
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length > longestWord.length) {
      longestWord = element
    }
  }
  return longestWord
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0
  numbers.forEach(num => sum += num);
  return sum
  // usar reduce más adelante
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) return 0
  return sumNumbers(numbers) / numbers.length
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, word) {
  if (words.length === 0) return null
  // En vez de bucles podemos usar find / some
  const wordExists = words.some(iteratedWord => iteratedWord === word)
  if (!wordExists) return false
  // retorno temprano, no anidar!!
  return wordExists
}
