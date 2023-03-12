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
    work()
    {
        console.log(`${this.name} work`);
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
    work(hospital?:string)
    {
        console.log(`Dr ${this.name} work at `,hospital);
    }
}
let h = new Human('Tk', 38);
console.log('H ',h);
h.work();

let doctor = new Doctor('Someone',40,'General Health');
doctor.work('SSC');