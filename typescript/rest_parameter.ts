function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4,4,5,);
console.log('A ',a);

let arr = [1,2,3];
let stack:Array<number> = [];

stack.push(...arr);// stack.push(1,2,3)