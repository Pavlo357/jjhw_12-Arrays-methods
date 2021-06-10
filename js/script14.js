// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.


const arr = [5, 6, 7, 8, 9];

let sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);