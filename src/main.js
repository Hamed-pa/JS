'use strict';


function truncate(str) {
    if(str.length > 25) {
         str = str.slice(0,25) + ' ...';
         return str;
    }
    return str;
}

console.log(truncate('Let the ruling classes tremble at a Communistic revolution. The proletarians have nothing to lose but their chains. They have a world to win.'));

