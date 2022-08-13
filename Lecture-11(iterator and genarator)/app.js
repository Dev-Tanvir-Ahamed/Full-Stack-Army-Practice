// Iterator and Genarator

//  ইটারেট, ইটারেবল, ইটারেটর 

//  ইটারেট হলো কোনো একটা লিস্টের শুরু থেকে শেষ পর্যন্ত লুপ চালিয়ে বা কোনো উপায়ে পারফর্ম করা। এর জন্য ফর লুপ আছে, জাভাস্ক্রিপ্টে forEach, map এসব আছে। এগুলো কিন্তু আবার ইটারেবলের মধ্যে পড়ে না। ইটারেবল মানে হচ্ছে যাকে ইটারেট করা সম্ভব। আর ইটারেটর হলো একটা অবজেক্ট, যা মূলত একটা ডিজাইন প্যাটার্ন। এটাকে ইটারেট করা যায়।


const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let index = 0;

function next() {
    return arr[index++];
}

console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());

const channel = "stack"

// স্ট্রিং মূলত একটা ডাটা টাইপ হলেও এটা আসলে একটা ক্যারেক্টারের অ্যারে। এবং স্ট্রিং একটা ইটারেবল অবজেক্ট
const channelIterator = channel[Symbol.iterator]();
console.log(channelIterator); 
// console.log(chennal[Symbol.iterator]);
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());


for(const v of channel){
    console.log(v);
}


const range = {
    start : 0,
    stop : 100,
    step : 5
}

range[Symbol.iterator] = function () {
    let current = this.start
    const stop = this.stop
    const step = this.step
    return {
        next() {
            const o = {
                value : current,
                done : current > stop
            }
        current += step
        return o
    }
    }
}

const rangeIterator = range[Symbol.iterator]()

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// for(let v of range){
//     console.log(v);
// }



// Genarator

function * myGenarator(){
    yield 1
    yield 23
    yield 1
}

const iterator = myGenarator()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function * ranged(start, stop, step){
    for(let i = start; i <= stop; i += step){
        yield i   
    }
}

const rangeIt = ranged(0, 100, 5)

// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

for(let v of rangeIt){
    console.log(v)
}

// For of loop
// Async iterator and Genarator
// Github Collabration
// Project Requriments