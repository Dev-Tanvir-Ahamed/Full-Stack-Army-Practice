const arr = []
const arrToObj = {}
for (let i = 0; i < 5000; i++) {
    const o = {
        id : i,
        value : i
    }
    arr.push(o)  
    arrToObj[i] = o
}
console.time("find")
let id = 499

const obj = arr.find(item => item.id == id)
console.log(obj);
obj.value = 666
console.log(obj);
console.timeEnd("find")


console.time("obj")

let oid = 345
let objV = arrToObj[oid] = 4399

console.log(objV);

console.timeEnd("obj")