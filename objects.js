// singleton
// literals

// both are way of define objects

const mySym = Symbol("Key1")

const JsUser = {
    name: "Abhay",
    [mySym]: "Mykey1",
    age: 18,
    location: "Uttarakhand",
    email: "abhigoogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser[mySym])
// JsUser.email = "johnmelon@google.com"
// Object.freeze(JsUser)
// JsUser.email = "johnmelonmicrosoft.com"
// console.log(JsUser)
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js User")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());


