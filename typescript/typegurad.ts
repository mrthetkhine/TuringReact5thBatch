 function display(a: number |string)
 {
    if(typeof a === 'number')
    {
        a++;
        console.log('A ',a);
    }
    else
    {
        console.log('A ',a.toUpperCase());
    }
 }
 display(12);
 display('Hello');