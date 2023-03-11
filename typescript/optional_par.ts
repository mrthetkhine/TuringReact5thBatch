function process2(a:number=1000,b?:number)
{
    console.log('A ',a, ' B ',b);
    return a;
}
process2(1,2);
process2(100);
process2();