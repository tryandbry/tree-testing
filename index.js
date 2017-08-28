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

Bst.prototype.find = function(val){
  if(val === this.val) return true;

  if(val < this.val){
    if(this.left) return this.left.find(val);
    else return false;
  }
  else if(val > this.val){
    if(this.right) return this.right.find(val);
    else return false;
  }
}

Bst.prototype.inOrder = function(fn){
  if(this.left) this.left.inOrder(fn);
  
  fn(this.val);

  if(this.right) this.right.inOrder(fn);
}
