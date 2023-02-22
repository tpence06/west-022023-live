// Code Here 👀👀👀

/* 
  Warm up ?'s

  1. What is a function???
    - using it to perform tasks or series
    - Blueprint for how a program should run
    - list of INSTRUCTIONS
  
  ex: 
    func that logs hello to the console
    func the sends an email to someone
  
  2. How to declare func in JS?
      type      name      parameters/argument   block
    - function nameOfFunc(something or nothing) {
      bunch of stuff to do??
      more stuff?
    }

    Todo List called Do Laundry
    - separate colors
    - go to laundry room.....
    - return clean clothes

    call nameOfFunc, it does whatever's inside the curly brackets

    Arrow Funcs
    - const nameOfArrowFunc = () => {}

    3. Call a function?

*/
console.clear()
console.log("FUNCTIONS\n")
function sayMyName() {
	// console.log("Sup phil")
	return "Sup phil"
}

function errorMessages() {
	return "ERROR"
}

// console.log(sayMyName)
// console.log(sayMyName())

// * Let's add in some args/parameters!

const sayYourName = (name = "Person") => {
	// console.log("Hello " + name + "!")
	console.log(`Hello ${name}!`)
}

sayYourName()
sayYourName("Connor")
sayYourName("Ashley")
sayYourName("Tom")

/* 
SCOPE!

What IS Scope?

What are the levels of scope?
- Global
- available to the ENTIRE FILE/PRGRAM Etc...
- Function
- Block
  - Local
*/

console.clear()
const GLOBAL_GYM = "GLOBO GYM"

console.log(GLOBAL_GYM)

function averageJoes() {
	const averageJ = "Average Joe"
	console.log(`${averageJ}'s is better than ${GLOBAL_GYM}`)
	function piratePete() {
		console.log(`argggg ${averageJ} is good`)
	}
	piratePete()
}

averageJoes()
