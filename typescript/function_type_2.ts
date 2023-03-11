type FnStringVoid = (a:string)=>void;
function greeter(fn: FnStringVoid) {
  fn("Hello, World");
}
 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);