const names = [
    'Ayman',
    'Abu Rayhan',
    'Anik',
    'Elis Emon',
    'Engr Sabbid',
    'Fahim Faisal',
    'Feroz Khan',
    'Parvez'
]

/*
----------- A -----------
Ayman
Abu Rayhan
Anik

----------- E -----------
Elias Emon
Engr. Sabbir

----------- F -----------
Fahim Faisal
Feroz Khan

----------- H -----------
Habib
HM Azizul
Hridoy Saha

----------- J -----------
Jahid Hassan
Johir

----------- M -----------
Md Al-Amin
Md Arafatul
Md Ashraful

----------- P -----------
Parvez

*/

const namedGroped = names.reduce((acc, cur) => {
    debugger;
    const firstLetter = cur[0].toUpperCase()
    console.log(acc, cur, firstLetter); 
    if (firstLetter in acc) {
        acc[firstLetter].push(cur)
        console.log("found", firstLetter);
    } else{
        acc[firstLetter] = [cur]
        console.log('not Found', firstLetter);
    }
    return acc;  
},{})



console.log(namedGroped);

Object.keys(namedGroped).forEach(groupkey => {
    console.log( '------------', groupkey , '------------');
    namedGroped[groupkey].forEach(name => {
        console.log(name);
    })
})