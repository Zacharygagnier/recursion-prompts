// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
        // return n - 1 === 0 ? n : n * factorial(n - 1);
        // return n === 0 ? 1 : n * factorial(--n)
        if (n === 0){
            return 1;
        }
    if (n < 0){
        return null;
    }
   return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, index = 0) {
    if (array.length === 0){
        return 0;
    }
    return index === array.length -1 ? array[index] : array[index] + sum(array, ++index);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, index = 0, sum = 0) {
    if (index === array.length){
        return sum;
    }
    if (Array.isArray(array[index])){
        sum += arraySum(array[index]);
    }  else {
        sum += array[index];
    }
    return arraySum(array, ++index, sum);
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 1){return false}
 return n === 0 ? true : isEven(n > 0 ? n - 2 : n + 2);

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, arr = [], count = 0) {
    if (n === 0){return 0}
    return count === n ? arr.reduce(function(prev,current){return prev + current;}) : sumBelow(n, arr.concat(count), n > 0 ? ++count : --count);

};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, arr = [], count = x < y ? x : y) {
    if (x + 1 === y || x === y){
        return [];
    }
    if (x > y && x > 0 && y > 0){
    }
return arr[arr.length-1] + 1 === x || arr[arr.length-1] + 1 === y ? (x > y ? arr.reverse() : arr)
: range(x, y, arr.concat(count + 1), ++count);
};



// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp, count = exp, firstRun = true) {
    if (exp == 0){
        return 1;
    }
    return count === 1? base : exp > 0 ? base * exponent(base, exp, count - 1) : 1 / exponent(base, exp * -1, count * -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n, multiple = 1) {
    if (n === multiple){
        return true;
    } else if (n < multiple){
        return false;
    } else {
        return powerOfTwo(n, multiple * 2);
    }
}
// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, newString = '', count = 0 ) {
  return count === string.length ? newString : reverse(string, newString = string[count] + newString.slice(0), ++count)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, result = true, count = 0, str = string.toLowerCase().replace(/[' ']/g, ''), revCount = str.length - 1) {
if (count === str.length){
    return result;
} else {
    return str[count] === str[revCount] ? palindrome(string, result, ++count, str, --revCount) : false;
}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, left = x){
    if (x === 0 && y === 0){
        return NaN;
    }
    if (left - y === 0 || left + y === 0 || x === 0 || y === 0){
        return 0;
    } if (x < 0 && y < 0 || x > 0 && y > 0){
        return (x < 0 ? left - y > 0 : left - y < 0) ? left : modulo(x, y, left - y);
    } else {
     return (x < 0 ? left + y > 0 : left + y < 0) ? left : modulo(x, y, left + y)   ;
    }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    return  y === 0 ? 0 : y < 0 ? 0 - x + multiply(x, y + 1) : x + multiply(x, y - 1)
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y, count = 0) {
    if (x === 0 && y === 0){
        return NaN;
    } if (x < 0 && y < 0){
        return x > y ? count : divide(x-y, y, ++count);
    }
    return  x < y ? count : divide(x-y, y, ++count); 
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, highest = 1, count = 1 ) {
    if (count-1 === x || count-1 === y){
        return highest;
    } else if (y < 0 || x < 0){
        return null;
    }
    return x % count === 0 && y % count === 0 ? gcd(x, y, count, ++count) : gcd(x, y, highest, ++count);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, count = str1 > str2 ? str1.length : str2.length) {
 if (count === 0){
     return true;
 } else if (str1[count] !== str2[count]){
     return false;
 } else {
     return compareStr(str1, str2, --count);
 }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, res = [], count = 0){
   return count === str.length ? res : createArray(str, res.concat(str[count]), ++count);
};

