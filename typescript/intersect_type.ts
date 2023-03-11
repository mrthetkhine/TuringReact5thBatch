interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
let obj : ColorfulCircle = {
    color:'green',
    radius:23
};
console.log('Obj ',obj);

//let myArr:[] = 
let myArray:Array<string> = ["hello", "world"];
console.log('MyArray ',myArray);

let myArray2  = [];
myArray2[0] = 21;
myArray2[1] = '21';
console.log('MyArray2 ',myArray2[1]);