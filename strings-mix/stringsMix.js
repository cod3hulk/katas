'use strict';

var mix = function (a, b) {
  var chars = a.split('');
  var charCount = {};
  chars.forEach(function(c) {
    charCount[c] = (charCount[c] || 0) + 1;
  });

  var result = '';

  var result = Object.keys(charCount)
    .sort(function(a, b) {
      return charCount[b] - charCount[a];
    })
    .map(function(key) {
    return '1:' + key.repeat(charCount[key]);
  }).join('/');


  return result;
}

if ( typeof module !== "undefined" ) {
  module.exports = mix;
}
