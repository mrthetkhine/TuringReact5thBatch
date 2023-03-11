type StringNumberPair = readonly [string, number];
let tuple : StringNumberPair = ["Hello",13];

console.log('Tuple ',tuple[0], ' element 1 ',tuple[1]);

//tuple[0] = "Something";
//tuple[1] = "No";
console.log('Tuple ',tuple);
const [str,age]  = tuple;
console.log('Str ',str, 'Age ',age);

