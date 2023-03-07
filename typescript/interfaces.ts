interface Point {
    x: number;
    y: number;
}
interface Point3D extends Point
{
    z : number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   
printCoord({ x: 100, y: 100 });

