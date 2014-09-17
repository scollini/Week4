
function arrayToList(array) {
  var end = {};
   for (var i = array.length - 1; i >= 0; i--)/* Start at the end of the array.*/
     end = {value: array[i], rest: end};  return end; 
}
console.log(arrayToList([1, 2, 3]));
//{value: 1, rest: {value: 2, rest: {value: 3, rest: {}}}}

//I'm not sure I did this one correctly. It made sense while I was doing it...