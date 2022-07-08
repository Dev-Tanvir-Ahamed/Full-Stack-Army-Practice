// const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];
// আমরা চাইছি const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6]; এটা থেকে আমরা 1234falseNaN56 রিটার্ন করতে
// let reducedarray = numbers.reduce((pre, curr) => {
//    return pre += curr

// }, "")

// console.log(reducedarray);

// এই অ্যারে থেকে শুধু truthy values নিবো। কোনো falsy ভ্যালু নিবো না। 
// আমরা যদি চাই প্রতিটার শেষে কমা (,) যোগ করবো সেটাও করতে পারি।
// আমরা চাইলে অ্যারের একটা শেইপও দিতে পারি


const numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];
console.log(numbers.length);
let reducedarray2 = numbers.reduce((pre, curr, i) => {
    debugger;
    if(i === 0){
        pre += '['
    }
    if(curr){
         pre += curr.toString() + (i < numbers.length - 1 ? ',' : '')
    }   
    if (i === numbers.length - 1) {
		pre += ']';
	}
    return pre
}, "")

console.log(reducedarray2);

console.log(typeof reducedarray2);

// এখন আমরা acc স্ট্রিং হিসেবে চাইছি না। আমরা চাইছি সকল truthy ভ্যালুর একটা অ্যারে

let reducedarray3 = numbers.reduce((acc, cur) => {
    if(cur){
        acc.push(cur.toString())
    }
    return acc 
}, [])

console.log(reducedarray3);

console.log(typeof reducedarray3);



