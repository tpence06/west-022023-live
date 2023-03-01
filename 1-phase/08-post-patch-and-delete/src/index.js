/* 
    ! POST Requests and Forms!

    Review Questions!

    1. What are the main HTTP Methods?
        1.  GET
        2.  POST
        3.  PATCH
        4.  PUT
        5.  DELETE

    2. Name the 7 (or 5) RESTful Routes?
        1.  INDEX   (GET ALL)
        2.  SHOW    (GET ONE)
            2.5 NEW 
        3.  CREATE  (CREATE ONE)
        4.  UPDATE  (UPDATE ONE BY ID)
            3.5 EDIT
        5.  DELETE  (DELETE ONE)

    3. What does the 'fetch' return?
        console.log(fetch(SOME_URL))
        PROMISE

*/

// ! GLOBAL VARIABLES
const BASE_URL = "http://localhost:3000/books"

// ! IMPORTANT GLOBAL DOM ELEMENTS
const bookList = document.getElementById("book-list")
const bookForm = document.getElementById("book-form")

const fetchAllBooks = () => {
	const getReqObj = {
		method: "GET",
		header: {
			"Content-type": "application/json",
		},
	}
	fetch(BASE_URL)
		.then((response) => {
			return response.json()
		})
		.then((books) => {
			console.log(books)
			clearList()
			books.forEach((book) => {
				renderOneBook(book)
			})
			// return "hello"
		})
	// .then((something) => console.log(something))
	// const reponse = fetch(URL)
	// const books = response.json()
	// books.forEa...
}

const clearList = () => {
	bookList.innerHTML = ""
}

const renderOneBook = (bookObj) => {
	// console.log(bookObj)
	// const li = document.createElement("li")
	const liHTML = `
    <li>
        <h3>${bookObj.title}</h3>
        <p>${bookObj.author}</p>
        <p>$${bookObj.price}</p>
        <img src=${bookObj.imageUrl} alt=${bookObj.title}>
    </li>
    `
	// console.log(liHTML)
	// ? bookList.append
	// bookList.innerHTML += liHTML
	// ? how to PREpend?

	bookList.innerHTML = liHTML + bookList.innerHTML
}

const handleForm = (event) => {
	event.preventDefault()
	// console.log(event)
	// debugger
	// take all the data from the form
	// and create a new book object with it
	const newBookObj = {
		title: event.target.title.value,
		author: bookForm.author.value,
		price: Number(event.target[2].value),
		imageUrl: document.getElementById("form-imageUrl").value,
		inventory: parseInt(event.target.querySelector("#inventory").value),
	}
	// Rendering the book WITHOUT PERSISTING TO THE DATABASE
	// When you refresh the page, all the new data is gone
	// // renderOneBook(newBookObj)

	// ! NOW, we want to send this newBookObj as a POST request to our backend/server/json-server
	addBookToDatabase(newBookObj)
}

const addBookToDatabase = (bookObjToAdd) => {
	// this func is where we take the book obj from the form,
	// and send the POST Request
	// Once we get the 'successful' response back
	// Add the new book onto our page

	// ! CREATE
	const postReqObj = {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			// "Accepts": "application/json",
			// "Authorization": Auth-Token,
		},
		body: JSON.stringify(bookObjToAdd),
	}
	console.log(postReqObj)
	// ! OPTIMISTIC RENDERING
	// We can render the book BEFORE the POST request confirms a successful creation
	// renderOneBook(bookObjToAdd)

	fetch(BASE_URL, postReqObj)
		.then((response) => response.json())
		.then((newBook) => {
			console.log(newBook)
			// why use newBook over bookObjToAdd?
			// ! PESSIMISTIC RENDERING
			// We need to WAIT for the server to successfullty create the new book instance BEFORE updating the DOM
			renderOneBook(newBook)
			// debugger
		})
		// .catch((err) => console.log(err))
}

const init = () => {
	fetchAllBooks()
	bookForm.addEventListener("submit", handleForm)
}

init()
