interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): string;
}
function createDate(func:CallOrConstruct)
{
    //return new func('2023/03/11');
    return func(100101020202);
}
let d:Date|string = createDate(Date);
console.log('Date ',d);

d = Date();
console.log('Date ',d);