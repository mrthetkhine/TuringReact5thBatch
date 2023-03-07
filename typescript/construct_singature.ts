class Human
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
        console.log('Human constructor ',this.name);
    }
}
type SomeConstructor = {
    new (s: string): Human;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
fn(Human);