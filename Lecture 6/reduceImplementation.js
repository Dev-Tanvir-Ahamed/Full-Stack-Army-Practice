function myReduce(array, cb, init) {
    let acc = init
    for (let i = 0; i < array.length; i++) {
        acc = cb(acc, array[i], i, array)
    }
    return acc;
}

const sum = myReduce([1,2,3,4], (a, b) => a + b, 0)

console.log(sum);

const arr = [1,2,"",false,NaN,3,4]

const result = myReduce(arr, (acc, cur) => {
    if(cur){
        acc.push(cur * cur)
    }
    return acc
},[])

console.log(result);
