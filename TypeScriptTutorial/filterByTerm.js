"use strict";
var obj1 = { url: "str1" };
var obj2 = { url: "str1" };
var obj3 = { url: "str1" };
var arrayOfLinks = [obj1, obj2, obj3];
var term = "java";
function filterByTerm(input, searchTerm, lookupKey) {
    if (lookupKey === void 0) { lookupKey = "url"; }
    // or types as the following function filterByTerm(input: Array<string>, searchTerm: string){
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement[lookupKey].match(regex);
    });
}
filterByTerm(arrayOfLinks, term);
