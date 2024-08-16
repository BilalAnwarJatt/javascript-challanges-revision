
 //1. Reverse a String
/*
function reverseString(str) {
    return str.split('').reverse().join('');
  }
console.log(reverseString("hello world"))
*/
 
//2.Fibonacci Sequence
 //Create a function that returns the nth number in the Fibonacci sequence.

 /*
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(15));
*/
  

//3. Factorial of a Number
// Write a function to calculate the factorial of a number.

/* 
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
 */

 //4.Check for Palindrome
//Create a function to check if a string is a palindrome.

/* 
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}
 */

 //5.Sum of Array Elements
//Write a function to return the sum of all elements in an array.

/* 
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
  */
//Intermediate Challenges
//6.Find the Largest Number in an Array
//Create a function to find the largest number in an array.

/* 
function findLargest(arr) {
  return Math.max(...arr);
}
  */

//7.Sort an Array of Objects by Property
//Write a function that sorts an array of objects by a specific property.

/*
function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}
  */

//8.Remove Duplicates from an Array
//Create a function to remove duplicate values from an array.

/*
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
  */

//9.Find the Missing Number in an Array
//Given an array of numbers from 1 to n with one number missing, find the missing number.

/* 
function findMissingNumber(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}
  */
//10.Debounce Function
//Implement a debounce function to limit the rate at which a function can be called.

/* 
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
  */
//Advanced Challenges
//11.Implement a Simple Promise
//Write a simple implementation of a Promise object.

/* 
class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(callback => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.status === 'rejected') {
      onRejected(this.reason);
    } else if (this.status === 'pending') {
      this.onResolvedCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}
  */

//12.Implement an LRU Cache
//Create a Least Recently Used (LRU) Cache with get and put methods.

/* 
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.capacity) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
}
*/
//13.Flatten Nested Arrays
//Write a function to flatten a nested array of arbitrary depth.

/* 
function flattenArray(arr) {
  return arr.reduce((acc, item) => 
    Array.isArray(item) ? acc.concat(flattenArray(item)) : acc.concat(item), []);
}
*/

//14.Implement a Binary Search
//Create a function to perform binary search on a sorted array.

/*
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}
 */


//15.Throttle Function
//Implement a throttle function to limit the rate at which a function can be called.

/* 
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  
  return function(...args) {
    const context = this;
    
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
*/