let color : "red" | "green" | "blue"  = "blue";
//color = 'yellow';
console.log('Color ',color);

let data : number | string;
data = "Hello";
//data++;
data = 32;
data ++;

function printId(id: number | string) {
    if (typeof id === "string")
    {
        console.log(id.toUpperCase());
    }
    else
    {
        ++ id;
        console.log("Id is ",id);
    }

}
printId(data);