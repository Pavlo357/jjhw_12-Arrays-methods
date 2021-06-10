// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.


let arr = [1, -3, 5, 6, -7, 8, 9, -11];

let arrNew = arr.filter(function(elem) {
    if (elem < 0) {
        return true;
    } else {
        return false;
    }
})

console.log(arrNew);