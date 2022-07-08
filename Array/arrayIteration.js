// 1.forEach()
    // change the main array
    let arr = [34,45,32,56,67]
    let forEachMethod = arr.forEach((value) => {
        // console.log(value, index, mainarr);
        console.log(value);
    })
// 2.map()
    // make a new array
    let mapMehtod = arr.map((value) => {
       return value += 2
    }) 
    console.log(mapMehtod);

// 3.filter()
    // The filter() method creates a new array with array elements that passes a test.
    // a new array
    let filterMethod = arr.filter(value => value > 50)

    console.log(filterMethod);


// 4.reduce()
    // make a single value
    // make a new array
    // left to right
    let reduceMehtod = arr.reduce((total, value, index, array) => {
        return total + value
    },50) 
    console.log(reduceMehtod);
// 5.reduceRight()
    // make a single value
    // make a new array
    // right to left
    let reduceRightMehtod = arr.reduceRight((total, value, index, array) => {
        return total + value
    },50) 
    console.log(reduceRightMehtod);
    // 6.every()
    // check if all array values pass a test.
    let everyMethod = arr.every(value => value > 10)
    console.log(everyMethod);
// 7.some()
    // check if some array values pass a test.
let someMethod = arr.some(value => value > 50)
console.log(someMethod);
// 8.indexOf()
    // searches an array for an element value and returns its position.
    // returns -1 if the item is not found.
    let indexOfMethod = arr.indexOf(67)
    console.log(indexOfMethod);
// 9.lastIndexOf()
    // returns the position of the last occurrence of the specified element.
    let lastindexOfMethod = arr.lastIndexOf(67)
    console.log(lastindexOfMethod);
// 10.find()
    // returns the value of the first array element that passes a test function.
    let findMethod = arr.find(value => value > 50)
    console.log(findMethod);
// 11.findIdex()
    // returns the index of the first array element that passes a test function.
    let findIndexMethod = arr.findIndex(value => value > 50)
    console.log(findIndexMethod);
// 12.from()
    // returns an Array object from any object with a length property or any iterable object.
    let fromMethod = Array.from("Tanvir")
    console.log(fromMethod);
// 13.keys()
// 14.entries()
// 15.includes()
    // This allows us to check if an element is present in an array
    let includesMethod = arr.includes(67)
    console.log(includesMethod);