// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.


let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

// Example 1

let arrNew = arr.filter(function(arr) {
    if (arr.length >= 5) {
        return true;
    } else {
        return false;
    }
})

console.log(arrNew);

// Example 2

function func(arr) { return arr.length >= 5 };

let arrNew2 = arr.filter(func);

console.log(arrNew2);