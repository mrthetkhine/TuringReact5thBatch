class Animal
{
    static count:number;

    static
    {
        console.log('Static block executed');
        Animal.count = 0;
    }
    id :number;
    constructor()
    {
        console.log('Constructor');
        Animal.count ++;
        this.id = Animal.count;
    }
    getId()
    {
        return this.id;
    }
    static staticMethod()
    {
        console.log('This ',this.count);
    }
}
let a1 = new Animal();
let a2 = new Animal();

console.log('A1 ',a1.getId());
console.log('A2 ',a2.getId());
Animal.staticMethod();
console.log('Animal count ',Animal.count);

function hello()
{

}
console.log('F.name ',hello.name);