class Greeter {
    private internalVar = 10;
    public greet() {
      console.log("hi!");
    }
    protected getName() {
        return "hi";
    }
}
class SpecialGreeter extends Greeter {
    //internalVar = 10;
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
}
const g = new SpecialGreeter();
g.greet();
//console.log('Get ',g.getName());
//g.howdy();
let obj = g as any;
console.log('Private ',obj['internalVar']);