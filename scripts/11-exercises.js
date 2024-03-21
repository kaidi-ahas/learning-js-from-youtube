const nums = [10, 20, 30];

nums[nums.length-1] = 99;
// console.log(nums);

function getLastValue(array) {
  return array[array.length-1];
}

function arraySwap(array) {
  let newArr = [];

  const firstElement = array[0];
  const lastElement = array[array.length-1];
  
  for (let i=0; i<array.length; i++) {
    newArr.push(array[i]);
  }

  newArr[0] = lastElement;
  newArr[newArr.length-1] = firstElement;
  return newArr;
}

const anotherArr = [1, 20, 22, 24, 5];
const words = ['this', 'and', 'that'];

function upToTen() {
  let i=0;
  while (i<=10) {
    console.log(i);
    i+=2;
  }
}

// upToTen();

function fiveToZero() {
  let i=5;
  while(i>=0) {
    console.log(i);
    i--;
  }
}

// fiveToZero();

function arrFunc (arr) {
  const newArr = [];
  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i]+1);
  }
  return newArr;
}

// console.log(arrFunc([-2, -1, 0, 99]));

function addNum(arr, num) {
  const newArr = [];
  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i]+num);
  }
  return newArr;
}

// console.log(addNum([1, 2, 3], 2));

function addArrays(arr1, arr2) {
  const newArr = [];
  for (let i=0; i<arr1.length; i++) {
    newArr.push(arr1[i]+arr2[i]);
  }
  return newArr;
}

// console.log(addArrays([1, 1, 2], [1, 1, 3]));

function countPositive(nums) {
  let positiveNums = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > 0)
    positiveNums++;
  }
  return positiveNums;
}

// console.log(countPositive([-2, -1, 0, 1, 2, 3]))

function minMax(nums) {

  let min = 0;
  let max = 0;
  let sorted = {min, max};

  if (nums.length === 0) {
    sorted.min = null;
    sorted.max = null;
  }

  for (let i=0; i<nums.length; i++) {
    if (nums.length === 1) {
      sorted.min = nums[i];
      sorted.max = nums[i];
    }

    if (nums[i] < nums[i+1]) {
      sorted.min = nums[i];
    } else {
      sorted.max = nums[i];
    }
  }

  return sorted;
}

const numbers = [1, -3, 5];
// console.log(minMax([3]));

function countWords(array) {
  let obj = {};

  for (let i=0; i<array.length; i++) {
    let item = array[i];
    obj[item] = obj[item]+1 || 1;
  }
  
  return obj;
}

// console.log(countWords(['apple', 'apple', 'orange', 'apple']))

// const strArr = ['greetings', 'hi', 'good day', 'search', 'map', 'search'];
// const word = 'hi';
// for (let i=0; i<strArr.length; i++) {
//   if (strArr[i] === 'search') {
//     console.log(i);
//     break;
//   } else {
//     console.log('-1');
//   }
// }

function removeEgg(foods) {
  let eggCount = 0;
  for (let i=foods.length-1; i>=0; i--) {
    if (foods[i] === 'egg' && eggCount < 2) {
      eggCount++;
      foods.slice(2)
    }
  }
  return foods;
}

// const foodList = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log(removeEgg(foodList));

// array.slice()

function fizzBuzz() {
  for(let i=1; i<=20; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('FizzBuzz')
    } else if (i%5 === 0) {
      console.log('Buzz')
    } else if (i%3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz();

function findIndex(array, word) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndex(['b', 'a', 'b', 'c', 'a'], 'c'))

function unique(array) {
  return Array.from(new Set(array));
}

// console.log(unique(['b', 'a', 'b', 'c', 'a']));