// Function is a first class citizen.
// we can treat as a value.



/*

* Benefits:

* - we can store function in variable.
* - we can store function inside an object/array
* - we can pass function as argument.
* - we can also retun a function from another function.

*/


// constractor function
const sum = new Function('a','b',
`
console.log(a + b)
`
)

console.log(typeof sum);
// console.log(sum(3,4));


function strToObj(str){
    let obj = {}
    for(let s of str){
        if(s !== ' '){
            obj[s] = s;
        }
    }
    return obj
}
// console.log(strToObj('Tanvir Ahamed'))


const fn = new Function('str', 
`
let obj = {}
for(let s of str){
    if(s !== ' '){
        obj[s] = s;
    }
}
return obj
`
)

// console.log(fn("shakib Al Hasan"));



const fData = {
	params: ['a', 'b'],
	body: ['const r = a + b', 'return r'],
};


const fBody = fData.body.reduce((acc, cur) => {
    debugger
    console.log(acc,cur);
	acc += cur + ';';
	return acc;
}, '');

// console.log(fBody);



const ft = new Function(...fData.params, fBody)

console.log(ft(3,4));