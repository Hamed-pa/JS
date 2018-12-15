'use strict';


function extractCurrencyValue (val) {
    let value = String(val);

    if (~value.indexOf('$')) {
        if (value[0]  === '$'){

            return value.slice(1, value.length)
        } else {
            return value.substr(-(value.length), value.length-1)
        }
    }
    return value;
}

alert(extractCurrencyValue('150$'));

