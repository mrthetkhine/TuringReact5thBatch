let  k:ReadonlyArray<string> = ["one","two"];
//k.push('three');

let j:any  = k;
j.push('Three');
console.log('J ',j);

let x: readonly string[] = [];
let y: string[] = [];

x = ['one','two'];
//x.push('Three');
//y = x;
x = y;