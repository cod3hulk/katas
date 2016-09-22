var path = require('path');
var expect = require('chai').expect;

var mix = require(path.join(__dirname, '..', './stringsMix.js'));

describe('mix()', function () {
  'use strict';

  it('exists', function () {
    expect(mix).to.be.a('function');
  });

  it('count single char in first string', function () {
    expect(mix('a', '')).to.equal("1:a");
  });

  it('count multiple chars in first string', function () {
    expect(mix('aa', '')).to.equal("1:aa");
  });

  it('count multiple dfferent chars in first string', function () {
    expect(mix('aab', '')).to.equal("1:aa/1:b");
  });

  it('count multiple dfferent chars in first string with correct order', function () {
    expect(mix('abb', '')).to.equal("1:bb/1:a");
  });

});
