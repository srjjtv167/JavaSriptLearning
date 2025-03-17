const map = new Map()
map.set('in', "India")
map.set('fr', "France")
map.set('pk', "Pakistan")

//console.log(map);

// for (const pair of map) {
//     console.log(pair);
// }

// for (const [key, value] of map) {
//     console.log(key);
//     console.log(value);
// }

//--------------------------------------------------

//Higher ordered functions

const arrUsers = [
    {
        name: "Suraj",
        age: 27,
        profession: "iOS developer"
    },
    {
        name: "Raj",
        age: 24,
        profession: "Accountent"
    },
    {
        name: "Rahul",
        age: 22,
        profession: "Photographer"
    },
    {
        name: "Rohit",
        age: 29,
        profession: "Marketing representative"
    }
]

console.log(arrUsers);

let arrFilteredData = arrUsers.filter((obj) => obj.age > 25)
console.log(arrFilteredData);

