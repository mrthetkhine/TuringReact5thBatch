class Human
{
    name :string ;
    age : number =0;

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
        console.log('Human Constructor');
    }
}
class Doctor extends Human
{
    specaility:string;
    constructor(name:string,age:number,speciality:string)
    {
        super(name,age);
        this.specaility = speciality;
        console.log('Doctor Constructor');
    }
}
let h = new Human('Tk', 38);
console.log('H ',h);

let doctor = new Doctor('Dr Someone',40,'General Health');