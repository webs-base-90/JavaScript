const myArr = [0,1,2,3,4]
// const Heros = ["Ironman","Thor","Captain America"]
// const myArr2 = new Array(1,2,3,4,5)

// Arrays Methods
// myArr.push(5,6,7,8,9,10,10)
// myArr.pop()
// myArr.unshift(20)
// myArr.shift()
// console.table(myArr.indexOf(20))

// const newArr = myArr.join()
// console.log( myArr)
// console.log(newArr)


// slice and splice

// console.log("A", myArr)
// const myn1 = myArr.slice(1,3);
// console.log(myn1)
// console.log(myArr)

// Difference between Slice and Splice

//  console.log("B",myArr)
//  const myn2 = myArr.splice(1,3)
//  console.log(myn2)
//  console.log("B",myArr)

const Marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Flash","Batman","Superman"]

// Marvel_heros.push(dc_heros)
// console.log(Marvel_heros)

// console.log(Marvel_heros[3][1])

// const Allheros = Marvel_heros.concat(dc_heros)
// console.log(Allheros)


// if this type of situation you try this

// const all_new_heros = [...Marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3,4,5,[6,7,8],9,[10,11,[12,13]]]
// console.log(another_array)

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Abhay"))
console.log(Array.from("Abhay"))
console.log(Array.from({name: "Abhay"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))



