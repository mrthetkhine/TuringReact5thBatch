let obj = {
    name : 'TK',
    age : 38
};
function display(obj:{
                name:string
            })
{
    console.log('Name is ',obj.name);
}
display(obj);
display(display);