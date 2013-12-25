var set = Object.create(null); // create an object with no properties

var parentObject = {};
parentObject.sing = "Ola Ola";

var childObject = Object.create(parentObject);
childObject.act = "cool";

console.log( "parentObject = "  + JSON.stringify(parentObject));

console.log( "childObject = "  + JSON.stringify(childObject));

console.log( "childObject.sing = "  + JSON.stringify(childObject.sing));

