type Animal = {
    shout:()=>void
}
let obj : Animal = {
    shout()
    {
        console.log("Woo");
    }
}
obj.shout();

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function isEven(n: number)
{
    return n % 2==0;
}
isEven.description = "IsEven function";
doSomething(isEven);