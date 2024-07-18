const Name = "Abhay"
const repoCount = 50

console.log(Name + repoCount + " Value")

console.log(`Hey my name is ${Name} and repoCount is ${repoCount}`)

 const gameName = new String('vs-driving')
 console.log(gameName[0])
 console.log(gameName.length)
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt('2'))
 console.log(gameName.indexOf('i'))

 const newString = gameName.substring(0,4) // we can use negative value
 console.log(newString)
 const anotherString = gameName.slice(-10 ,8)
 console.log(anotherString)

 const newStringOne = "    Abhay    "
 console.log(newStringOne)
 console.log(newStringOne.trim())

 const url = "https://abhay.com/hitesh%20chaudhari"

 console.log (url.replace('%20','-'))

 console.log(url.includes('hitesh'))
 console.log(url.includes('him'))

 console.log(gameName.split('-'))