// 17. Reverse the order of an array
var reverseArr = function (array, res = [], count = array.length - 1) {
    return count === -1 ? res : reverseArr(array, res.concat(array[count]), --count);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, res = []) {
    if (length === 0 ){
        return res;
    }
     res.push(value);
     return buildList(value, --length, res);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0, res = 0) {
    if (array.length === count) {
      return res;
    } else if (array[count] === value){
      ++res;
    }
  return countOccurrence(array, value, ++count, res);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, res = [], count = 0) {
  return count === array.length ? res : rMap(array, callback, res.concat(callback(array[count], count, array)), ++count)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key, count = 0) {
    for (var current in obj){
        if (typeof obj[current] === 'object'){
            count += countKeysInObj(obj[current], key);
        } if (current === key){
            count++;
        }
    }
return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value, count = 0) {
    for (var key in obj){
        if (typeof obj[key] === 'object'){
            count += countValuesInObj(obj[key], value);
        } else if (obj[key] === value){
            count++;
        }
    }
    return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey, final = {}) {
   for (let current in obj){
       if (current === key){
           final[newKey] = (typeof obj[current] === 'object' ? replaceKeysInObj(obj[current], key, newKey) : obj[current]);
       } else if (typeof obj[current] === 'object'){
           final[current] = replaceKeysInObj(obj[current], key, newKey);
       } else {
           final[current] = obj[current];
       }
   }
   return final;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, count = 0, final = [0, 1]){
    if (n <= 0){
        return null;
    } else if (count >= n - 1 ){
        return final;
    }
    return fibonacci(n, ++count, final.concat(final[final.length-1] + final[final.length-2]));
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2 
var nthFibo = function(n, count = n, prevNum = 1, res = 0) {
      if (n < 0){
        return null;
    }
    return count === 0 ? res : nthFibo(n, --count, res, res + prevNum );
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, res = [], count = 0) {
    return input.length === count ? res : capitalizeWords(input, res.concat(input[count].toUpperCase()), ++count)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, res = [], count = 0) {
    return array.length === count ? res : capitalizeFirst(array, res.concat(array[count][0].toUpperCase() + array[count].slice(1).toLowerCase()), ++count)
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj, sum = 0) {
    for (var key in obj){
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays, final = [], count = 0) {
    if (count === arrays.length){
        return final;
    } if (Array.isArray(arrays[count])){
            final = final.concat(flatten(arrays[count]));
        } 
      if (!Array.isArray(arrays[count])){
        return flatten(arrays, final.concat(arrays[count]), ++count);
    }
    return flatten(arrays, final, ++count);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}, count = 0) {
    if (str.length === count){
        return obj;
    } else {
        obj[str[count]] = obj[str[count]] + 1 || 1;
        return letterTally(str, obj, ++count);
    }
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, res = [], count = 0) {
    if (list.length === count){
        return res;
    } 
   return list[count + 1] === list[count] ? compress(list, res, ++count) : compress(list, res.concat(list[count]), ++count); 
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug, final = [], index = 0) {
    if (array.length === index){
        return final;
    } 
    final.push(array[index]);
    final[index] = final[index].concat(aug);
    return augmentElements(array, aug, final, ++index);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, res = [], count = 0) {
    if (count === array.length){
        return res;
    }
    return array[count] === 0 && array[count+1] === 0 ? minimizeZeroes(array, res, ++count) : minimizeZeroes(array, res.concat(array[count]), ++count);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, res = [], count = 0) {
    if (array.length === count){
        return res;
    }
return count % 2 === 0  && array[count] > 0 || count % 2 !== 0 && array[count] < 0 ? alternateSign(array, res.concat(array[count]), ++count) : alternateSign(array, res.concat(array[count] * -1), ++count);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, arr = str.split(' '), result = [], count = 0) {
    if (arr.length === count){
        return result.join(' ');
    }
    var switched;
    switch(arr[count]){
    case '1':
     switched = 'one';
        break;
    case '2':
        switched = 'two';
        break;
    case '3':
        switched = 'three';
        break;
    case '4':
        switched = 'four';
        break;
    case '5':
        switched = 'five';
        break;
    case '6':
        switched = 'six';
        break;
    case '7':
        switched = 'seven';
        break;
    case '8':
        switched = 'eight';
        break;
    case '9':
        switched = 'nine';
        break;
    default:
   switched = arr[count];
}
return numToText(str, arr, result.concat(switched), ++count);
};
// *** EXTRA CREDIT ***

// 36. Return the number/ of times a tag occurs in the DOM.
var tagCount = function(tag, node = document, count = 0) {
    if (node.tagName === tag.toUpperCase()){
        ++count;
    }
    for (var i = 0; i < node.childNodes.length; i++){
        count += tagCount(tag, node.childNodes[i]);
    }
return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min = 0, max = array.length, found = null) {
    if (array[min] === target){
        return min;
    }
    return min === max ? found : binarySearch(array,target,++min, max, found);
    
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array, final = [], index = 0) {
if (index === array.length){
    return final;
} else {
    return index === 0 ? mergeSort(array, [].concat(array[index]), ++index) : mergeSort(array, final.concat(array[index]).sort(function(a,b){return a-b}), ++index);
}
};
