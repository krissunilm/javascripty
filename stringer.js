//https://github.com/adambom/dictionary/blob/master/dictionary.json

// gist.github.com/EpiphanyMachine/7539969

//1.  use product of primes
//2. go through dictionary and remove the input string chars  adn

var input = "abcd";
var output = [];

var perms = [];

var fullOutputArray = [];

function permer (input ) {

    var inpArray = input.split("");
    console.log("inpArray= " + inpArray );
    var tmpArray1 = inpArray.slice(0);
    fullOutputArray.push(tmpArray1);
    //first pass
    for (i=0; i< (inpArray.length -1 ) ; i++ ){

        var buffer = inpArray[i];
        inpArray[i] = inpArray[i+1];
        inpArray[i+1] = buffer;
        //var subst =
        //perms.push(slice(i))
        console.log("inpArray= " + inpArray );
        var tmpArray = inpArray.slice(0);
        //stringer(tmpArray.join(""));
        //console.log("inside before push fullOutputArray= " + fullOutputArray );
        fullOutputArray.push(tmpArray);
       // console.log("inside after push fullOutputArray= " + fullOutputArray );
    }

    //now pass through the

}



permer("abcd");
console.log("fullOutputArray= " + fullOutputArray );

function stringer(input) {


    if(input.length > 0) {
    output.push(input);

    stringer(input.substring(1));
    }

}

stringer(input);


console.log("Output= " + output );

