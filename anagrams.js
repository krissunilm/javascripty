var dict = require('./dict.js');

var solveJumble = function (string) {
    'use strict';
    var originalBag = string.split('');
    var anagrams = [];
    var findAnagrams = function (bag, word) {
        var tempBag, tempWord;
        for (var i = 0; i < bag.length; i++) {
            tempBag = bag.slice();
            tempWord = word.slice();
            tempWord.push(tempBag[i]);
            tempBag.splice(i, 1);
            var tempWordString = tempWord.join('');
            if (dict[tempWordString.toLowerCase()]) {
                anagrams.push(tempWordString);
            }
            findAnagrams(tempBag, tempWord);
        }
    };
    findAnagrams(originalBag, []);
    return anagrams;
};

var t = Date.now();
var result = solveJumble('asdfghjkl');
console.log(Date.now() - t, result);