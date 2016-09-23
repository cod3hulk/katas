var path = require('path');
var expect = require('chai').expect;

var stringsMix = require(path.join(__dirname, '..', './stringsMix.js'));

describe('stringsMix', function () {
  'use strict';

  it('exists', function () {
    expect(stringsMix).to.be.a('object');
  });

  describe('normalize()', function() {
    var normalize = stringsMix.normalize;

    it('exists', function () {
      expect(normalize).to.be.a('function');
    });

    it('removes all none lowercase chars from a string', function () {
      expect(normalize("Hello, world.")).to.equal('elloworld');
    });
  });

  describe('group()', function() {
    var group = stringsMix.group;

    it('exists', function () {
      expect(group).to.be.a('function');
    });

    it('groups characters', function () {
      expect(group('abaaccb')).to.deep.equal({ a: 'aaa', b: 'bb', c: 'cc' });
    });
  });

  describe('mix()', function() {
    var mix = stringsMix.mix;

    it('exists', function () {
      expect(mix).to.be.a('function');
    });

    xit('count single char in first string', function () {
      expect(mix('a', '')).to.equal("1:a");
    });

    xit('count multiple chars in first string', function () {
      expect(mix('aa', '')).to.equal("1:aa");
    });

    xit('count multiple dfferent chars in first string', function () {
      expect(mix('aab', '')).to.equal("1:aa/1:b");
    });

    xit('count multiple dfferent chars in first string with correct order', function () {
      expect(mix('abb', '')).to.equal("1:bb/1:a");
    });
  })

});

