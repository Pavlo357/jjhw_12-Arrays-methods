// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.


let arr = [1, 2, [3, 4], 5, [6, 7]];

// Example 1

let arrNew = arr.filter(function(elem) {
    if (Array.isArray(elem)) {
        return true;
    }
})

console.log(arrNew);

// Example 2

function func(elem) { return Array.isArray(elem) };

let arrNew2 = arr.filter(func);

console.log(arrNew2);