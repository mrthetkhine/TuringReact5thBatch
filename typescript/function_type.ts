function add(a:number,b:number)
{
    return a+b;
}
function isEven(a : number)
{
    return a % 2== 0;
}
let k:(a: number, b: number) => number = add;
//k = isEven;

type PredicateFun = (a:number) => boolean;
let pred:PredicateFun = isEven;