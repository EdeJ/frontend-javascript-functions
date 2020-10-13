/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"

function greet(name) {
  return "Hoi " + name + "!";
}

console.log(greet("Nova"));

/* Opdracht 2 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function surround(word, character) {
  return character + word + character;
}

console.log(surround("bril", "*"));


/* Opdracht 3 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function concatenate(wordArray) {
  let output = "";

  for (let i = 0; i < wordArray.length; i++) {
    output = output + wordArray[i];
  }

  return output;
}

console.log(concatenate(["a", "b", "c"]));

/* Opdracht 4 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

function lastEntry(array, n) {
  const lastEntryIndex = array.length - 1;

  if (n === undefined) {
    return array[lastEntryIndex];
  }
  return array.slice(lastEntryIndex - n, lastEntryIndex)
}

console.log(lastEntry([3, 6, 9, 17, 4, 6, 25, 4]));
console.log(lastEntry([46, 65, 34, 204, 190, 89], 4));

/* Opdracht 5 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204

function highest(numbersArray) {
  let highest = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    if (highest < numbersArray[i]) {
      highest = numbersArray[i];
    }
  }

  return highest;
}

console.log(highest([46, 65, 34, 204, 190, 89]));

/* Opdracht */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.

// OPTIE 1, MET OUTPUT VARIABELE
function fizzBuzzOne() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || i);
  }
}

// OPTIE 2, MET DIRECTE CONSOLE.LOG()
function fizzBuzzTwo() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzzTwo());
console.log(fizzBuzzOne());