console.log('hello');

// *** need underscore for skip value or index number.

// const arr = [4,5,6,7,4,3,]
// arr.forEach(function(_, __, arr){
//     console.log(value, index, arr);
// })



// const arr = [4,5,6,7,4,3,]
// let sum = 0
// arr.forEach(function(arr, i){
// //    if( value % 2 != 0){
// //        console.log(value);
// //    }
//     if (i < 4) {
//         sum += arr
//     }
    
// })
// console.log(sum);


// let a = [1,2,3,4,5]
// console.log(typeof a);
// for (let i = 0; i < a.length; i++) {
//     console.log(typeof a[i]);
// }



// let arr = [1,2,3, false, true, 5, 'text', '', 9,10]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length-1; j++) {
//         if (!arr[j] || typeof arr[j] != 'number') {
//             arr[j] = arr[j] + 1
//             console.log(arr[j]);
//         }
//     }
// }



// Create a uuid generator

/**
 * Store 10 students information
 * - name
 * - email
 * - id
 */

/**
 *
 * a utility to create a random id
 */

function uuid4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0
        // Don't Understand
        const v = c == 'x' ? r : (r & 0*3) | 0*8  
        return v.toString(16)
    })
}



const students = [
    {
      id: '666e7fd7-4c1d-46e3-0e77-31854bbc8e21',
      name: 'Tanvir Ahamed',
      email: 'tanvir@gmail.com'
    },
    {
      id: '17bac2a5-a5f4-4137-0e8e-06700c131653',
      name: 'Asif Ahamed',
      email: 'asif@gmail.com'
    },
    {
      id: 'acaf5df6-498f-43e7-0003-963469cd7607',
      name: 'Mithu Ahamed',
      email: 'mithu@gmail.com'
    }
  ]


/**
 * 1. Easily Traverse (O(n))
 * 2. Filter
 * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
 * 4. Update (medium) (easy) [push -> O(n)]
 * 5. Create a new one (easy task) [push -> O(1), unshift -> O(n)]
 */

// create a new students 

students.push({
    id : uuid4(),
    name : "Apple Mahmoud",
    email : "apple@gmail.com"
})

console.log(students);

// Update

const idUpdate = '17bac2a5-a5f4-4137-0e8e-06700c131653';
const updateData = {
  name : "Shakib Al Hasan",
  // email : "shakib@gmail.com"
}

const updateIndex = students.findIndex(item => item.id == idUpdate)
console.log(updateIndex);

students[updateIndex] = {
  ...students[updateIndex],
  ...updateData
}
console.log("updated", students);

// Delete

students.splice(updateIndex, 1)
console.log("deleted", students);

// forEach, map, filter, every, reduce, some, find, findIndex


// for(let i in students){
//   console.log(students[i].email);
// }


// for(let v of students){
//   console.log("v", v.name);
// }


// const arr = [
// 	{ id: 1, value: 10 },
// 	{ id: 2, value: 20 },
// 	{ id: 3, value: 30 },
// 	{ id: 4, value: 40 },
// 	{ id: 5, value: 50 },
// ];

// const index = arr.findIndex((item) => item.id === 4);
// const arr1 = arr.splice(index, 1);

// console.log(arr1); // [ { id: 4, value: 40 } ]
// console.log(arr);


// Object

const studentsObj = {
  '666e7fd7-4c1d-46e3-0e77-31854bbc8e21' : {
    id: '666e7fd7-4c1d-46e3-0e77-31854bbc8e21',
    name: 'Tanvir Ahamed',
    email: 'tanvir@gmail.com'
  },
  '17bac2a5-a5f4-4137-0e8e-06700c131653' : {
    id: '17bac2a5-a5f4-4137-0e8e-06700c131653',
    name: 'Asif Ahamed',
    email: 'asif@gmail.com'
  },
  'acaf5df6-498f-43e7-0003-963469cd7607' : {
    id: 'acaf5df6-498f-43e7-0003-963469cd7607',
    name: 'Mithu Ahamed',
    email: 'mithu@gmail.com'
  }
}

console.log(studentsObj);


/**
 * 1. Easily Traverse (0(n))
//  * 1.1 get anything if you have id/key
 * 2. Filter
 * 3. Delete (medium) O[1]
 * 4. Update (medium) (easy) O[1]
 * 5. Create a new one (easy task) O[1]
 */


const std = {
  id : uuid4(),
  name : "shahin",
  email : "shahin@gmail..com"
}

studentsObj[std.id] = std

console.log(studentsObj);



// Update

const idUpdatedObj = "666e7fd7-4c1d-46e3-0e77-31854bbc8e21"
// console.log(studentsObj[idUpdatedObj]);

const updatedDataObj = {
  name : "Musfiq",
  // email : "musfiq@gmail.com"
}

studentsObj[idUpdatedObj] = {
  ...studentsObj[idUpdatedObj],
  ...updatedDataObj
}

console.log(studentsObj);

// delete studentsObj[idUpdatedObj]
console.log(studentsObj)



// Travase
for(let i in studentsObj){
  console.log(studentsObj[i].email);
}


// Object.keys(studentsObj).forEach((v) => {
//   const s = studentsObj[v]
//   console.log(s.name, s.email)
// })


Object.values(studentsObj).forEach((v) => {
  console.log(v.name, v.email);
})

