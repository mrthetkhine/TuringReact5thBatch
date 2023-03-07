function display(msg:string)
{
    console.log('Display ',msg);
}
display("Hello");

function add(a:number,b:number):number
{
    return a+b;
}
let k = add(1,3);
console.log('K is ',k);

const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});