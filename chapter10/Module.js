+function()
{
    if(window.MyModule)
    {
        return;
    }
    function privateFunc()
    {
        console.log('Private api');
    }
    function apiOne()
    {
        console.log('Api One');
        privateFunc();
    }
    function apiTwo()
    {
        console.log('Api Two');
    }
    console.log('My Module intialized');
    window.MyModule = window.MyModule || {

        apiOne,
        apiTwo
    };
   
}();