i recently sign in to codewar
they provide problems & you need to code to solve them

Problem 1 <br> 
*problem description* - write a function to multiply two given number
```javascript
function multiply(a, b) {
  return a * b;
}
```

Problem 2 <br> 
*problem description* - You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


```javascript
function isValidWalk(walk) {
  var directions = {
    'n': 0,
    's': 0,
    'e': 0,
    'w': 0
  }
  walk.forEach( function(direction) {
    directions[direction]++;
  }
  var displacement = {
    x: directions['n'] - directions['s'],
    y: directions['e'] - directions['w']
  }
  /*it take 1 min to traverse 1 block & I only have 10 minutes, 
  & I also want to attend appointment, so i want to come from where i start.*/
  return walk.length === 10 && displacement.x === 0 && displacement.y === 0;
}
```
Problem 3
*problem description* #Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!


```javascript
function findMissingLetter(alphabetArray)
{
  var isLowerCase = true;
  // array of all alphabets
  var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // checking if alphabet is lowercase or not
  if(!(alphabetArray[0] == alphabetArray[0].toLowerCase())) {
    isLowerCase = false;
    // making all given alphabets lower case  
    alphabetArray = alphabetArray.map( function(alphabet) { 
      return alphabet.toLowerCase()
    });
  }
  var index = alphabets.indexOf(alphabetArray[0]);
  var length = alphabetArray.length;
  for(let i = 0; i < length; i++) {
      if (!(alphabetArray[i] === alphabets[index])) {
        return isLowerCase ? alphabets[index] : alphabets[index].toUpperCase()
      }
      index++;
  }
}
```
