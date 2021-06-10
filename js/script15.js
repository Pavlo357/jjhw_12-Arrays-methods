// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.


let arr = [5, 6, 7, 8, 9];

let arrNew = arr.map(function(elem) {
    return Math.pow(elem, 2);
});

console.log(arrNew);