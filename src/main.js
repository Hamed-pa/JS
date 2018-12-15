'use strict';


function checkSpam (str) {
    if (str.includes('xxx') || str.includes('ViAgRA')) {
        return true;
    }
    return false;
}


console.log(checkSpam('goo xxxxd'));