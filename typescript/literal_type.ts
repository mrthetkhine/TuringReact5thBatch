let x: "hello" = "hello";

let state : "pending" | "completed" | "rejected";
//state = "another";
state = "pending";
console.log('State ',state);

function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
}
let str = 'null';
doSomething(str);

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

liveDangerously(12);