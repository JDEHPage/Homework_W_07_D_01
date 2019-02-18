const assert = require('assert')
const WordCounter = require('../models/WordCounter.js');

describe('WordCounter', function () {


  it('should be able to count words', function(){
  const actual = WordCounter('some thing')
  assert.strictEqual(actual, 2)
  })




});
