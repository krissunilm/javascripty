function aIndexOf(a, fnc) {
    if (!fnc || typeof (fnc) != 'function') {
        return -1;
    }
    if (!a || !a.length || a.length < 1) return -1;
    for (var i = 0; i < a.length; i++) {
        if (fnc(a[i])) return i;
    }
    return -1;
}

function arrayIndexOf(a, f, v)
{
    var i = aIndexOf(a, function(obj) {
        if(obj[f] != undefined)
        {
            return obj[f] == v;
        }
        else
        {
            return false;
        }
    });
    return i;
}

module.exports.arrayIndexOf = arrayIndexOf;

module.exports.aIndexOf = aIndexOf;