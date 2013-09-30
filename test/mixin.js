var mixin = require('mixin');
var assert = require('assert');


describe("Objects mixin", function() {
  it('should mix two object functions', function(){
    var A = {
      testA : function(){}
    };

    var B = {
      testB : function(){}
    };

    mixin(A, B);

    assert(typeof A.testB === 'function'); 
  });
});