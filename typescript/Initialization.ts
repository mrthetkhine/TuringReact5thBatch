class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}
 
class Derived extends Base {
  name = "derived";
  
  constructor()
  {
    super();
    console.log('Derived constructor');
  }
}
 
// Prints "base", not "derived"
const d = new Derived();
console.log('D ',d);