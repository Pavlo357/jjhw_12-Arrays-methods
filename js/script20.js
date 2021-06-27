// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.


let arr = [5, -3, 6, -5, 0, -7, 8, 9];

// Example 1

let arrNew = arr.filter(function(elem) {
    if (elem < 0) {
        return true;
    }

})

console.log(arrNew.length);

// Example 2

function func(elem) { return elem < 0 };

let arrNew2 = arr.filter(func);

console.log(arrNew2.length);