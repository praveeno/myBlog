i recently sign in to codewar
they provide problems & you need to code to solve them

## Problem 1 
  ###### **Problem Description** - Write a function to multiply two given number.
  ###### **My Solution**
  ```javascript
  function multiply(a, b) {
    return a * b;
  }
  ```
  ###### **Clever Solution**
  what you want now, i think this is most simple and clever way to multiply two numbers 
  

## Problem 2 
  ###### **Problem Description** -
  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten      minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its    citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter    strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city    block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you        don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
  ###### **Solution** (My code)
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
   ###### **Clever Solution** [other user code](https://www.codewars.com/users/rramesh)
   ```javascript
    function isValidWalk(walk) {
     function count(val) {
       return walk.filter(function(a){return a==val;}).length;
     }
     return walk.length==10 && count('n')==count('s') && count('w')==count('e');
   }
   ```
   ###### **What I Learn From This Exercise**
   * how we can use function inside function to increase productivity
   * after saw this clever example, i learn about array new prototype methods, like filter, map, reduce, I found [this link](https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319) useful for new array methods
   
## Problem 3
  ###### **problem description** - Find the missing letter
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the    array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e' <br>
['O','Q','R','S'] -> 'P'<br>
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)
I have also created other katas. Take a look if you enjoyed this kata!
  ###### **Solution**
  ```javascript
   function findMissingLetter(alphabetArray) {
    var isLowerCase = true;
    // array of all alphabets
    var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/cave.on)
   ```javascript
    function findMissingLetter(array) {
     var codes = array.map(a => a.charCodeAt(0))
     ,    last = codes.length - 1
     ,     sum = codes.reduce((a, b) => a + b)
     ,  expect = (codes[last] + codes[0]) * (codes[last] - codes[0] + 1) / 2;

     return String.fromCharCode(expect - sum);
   }
   ```
   ###### **What I Learn From This Exercise**
   * new string method `charCodeAt` & `fromCharCode`, I never hear about them before, thats why i love this kind of activity.
   * I use a long & big approch to solve this problem, i surprise with the [solution](https://www.codewars.com/kata/reviews/583a0b20cd2acc1d9900007e/groups/583cff1428a0c0f90d00004d) [cave.on](https://www.codewars.com/users/cave.on) provide, I like the way he solve problem.

## Problem 4
  ###### **problem description** - Sum of two lowest positive integers
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the    array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e' <br>
['O','Q','R','S'] -> 'P'<br>
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)
I have also created other katas. Take a look if you enjoyed this kata!
  ###### **Solution**
  ```javascript
    function sumTwoSmallestNumbers(numbers){  
      var sortedNumbers = numbers.sort(function(a, b){return a - b; });
      return sortedNumbers[0] + sortedNumbers[1];
    };
  ```
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/ooflorent)
   ```javascript
    function sumTwoSmallestNumbers(numbers) {  
      var [ a, b ] = numbers.sort((a, b) => a - b)
      return a + b
    }
   ```
   ###### **What I Learn From This Exercise**
   * at first i thought this is wrong, because i saw `[a, b]` very first time. after some research i found that this is known as **[Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)** 
   
## Problem 5
  ###### **problem description** - Stop gninnipS My sdroW!
 Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
```

  ###### **Solution**
  ```javascript
    function spinWords(statement){
      return statement.split(' ').map(function (word) {
        if(word.length > 4) {
          var a = word.split('')
          b = a.reverse(),
          c = b.join('')
          return c
        } else {
         return word;
        }
      }).join(' ');
    }
  ```
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/katzoo)
   ```javascript
      function spinWords(words){
        return words.split(' ').map(function (word) {
          return (word.length > 4) ? word.split('').reverse().join('') : word;
        }).join(' ');
      }    
   ```
   found another also
   ```javascript
     function spinWords(string){
      return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
     }
   ```
   ###### **What I Learn From This Exercise**
   * basically my code is not so much different from cleverest code of [katzoo](https://www.codewars.com/users/katzoo), but i learn but ternary operator, and how this is making our code smaller.
   * i understand how array split and join methods works, it feel very good.
   * in second solution, i learn what is regex, really regex is very powerful thing, this thing works in theory of computation, and in compiler lexical phase also. 

## Problem 6
  ###### **problem description** - Build Tower!
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *
Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Have fun!
``` 
for example, a tower of 3 floors looks like below
[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```

  ###### **Solution**
  ```javascript
  function towerBuilder(nFloors) {
    var tower = []
    debugger
    for(var i = 0; i < nFloors; i++) {
      var stars = (2*i + 1), 
      floor = [],
      highstStars = 2*nFloors -1, //lowest floor need higher amount of stars  
      whitespaceNeeded = Math.abs(Math.ceil((highstStars - stars) / 2));

      whitespaceNeeded && addWhiteSpace(floor, whitespaceNeeded);
      for(var star = 0; star < stars; star++) { floor.push('*')}
      whitespaceNeeded && addWhiteSpace(floor, whitespaceNeeded);
      tower.push(floor.join(''));
    }

    function addWhiteSpace(floor, whitespace) {
      while(whitespace) { floor.push(' '); whitespace--;}
    }
    return tower
  }
  ```
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/katzoo)
   ```javascript
   function towerBuilder(n) {
      return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
    }
   ```
   found another code also, which is interesting (this is under Best Practices)
   ```javascript
   function towerBuilder(n) {
      return Array.from({length: n}, function(v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
      });
    }
   ```
   ###### **What I Learn From This Exercise**
   
   
## Problem 7
  ###### **problem description** - Give me a Diamond
Description:
This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

###Task:

You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

Please see provided test case(s) for examples.

Python Note
Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

JS Note
JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.

  ###### **Solution**
  ```javascript
  function diamond(n){
    if(n % 2 == 0 || n < 1) return null;
    var no = [], i = 1; j = n;
    while(i < n) {no.push(i); i += 2}
    while(j > 0) {no.push(j); j -= 2}
    return no.map( function(odd) {
      var startingIndex = Math.floor((n - odd)/2);
      return ' '.repeat(startingIndex) + '*'.repeat(odd);
    }).join('\n') + '\n'
  }
  ```
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/katzoo)
   ```javascript
       function diamond(n){
      if( n%2==0 || n<1 ) return null
      var x=0, add, diam = line(x,n);
      while( (x+=2) < n ){
        add = line(x/2,n-x);
        diam = add+diam+add;
      }
      return diam;
    }//z.

    function repeat(str,x){return Array(x+1).join(str); }
    function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }
   ```
   ###### **What I Learn From This Exercise**


## Problem 8
  ###### **problem description** - Duplicate Encoder
Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("



  ###### **Solution**
  ```javascript
  function duplicateEncode(word){
    var d = {}, wordArray = word.split('');
    wordArray = wordArray.map( function(w) { return w.toLowerCase()})
    wordArray.map( function(w) {
        d[w] = d[w] || 0
        d[w]++;
    })
    return wordArray.map( function(w) {
      if(d[w] > 1) return ')'
      return '('
    }).join('');
}

  ```
 ###### **Clever Solution** [other user code](https://www.codewars.com/users/YpuaH)
   ```javascript
      function duplicateEncode(word){
        return word
          .toLowerCase()
          .split('')
          .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
          })
          .join('');
      }
   ```
   ###### **What I Learn From This Exercise**
