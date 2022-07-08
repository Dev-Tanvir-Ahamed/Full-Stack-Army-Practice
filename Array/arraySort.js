// 1.sort()
// sorts an array alphabetically.
let s = ["asif","pabel", "apple", "tanvir", "shain"]
// console.log(s.sort());
// console.log(typeof s);
// Numbering sort()
// By default, the sort() function sorts values as strings.
let d = [4,3,3,45,1,7,23]
let e = d.sort((a,b) => {
    return b - a
})
const defaultCompare = (a, b) => {
    return a.toString().localeCompare(b.toString())
}
// const sortValue = d.sort(defaultCompare)
// console.log(sortValue);
console.log(e);
// 2.reverse()
// The reverse() method reverses the elements in an array.
let reverseMethod = ["asif","pabel", "apple", "tanvir", "shain"]
console.log(reverseMethod.reverse());