// first all asynchronous task go to call stack.
// all synchronous task go to queee for sometimes. when complete all synchronous task in call stack. Then asynchronous task go to call stack and finally excute.

// Event loop-> quee to call stack

// Promise

const isResolved = true

const promise = new Promise((resolve, reject) => {
    if (isResolved) {
        resolve("comleted")
    }
    else{
        reject("data")
    }
})

console.log(promise);

promise.catch((e) => {
    // console.log('rejected');
    console.log(e);
}).then((result) => {
    console.log(result);
})


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

wait(2000).then(() => {
    console.log("Done in 2000");
})
wait(3000).then(() => {
    console.log("Done in 2000");
})