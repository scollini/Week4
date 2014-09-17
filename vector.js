//I didn't get very far on this one

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(another) {
  return new Vector();
}
  Vector.prototype.minus = function(another) {
    return new Vector();
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));