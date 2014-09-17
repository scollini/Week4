 /*I couldn't figure out how to make equal non-objects return false. 
 I think it would look like that FizzBuzz exercise with the for loop with the ifs inside.*/

 function deepEqual(x, y){
 if (x === y)
    return true;
   if (typeof x === "object" && typeof y === "object")
    return true;
   if (typeof x != "object" || typeof y != "object")
    return false;
}

console.log(deepEqual("Ashley", "Ashley"));
\\ true
console.log(deepEqual("MaryKate," "Ashley"));
\\ false
console.log(deepEqual(3,4);
\\false
