function oxe_perm(src, depth, index)
{
    var perm = src.slice();     // duplicates src.
    perm[depth] = src[index];
    perm[index] = src[depth];
    return perm;
}

function oxe_permutations(src)
{
    out = new Array();

    for (var n = 0; n < src.length; ++n) {
        var inpush = oxe_perm(src, 0, n);
        out.push(inpush.slice());
    }

    console.log("In Output = " + out);

    for (depth = 1; depth < src.length; depth++) {
        var numInPreviousPass = out.length;
        for (var m = 0; m < numInPreviousPass; ++m) {
            for (var n = depth + 1; n < src.length; ++n) {

               var  outpush = oxe_perm(out[m], depth, n);
                //out.push(oxe_perm(out[m], depth, n));
                out.push(outpush.slice());
             }
        }
    }

    return out;
}


output = oxe_permutations("abcd");

console.log("Output = " + output);