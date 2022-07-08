// array method
let a = ['asif', 'rubel', 'yusuf']
console.log(typeof a);
// 1. toString
// convert to array to string
    let b = a.toString()
    console.log(b);
    console.log(typeof b);
//2. Join 
    // convert to array to string and join anything in string.
    let c = a.join("-")
    console.log(c);
    console.log(typeof c);
// 3.pop
    // retuns the last element value.
   let d = a.pop()
   console.log(d); 
   console.log(typeof d);
// 4.push
    // add new item at the end
    let e = a.push("tanvir")
    console.log(e);
    console.log(typeof e);
    console.log(a);
    // change main array
// 5.shift
    // remove the first element
    let f = a.shift()
    console.log(e);
    console.log(typeof e);
    console.log(a);
    // change main array
// 6.unshift
    // add new element at the start a Array.
    let g = a.unshift("ahamed")
    console.log(e);
    console.log(typeof e);
    console.log(a);
    // change main array
// 7.concat
let h = a.concat("hasib")
console.log(typeof h);
console.log(h);
console.log(a);
// 8.splice
    let i = a.splice(1,2, "shakil", "emon")
    // access the remove element and add a new element
    console.log(i);
    // change the main array 
    console.log(a);
// 9.slice
    // return selected elemenet
    let j = a.slice(1,3)
    console.log(j)
    // Don't change original array.
    console.log(a)