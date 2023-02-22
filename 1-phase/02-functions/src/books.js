/* 
Deliverables
- The owner of a small bookstore has hired your to build them an app to help keep track of their book inventory.

- Store the bookstore name, books and their prices into variables.

- Write a function to open/close the store and greet customers.

- Write a function that displays books and their current promos.

- Write a function that buys a book, clears it from its variable and returns a customer their total.

*/

// 1. Create a constant GLOBAL Variable with the name of the bookstore
const bookstore = "Easley's Technical Books"
// console.log(bookstore)

// either "open" or "closed"????
// true == 'open', false == 'closed'
let storeStatus = false

const isOpen = () => {
	// Return a string telliung us if the store is opened or closed
	// open => `Welcome to ${bookstore}, we're open!`
	// closed => `Sorry ${bookstore}, is closed`
	// true === false => false
	if (storeStatus) {
		console.log(`Welcome to ${bookstore}, we're open!`)
	} else {
		console.log(`Sorry ${bookstore}, is closed`)
	}
}

isOpen()

const openStore = () => {
	console.log("Opening Store")
	storeStatus = true
}

const closeStore = () => {
	console.log("Closing Store")
	storeStatus = false
}

function toggleStoreStatus() {
  // how do we FLIP the status??
  // *hint it's one character...!
  storeStatus = !storeStatus
}

// openStore()
// isOpen()
// closeStore()
// isOpen()

let book1 = "Automate the boring stuff"
let b1price = 10

let book2 = "Theory of ThermoDynamics"
let b2price = 2000

function printBook(/* string:  */book) {
  // if no arg, then book = undefined
  // undefined.toUpperCase()
  // 15.toUpperCase()
  return book.toUpperCase()
}


// ! CALLBACK FUNCTIONS!

// ? What is a callback function?
// a function (or still that list of instructions), for a particular circumstance

// examples
//  event listener => addEventListener('type', CALLBACKFUNC)
//  array iterations => 
  // arr.forEach(() => {})
let arr = [1,2,3]
const cb = x => console.log(x + 1)

// arr.forEach(cb)
arr.forEach(x => console.log(x + 1))
