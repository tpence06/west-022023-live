// Code Here 👀👀👀
const { bookStore } = require("./data")
console.log(bookStore)

// 1. Find the location of seattle?
  
const dotNote = bookStore.location
const brackNote = bookStore["location"]

// This HAS to be with bracket notation because of the space
const getCoolFunc = bookStore["cool Func"]

const collectionOfFunctions = {
  firstFunc: () => console.log("first"),
  secondFunc: () => console.log("second")
}

// how to get the title of the SECOND inventory

const secondInv = bookStore