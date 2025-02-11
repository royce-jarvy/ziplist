"use strict";
function zipList(list1, list2) {
    const ziplist = [];
    // Check if lists are same length
    if (list1.length !== list2.length) {
        // returns empty list if not same
        return ziplist;
    }
    for (let i = 0; i < list1.length; i++) {
        ziplist.push(list1[i], list2[i]);
    }
    return ziplist;
}
console.log('zipList test: ');
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipList(['a', 'b'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    const ziplist = [];
    // Check if lists are same length
    if (list1.length !== list2.length) {
        // returns empty list if not same
        return ziplist;
    }
    list1.forEach((element, index) => ziplist.push(element, list2[index]));
    return ziplist;
}
console.log('\nzipListTheFunctionalWay test: ');
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b'], [1, 2, 3]));
