//I think this problem was the easiet.

function deepEqual(x, y){
  if (x === y)
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