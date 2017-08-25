import * as testbed from '.';
import {expect} from 'chai';
// import {spy} from 'sinon';

describe('testbed',function(){
  it('works',function(){
    expect(testbed.test()).to.be.true;
  });
});
