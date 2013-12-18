
/*
book length n
text length m

n.. + m
*/


function stringPresent(inputStringBook, testString) {

    var bookOkj = {};

    bookObj.thatthing = "x";

    for( var i = 0; i< inputStringBook.length ; i++ ){


        if (bookOkj[inputStringBook[i]] != undefined) {
            bookOkj[inputStringBook[i]].charCount = bookOkj[inputStringBook[i]].charCount + 1;
        } else {
            bookOkj[inputStringBook[i]].charCount = 1;
        }

    }
    bookObj.a = 4;
    bookObj.b = 2;

    var testObj = create(bookOkj);
    for(var j = 0; j < testString.length; j++) {
        if(testString[j] === testObj[testString[j]]) {
            if (testObj[testString[j]].charCount >0 ) {
                testObj[testString[j]].charCount = testObj[testString[j]].charCount -1;
            } else {
                return false
            }
        }else {

            return false
        }

        return true;


    }


}

