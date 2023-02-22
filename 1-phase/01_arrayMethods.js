/* 
  JS Datatypes?

  - Objects => {key: "value"}
  - String  => "helllllo"
  - Boolean (true / false)
  - Undefined / null
  - Numbers
    in other lang => 
      - integer  => whole numbers
      - float    => decimals
  - NaN => Not a Number
  - Array => technically a special object []

  js method => typeof <somethiung>

*/

// console.log(typeof false)

/* 
  JavaScript Array Methods

  Iteration????
  => Going thro all the elements of an array

*/

// let => CAN REDEFINE
// const => CANNOT REDEFINE
// // var

let names = ["wally", "ashley", "dominick", "cindy", "joshua", 1, 4,5]

// console.log(names)

// loop over the array and console log each name???

for (let i = 0; i < names.length; i++) {
	console.log(i)
	const name = names[i]
	console.log(name)
	// console.log(names[i])
}

// First Array Method

// Whats the method called for when you want to for something to each element in the array???

// .FOREACH
console.log("\nFOREACH\n")
console.log("FIRST", names)
console.log(
	names.forEach((name) => {
		// name => names[i]
		name = name + "s"
		console.log(name + "'s excited to learn!")
	})
)
console.log("AFTER", names)

// A foreach array method does NOT change the original array (by default)
// The return of the forEach is UNDEFINED

// ? What is an array method for changing each element in the array???
// [1,2,3] => add 2 to each => [3,4,5]
// ! MAP
// what a mapping an array does:
// takes in an array, we modifiy each element by some condition

console.log("\n")
let nums = [1, 2, 3]
// let numsAdd2 = []
// nums.forEach((num) => {
// 	const newNumber = num + 2
// 	// how to add newNumber to new Arry???
// 	numsAdd2.push(newNumber)
// })
// console.log(numsAdd2)

const mappedArr = nums.map((num) => {
	return num + 2
})
console.log(mappedArr)
// NON-DESTRUCTIVE METHODS
console.log(nums)

// Return of the Mapped Array will ALWAYS be the SAME LENGTH AS THE ORIGINAL

// ? What is an array method called when you are looking for  certain types of elements?

// [1,2,3] => all that are odd? => [1,3]

// ! FILTER (think of searching for all things)

// arr in
// filter by some conditions
// returns the arr of all things that stasify those conditions
console.clear()
const moreNums = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 10, 5, 5, 5]
// only what nums that are the number 5
let onlyFives = []
// moreNums.forEach((num) => {
// 	// we need to check if it's the number 5?
// 	if (num === 5) {
// 		console.log("found one!")
// 		onlyFives.push(num)
// 	} else {
// 		console.log("nope....")
// 	}
// })
// console.log(onlyFives)

console.log(
	moreNums.filter((num) => {
		// the return of the filter needs to be a BOOLEAN
    console.log("FILTER...", num)
		return num === 5
	})
)

// arr in -> some BOOLEAN condition -> an array of the input length OR less, never more!

// console.clear()
// ! FIND

// Difference between FIND and FILTER?
// Find will return the FIRST ELEMENT the stasifies your condition
console.log(
	moreNums.find((num) => {
		// the return of the filter needs to be a BOOLEAN
    console.log("FINDING...", num)
		return num === 5
	})
)

console.clear()

console.log(
	names.filter((name) => {
		// the return of the filter needs to be a BOOLEAN
    console.log("FILTERING...", name)
		return name === 5
	})
)

console.log(
	names.find((name) => {
		// the return of the filter needs to be a BOOLEAN
    console.log("FINDING...", name)
		return name === 5
	})
)