
//Instantiate contains method into string object
if (typeof String.prototype.contains === 'undefined') {
    String.prototype.contains = function(it) {
        return this.indexOf(it) != -1;
    };

}

/*
var patt1=new RegExp(pattern,modifiers);

//or more simply:

    var patt2=/pattern/modifiers;

 pattern specifies the pattern of an expression
 modifiers specify if a search should be global g, case-sensitive i, etc.
*/

var str = "Mr. Blue has a blue house";
var n = str.search(/blue/i);;


function findMoodsByTag(tagString) {

var moods = ["social"];




      var s = "foo";

    if(tagString.indexOf("bowling") != -1) {

        console.log("tagString.indexOf('bowling') = " + "found");
        moods = ["active"];

    }

    var ind = tagString.contains(/boling/i);
    console.log("ind = " + ind);
    if (tagString.contains(/boling/i) == true){

        console.log("tagString.contains(/boling/i) ==" +  ind);
        moods = ["active"];


    }

    var srch = tagString.search(/bowling/i) ;
    console.log("srch = " + srch);
    if (tagString.search(/bowling/i) != -1){

        console.log("tagString.search(/bowling/i) = " + "found");
        moods = ["active"];

    }



return moods;
}

/*
 sporty - Live Sport ,
 active - bowling
 rich  - shopping,  retail
 artistic - culture , art , festival
 intelligent - speaker


 */

var tags = "bowling, music, diner, cocktails, pop-up";

console.log("moods for tag:" + tags+ " = " + findMoodsByTag(tags))