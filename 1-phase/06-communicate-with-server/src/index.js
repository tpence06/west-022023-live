// Code Here 👀👀

/* 
    ! Communicating with the Server

    // HOW THE WEB WORKS!

    Warm Up Questions:

    1. What is the Request/Reponse Cycle?
        - communication between the front/back, client/server
        - client?
            - Webpage, chrome
        - server?
            - where the info is stored
            - computer that holds some data
        - a client sends a REQUEST to the server
        - then the server processes that REQUEST and RESPONDS in some way
        - then the client will take that RESPONSE and display it to the dev/user in some way
            - as html/js/css, react, as terminal output

    2. What is HTTP?
        - HyperText Transfer Protocol (Secure)

    3. What is JSON?
        - JavaScript Object Notation

    4. What are the main HTTP requests/actions/methods?
        ? C(reate)
        ? R(ead)
        ? U(pdate)
        ? D(elete)
        1. GET  => Read Route
            - Pulls info from the server
            - Of getting resources from an endpouint
            - ex: get all the Stores
        2. POST => Create Route
            - Sending data to add to the server
            - Ex: Add a new store to our collection
        3. PUT => Update Route
            - Replace an instance/object with updated data
            - Ex: change hours of third store to something else
        4. PATCH => Update Route
            - Replace the attribute of an instance/object with updated data
            - Ex: change hours of third store to something else
        5. DELETE => Delete
            - Removes an instance/obj from our server/database/array
        // 6. TRACE
        // 7. OPTIONS
        // 8. HEAD
        
    5. RESTful Routing
        ? REpresentational State Transfer

        - A conventional way that we the devs have decided a logical way to name our routes

        // // http://localhost:3000/
        
        // ! Allpertain to ONE class/model/type of thing
        Ex => Stores
        REST Name   /       path   /   HTTP
        1.  INDEX       /stores         GET
            route that gets ALL the STORES in the db
            * Returns an ARRAY
        2.  SHOW        /stores/:id     GET
            An individual STORE
            * Return ONE ELEMENT/INSTANCE/OBJECT
        3. NEW          /stores/new     GET
            Give the user a FORM to make a new store
        4. CREATE       /stores         POST
            we take data from the NEW form and send to our server
            because the VERB is different than the index, we don't have to worry about getting the wires crossed
            ! /stores?location=new./....
            ! BODY of the request is where all the info will live
            * Usually just return the store object created
            ? can also return ALL the stores plus the new one
        5. EDIT         /stores/:id/edit    GET
            Gives the user a form the EDIT an object
        6. UPDATE       /stores/:id        PATCH/PUT
            We take our updated data friom the eddit form
            and Send to the server as a patch/put
            * Usually just return the store object created
        7. DELETE       /stores/:id    DELETE
 */

const BASE_URL = "http://localhost:3000"
let allBooks = []

// What is the Function to send any request?

// ! FETCH
// All that fetch is doing, is sending requests to an endpoint

const fetchAllBooks = () => {
	// fetch all the books
	// First!
	// Fetch needs an endpoint
	// fetch(endpoint)
	// fetch(BASE_URL + "/books")
	// What is the datatype of the RETURN of fetch?
	// Returns a PROMISE?
	// we send the request to the server
	// the server responds with a PROMISE that it WILL complete the request on it's own time
	// once the process is completed, you (the client) will get the response
	// THE REASON!
	// Is for when the server may take more time then the client needs to complete their functions
	// The server process can run in the BACKGROUND as the client can continue on to do other tasks

	// fetch all books (takes forever)
	// display all stores
	// add like buttons
	// add pics
	// ad stuff

	// fetch is an ASYNCHRONUS of function?

	fetch(BASE_URL + "/books")
		.then((response) => {
			// ! THIS IS WHERE WE CHANGE THE RESPONSE TO A MANAGABLE TYPE OF DATA (JSON)
			return response.json()
		})
		.then((booksArray) => {
			// ! THIS IS WHERE WE DO STUFF WITH THE DATA
			// debugger
			console.log({ booksArray })
			allBooks = booksArray
			// booksArray.forEach((book) => renderOneBook(book))
		})

	// fetch(BASE_URL + "/books")
	// .then(res => res.json())
	// .then(data => {
	// })
}

// fetchAllBooks()

const fetchFirstBook = () => {
	fetch(BASE_URL + "/books/" + 1)
		.then((response) => response.json())
		.then((firstBook) => {
			console.log({ firstBook })
		})
}

const fetchSecondBook = () => {
	fetch(BASE_URL + "/books/" + 2)
		.then((response) => response.json())
		.then((sgkdhjdskmhfgsdjkhfg) => {
			console.log({ sgkdhjdskmhfgsdjkhfg })
		})
}

const fetchOneBook = (bookID) => {
	// fetch(BASE_URL + "/books/" + bookID)
	fetch(`${BASE_URL}/books/${bookID}`)
		.then((response) => response.json())
		.then((oneBookObj) => {
			console.log(oneBookObj)
            console.log(oneBookObj.name)
		})
        .catch(err => console.log(err))
}
