
var dict1 = require('./dict.js');
var utility = require('./utility.js');


var Node = function (name ) {
    this.id = name;
    this.distance_array = [];
}



var graph = [ {node1:"a", node2:"c"} , {node1:"e", node2:"b"} ,{node1:"c", node2:"b"}, {node1:"c",node2:"d"}, {node1:"d",node2:"e"}, {node1:"c", node2:"e"}  ] ;

var a = new Node("a");

var allNodes = [];
console.log("a =" + JSON.stringify(a));
console.log("graph =" + JSON.stringify(graph));

console.log("allNodes =" + allNodes);
//console.log("dict = " + JSON.stringify(dict1) );

// first pass to populate all the nodes
var i =0;
for ( i = 0; i < graph.length; i++ ) {

var currentLink = graph[i];
    console.log("currentLink =" + JSON.stringify(currentLink));
    console.log("currentLink[node1] =" + currentLink['node1']);


    var idx1 = utility.aIndexOf(allNodes, function(obj) {

        return obj.id == currentLink['node1'];

    }  );


    if (-1 != idx1) {

        console.log('Found it! (Psst: take the blue pill!)');

    }else {
        console.log('not found so inserting!');
        allNodes.push(new Node(currentLink['node1']));

    }

    var idx2 = utility.aIndexOf(allNodes, function(obj) {

        return obj.id == currentLink['node2'];

    }  );


    if (-1 != idx2) {

        console.log('2 Found it! (Psst: take the blue pill!)');

    }else {
        console.log('2 not found so inserting!');
        allNodes.push(new Node(currentLink['node2']));

    }


}

console.log("allNodes =" + JSON.stringify(allNodes));
