import * as testbed from '.';
import {expect} from 'chai';
// import {spy} from 'sinon';

describe('bstSort',function(){
});
describe('bstFind',function(){
  let seed;
  beforeEach(function(){
    seed = [53,18,105,6,37,78,193,0,10,28,44,60,91,131,402];
  });

  it('instantiates single-node trees',function(){
    let bst = new testbed.Bst(seed.shift());
    expect(bst.val).to.equal(53);
    expect(bst.left).to.be.undefined;
    expect(bst.right).to.be.undefined;
  });

  describe('insert() method',function(){
    it('inserts to right and left',function(){
      let bst = new testbed.Bst(seed.shift());
      bst.insert(seed.shift());
      expect(bst.left.val).to.equal(18);
      bst.insert(seed.shift());
      expect(bst.right.val).to.equal(105);
    });

    it('inserts into subtrees',function(){
      let bst = new testbed.Bst(seed.shift());
      bst.insert(seed.shift());
      bst.insert(seed.shift());
      bst.insert(seed.shift());
      expect(bst.left.left.val).to.equal(6);
      bst.insert(seed.shift());
      expect(bst.left.right.val).to.equal(37);
      bst.insert(seed.shift());
      bst.insert(seed.shift());
      bst.insert(seed.shift());
      expect(bst.left.left.left.val).to.equal(0);
    });
  });

  describe('find() method',function(){
    let bst;
    beforeEach(function(){
      bst = new testbed.Bst(seed.shift());
      while(seed.length){
        bst.insert(seed.shift());
      }
    });

    it('finds values',function(){
      expect(bst.find(10)).to.be.true;
      expect(bst.find(91)).to.be.true;
      expect(bst.find(779)).to.be.false;
    });
  });
});
