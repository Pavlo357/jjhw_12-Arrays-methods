// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.


let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

let arrNew = arr.filter(function(arr) {
    if (arr.length >= 5) {
        return true;
    } else {
        return false;
    }
})

console.log(arrNew);