//I did not get very far on this one either

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function(){
   return this.inner.minWidth();
}

StretchCell.prototype.minHeight = function(){
  return this.inner.minHeight() + 1;
}

StretchCell.prototype.draw = function(){
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
// → 3

