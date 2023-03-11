function firstElement(arr: any[]) {
  return arr[0];
}
console.log('First element ',firstElement([10,'20',30]));

function firstElement2(arr: string[]| number[]) {
    return arr[0];
}
console.log('First element ',firstElement2(['Hello','20','30']));

function firstElementWithGeneric<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}
console.log('First element ',firstElementWithGeneric<string>(['Hello','20','30']));
console.log('First element ',firstElementWithGeneric<number>([20,30]));
console.log('First element ',firstElementWithGeneric([{age:20},{age:30}]));