class Circle
{
    radius:number;

    constructor(radius:number)
    {
        this.radius = radius;
    }
    get area()
    {
        console.log('Getter executed');
        return Math.PI * this.radius * this.radius;
    }
}
let c = new Circle(3);
console.log('C.area ',c.area);