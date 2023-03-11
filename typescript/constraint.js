function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// longerArray is of type 'number[]'
var longerArray = longest([1, 2], [1, 2, 3]);
console.log('Loger Array ', longerArray);
var result = longest('Hello', 'Hi');
console.log('Result ', result);
var result2 = longest({
    name: 'Objwith length 2',
    length: 2
}, {
    name: 'Objwith length 4',
    length: 4
});
console.log('Result ', result2);
