function range (x,y) {
  var array = [];
  for (var i = x; i <= y; i++) //Run through the numbers between x and y
    array.push (i); /*Push x to array when it is less than y, after going through each number*/
    return array;
}
console.log(range(1,10))


//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum (array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) /*Assign i to each number in array when the number is less than the array length*/
    total += array[i]; //Add both numbers in array to total, which equals 0
  return total;
}
      
console.log(sum(range(9,10)))

19

// I looked at the solution to understand the var total part but initially got the rest of the function. 
