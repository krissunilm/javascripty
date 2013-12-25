
var categoryObjects = require('./CategoryNames.js');

//TODO include self defined set.js
var set = require('./set.js');

var myDistinctSet = new set.Set();






//var myDistinctSet = new Set();




console.log("categoryObjects = " + categoryObjects.results.length);

for(var i = 0; i < categoryObjects.results.length ; i++) {

    myDistinctSet.add(categoryObjects.results[i].name);



}

console.log("myDistinctSet = " + JSON.stringify(myDistinctSet));

console.log("myDistinctSet.size = " + myDistinctSet.size());
