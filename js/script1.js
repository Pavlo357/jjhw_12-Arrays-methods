// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.


let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

let newArrFirst = arrOne.concat(arrTwo);
let newArrSecond = arrTwo.concat(arrOne);

console.log(newArrFirst);

console.log(newArrSecond);