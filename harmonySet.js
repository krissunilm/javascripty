
/*
 node --harmony harmonySet.js
 */

var assert = require('assert')
    , s = new Set()
    ;

s.add('a');
s.add('b');

//assert.ok(s.has('a'));

console.log("s = " + JSON.stringify(s));

console.log("s.has('a') = " + s.has('a'));

console.log("s.has('z') = " + s.has('z'));

