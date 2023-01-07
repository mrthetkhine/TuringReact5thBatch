function getData(cb)
{
    setTimeout(()=>{
        console.log('Get data completed');
        return cb(100);
    },1000);
}
console.log('Before get data');
getData( (value)=>console.log("Result ",value));
//console.log('Data ',data);
console.log('After get data');