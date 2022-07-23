// map, fillter, reduce

const numbers = [1, 4, 5, 6,false, NaN, 9, 10]
const filtered  = numbers.filter((v) => v)
// By default return truty value.
const maped = filtered.map((v) => v.toString())

console.log(maped);

// console.log(filtered);



// reduce

// Map -> [same length as the orginal array]
// Filter -> [With filtered item]
// Reduce -> Know one knows (Only you know) all possible value

const result = numbers.reduce((acc, cur) => {
    debugger;
    console.log(acc, cur);
    // if(index === 0) acc += "["
    // if (cur) {
    //     acc += cur.toString() + (index < numbers.length - 1 ? "," : "")
    // }
    // if(index == numbers.length - 1) acc += "]";
    return acc
},"")
console.log(result);