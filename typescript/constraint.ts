function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
 
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
console.log('Loger Array ',longerArray);

let result = longest('Hello','Hi');
console.log('Result ',result);

let result2 = longest({
    name : 'Objwith length 2',
    length:2
},{
    name : 'Objwith length 4',
    length:4
});
console.log('Result ',result2);