
function x() {
var resultIndex = resultArr.length - nodeNum;

if(nodeNum > (resultArr.length - 1))
    return false;


return resultArr[resultIndex];

}



/*
Given an array of integer from 1 to n with exactly one duplicate. Find the duplicate
Example:
    [4, 2, 3, 1, 5, 4 ,6]

Expected Output: 4
*/
function findDup(inpArray) {

    var tmpArray = [];

    for(var i =0; i < inpArray.length ; i++) {

        for(var j = 0; j < tmpArray.length ; j++) {
            if(inpArray[i] === tmpArray[j])
                return inpArray[i];
        }

        tmpArray.push(inpArray[i]);
    }
    return false;
}




/*
currNumArr   4 2 3 1  2
currTotalArr  4 6 9 10 12
    */