// Primitive => Stack ; 
// Non-Primitive => Heap;

let myName = "Abhay Rajan"
let anotherName = myName;

anotherName = "Hitesh"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "abhiraka@gmil.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "websbase90@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)