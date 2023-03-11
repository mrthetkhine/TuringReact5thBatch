interface StringArray {
  [index: number]: string;
}
 function getStringArray()
 {
    return ['Hello','Morning']
 }
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
console.log('Second item ',secondItem);