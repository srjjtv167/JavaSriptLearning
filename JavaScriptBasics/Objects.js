//Singleton object


//---------------------------------------
//Object literal
const sym = Symbol("key1")
const object = {
    "firstname": "Virat",
    lastname: "Kohli",
    "isPlayingCurrently": true,
    age: "35",
    profession: "Cricketer",
    [sym]: "Value",
    score: {
        totalRun: 14000,
        strikeRate: 200,
        Average: 60
    }
}
object.age = 40
//freeze property used to avoid the further changes in the value
Object.freeze(object)
object.age = 50

console.log(object)

//De-structuring in object

const {a: fname} = object

console.log(fname)