interface ILink{
    description?: string;
    id?: number;
    url: string;
    [index: string]: any;

}
interface IPost extends ILink{
    title: string;
    body: string;

}
const obj1 = { url: "str1"};
const obj2 = { url: "str1"};
const obj3 = { url: "str1"};
const arrayOfLinks: Array<ILink> = [obj1, obj2, obj3];
const term: string = "java";

function filterByTerm(input: Array<ILink>, searchTerm: string, lookupKey: string = "url"): Array<ILink>{
// or types as the following function filterByTerm(input: Array<string>, searchTerm: string){
    if(!searchTerm) throw Error("searchTerm cannot be empty");
    if(!input.length) throw Error("input cannot be empty");
    const regex = new RegExp (searchTerm, "i");
    return input.filter(function(arrayElement){
        return arrayElement[lookupKey].match(regex)
    })
}


filterByTerm(arrayOfLinks, "string3");