class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
  getThisName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());

let method = c.getThisName;
//console.log('Method ',method());