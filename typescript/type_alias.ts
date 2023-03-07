type Point = {
    x: number;
    y: number;
};
type Another = {
    x : number;
    y : number
}
type Point3D = {
    x : number,
    y : number,
    z : number,
}
let p:Point = {
    x: 10,
    y: 20
};
let k:Another = p;
function display(arg:Point)
{
    console.log('Arg ',arg.x, " , ",arg.y);
}
display(k);

let point3D: Point3D = {
    x: 10,
    y : 20,
    z : 30
};
p = point3D;
//point3D = p;

type MyNumber = number;
