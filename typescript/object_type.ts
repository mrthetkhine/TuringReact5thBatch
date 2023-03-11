interface Person {
  readonly name: string;
  age?: number;
}
 
function greet(person: Person) {
    //person.name = "Something";
  return "Hello " + person.name;
}

let result = greet({
    name : 'Tk',
    /*age : 38*/
})
console.log('Result ',result);