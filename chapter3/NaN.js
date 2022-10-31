let result  = Number.NaN;
console.log("NaN == NaN ", (result==result));
console.log("NaN != NaN ", (result!=result));
console.log("NaN > NaN ", (result > result));
console.log("isNaN ", isNaN(result));

let max = Number.MAX_VALUE;
let str = "1" + "0".repeat(1000);
let large_num = BigInt(str);
console.log("Large Num ",large_num);
console.log("Large Num type ",typeof(large_num));