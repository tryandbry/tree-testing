export function Bst(val) {
  this.val = val;
  this.left;
  this.right;
}

Bst.prototype.insert = function(val){
  if(val === this.val) return this;

  if(val < this.val) {
    if(this.left) this.left.insert(val);
    else {
      this.left = new Bst(val);
      return this.left;
    }
  }
  else if(val > this.val) {
    if(this.right) this.right.insert(val);
    else {
      this.right = new Bst(val);
      return this.right;
    }
  }
}
