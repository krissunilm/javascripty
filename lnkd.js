

var Node = function (name ) {
    this.id = name;
    this.distance_array = [];
}


var graph = [ {node1:"a", node2:"c"} , {node1:"e", node2:"b"} ,{node1:"c", node2:"b"}, {node1:"c",node2:"d"}, {node1:"d",node2:"e"}, {node1:"c", node2:"e"}  ] ;

var a = new Node("a");

var allNodes = [];
console.log("a =" + JSON.stringify(a));
console.log("graph =" + JSON.stringify(graph));


var i =0;
for ( i = 0; i < graph.length; i++ ) {

var currentLink = graph[i];
    console.log("currentLink =" + JSON.stringify(currentLink));





}


