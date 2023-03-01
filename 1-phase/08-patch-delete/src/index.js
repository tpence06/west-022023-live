/* 
    ! PATCH and DELETE Requests!

    Review Questions!

    1. What is the difference between PUT and PATCH?

*/

// ! GLOBAL VARIABLES
const BASE_URL = "http://localhost:3000/books"

// ! IMPORTANT GLOBAL DOM ELEMENTS
const bookList = document.getElementById("book-list")
const bookForm = document.getElementById("book-form")

const fetchAllBooks = () => {
	fetch(BASE_URL)
		.then((response) => response.json())
		.then((books) => {
			clearList()
			books.forEach((book) => {
				renderOneBook(book)
			})
		})
}

const clearList = () => {
	bookList.innerHTML = ""
}

const renderOneBook = (bookObj) => {
	const li = document.createElement("li")
	const h3 = document.createElement("h3")
	const pAuthor = document.createElement("p")
	const pPrice = document.createElement("p")
	const img = document.createElement("img")

	h3.textContent = book.title
	pAuthor.textContent = `Author: ${book.author}`
	pPrice.textContent = `$${book.price}`

	img.src = book.imageUrl
	li.className = "list-li"
}

const handleForm = (event) => {
	event.preventDefault()
	const newBookObj = {
		title: event.target.title.value,
		author: event.target.author.value,
		price: Number(event.target.price.value),
		imageUrl: event.target.imageUrl.value,
		inventory: parseInt(event.target.inventory.value),
		reviews: [],
	}
	createBook(newBookObj)
}

const hideForm = (e) => {
	if (e.target.textContent === "Hide Form") {
		bookForm.parent.hidden = true
		e.target.textContent = "Show Form"
	} else {
		bookForm.hidden = false
		e.target.textContent = "Hide Form"
	}
}

const createBook = (bookObjToAdd) => {
	const postReqObj = {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(bookObjToAdd),
	}
	fetch(BASE_URL, postReqObj)
		.then((response) => response.json())
		.then((newBook) => {
			renderOneBook(newBook)
		})
		.catch((err) => console.log(err))
}

const init = () => {
	fetchAllBooks()
	bookForm.addEventListener("submit", handleForm)
	// document.getElementById("hide").addEventListener("click", hideForm)
}

init()
