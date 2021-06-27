// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.


// Example 1

const arr = [5, 6, 7, 8, 9];

let sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);


// Example 2

const arr2 = [5, 6, 7, 8, 9];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr2.reduce(reducer));