// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.


let arr = [1, -3, 5, 6, -7, 8, 9, -11];

let arrNew = arr.filter(function(elem) {
    if (elem % 2 === 0) {
        return true;
    } else {
        return false;
    }
})

console.log(arrNew);