function execute(f:Function)
{
    f();
}
execute(()=>console.log('Hello'));

execute(function(a:number)
{
    console.log('Another function');
});