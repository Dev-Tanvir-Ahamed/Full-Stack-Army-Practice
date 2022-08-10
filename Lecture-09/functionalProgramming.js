/*

Functional Programming :-> Functional Programming is a paradigm of building computer programs using expressions and functions without mutating state and data.

*/


// Pure Function -> side effect -> immubility
// Higher order Function
// Function Scope -> clouser -> Hoisting 
// Callback Function 
// IIFE



/*

Higher Order Function 

* - function can be pass as an argument.
* - function can be return from another function.

*/




/*

Hidden Concepts

* - Scope
* - Clousers
* - Function Context
* - Hoisting

*/








// Normal Function

function genarateNumeber(max) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    console.log(random1,random2);
    return random1 * random2
}
const result = genarateNumeber(15)
console.log(result);

// Higher Order Function

function getNumber(max, cb) {
    const random1 = Math.floor(Math.random() * max)
    const random2 = Math.floor(Math.random() * max)
    console.log(random1,random2);
    const result = cb(random1,random2)
    return result
}

const result2 = getNumber(15, (rand1, rand2) => rand1 * rand2)
console.log(result2);

const result3 = getNumber(15, (rand1, rand2) => rand1 / rand2)
console.log(result3);


const result4 = getNumber(15, (rand1, rand2) => rand1 - rand2)
console.log(result4);


function power(p) {
    debugger;
    let result = 1;
    return function (n) {
        for(let i = 1; i <= p; i++){
            result *= n;
        }
        return result;
    }
}


// p store in scope sqr varible

let sqr = power(2)

let r = sqr(5)

// console.log(sqr);
console.log(r);


// Lexical scope

// Lexing / parsing / tokenixe -> compile -> run


// Scope ->

// global
// local
// block



// Execution context => call stack


function A(){
  console.log('I am A');
}

function B(){
    console.log('B');
    A()
}

function C(){
    B()
    A()
    console.log('i am C');
    
}

function D(){
    C()
}

D()


