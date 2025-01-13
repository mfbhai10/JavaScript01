//Array

const myArr = [1,2,3,4,5]
// console.log(myArr);
const myHeros = ["BatMan", "SpiderMan"]
// console.log(myHeros);

const myArr1 = new Array(1,2,3)
// console.log(myArr1[1]);

//Array Methods:

// myArr.push(9)
// myArr.push(10)

// myArr.pop()
// console.log(myArr);

// myArr.unshift(0)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.reverse());
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(9));

console.log("A ",myArr);
// console.log(myArr.slice(1,3));
const myA1 = myArr.slice(1,3)
console.log(myA1);
console.log("After slice: ",myArr);

const myB1 = myArr.splice(1,3)
console.log(myB1);
console.log("After Splice: " ,myArr);