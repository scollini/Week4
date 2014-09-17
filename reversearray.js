function reverseArray(array) {
  var end = [];
   for (var i = array.length - 1; i >= 0; i--)/*Start at the end of the array and push it to the front*/
    end.push(array[i]);
  return end;
}

console.log(reverseArray([10, 7, 12]));

//12, 7, 10

function reverseArrayInPlace(array) {
  var end = []
  for (var i = array.length - 1; i >= 0; i--)
    end.push(array[i]);
  return end;
}

console.log(reverseArray(reverseArrayInPlace([1, 2, 3])));

//[1, 2, 3]

/* The book considers this solution cheating, and I did not realize it until I reread the problem. I was just happy to get it to work.*/