// Code 👀
/* 
    ! DOM Events
    
    Warm Up Questions:
    
    1. What are JS Events?
    - User Interactions

    2. List a few types of JS Events?
    - Click, mouseOver, keydown, keyup, keypress, scroll, touchcontrols, submit!

    3. What are the 2 required arguments for .addEventListener()?
    - 1st: event => datatype? 
    - 2nd arg: callback function
        - What happens when some event happens
    something.addEventListener(event: string, cbFunc)
    someNode/Element.addEventListener("click"||"submit", (event) => {
        does something when this event happens
    })

*/

/* 
    Deliverables

    1. (Review) Replace Content from the DOM list with book inventory
    
    2. Can Remove a book by clicking on it

    3. Can Add a book through the form

*/

// 1. (Review) Replace Content from the DOM list with book inventory

const bookList = document.querySelector("#book-list")

const inventory = bookStore.inventory

// {
//     id: number,
//     title: string,
//     author: string,
//     price: number,
//     reviews: Array of Review Objects,
//     inventory: number,
//     imageUrl: string
// }

const renderOneBook = (book) => {
	const li = document.createElement("li")
	const h3 = document.createElement("h3")
	const pAuthor = document.createElement("p")
	const pPrice = document.createElement("p")
	const img = document.createElement("img")

	// console.log(book)
	li.id = `book-${book.id}`
	h3.textContent = book.title
	pAuthor.textContent = `Author: ${book.author}`
	pPrice.textContent = `$${book.price}`
	img.src = book.imageUrl
	img.alt = book.title

	// benefit of dynamic events, is that we don't need to Re-Find all the li tags
	li.addEventListener("click", (event) => {
		li.remove()
		// alert(book.title)
	})

	li.append(h3, pAuthor, pPrice, img)
	bookList.prepend(li)
}

bookList.innerHTML = ""
inventory.forEach((oneBook) => {
	renderOneBook(oneBook)
})
// renderOneBook(inventory[0])
// renderOneBook(inventory[1])

// 2. Can Remove a book by clicking on it

// liTag.event("click", remove the li tag)

// const firstLi = document.getElementById("book-1")
// // firstLi.querySelector("img").addEventListener("click", (evnt) => {
// firstLi.addEventListener("click", (event) => {
// 	console.log(event.currentTarget)
// 	console.log(event.target)
// 	firstLi.remove()
// })

// document.getElementById("book-2").addEventListener("click", (event) => {
// 	event.currentTarget.remove()
// })

// inventory.forEach(book => {
//     // find each book, then add that event listener
// })

// 3. Can Add a book through the form

// How to had a book?
// 0 => Find the form
// 1 => type in each input field
// 2 => Click add book button
// 3 => Add the new book to the top of the list

const form = document.getElementById("book-form")

// const formTitle = document.getElementById("form-title")
// const formAuthor = document.getElementById("form-author")
// const formPrice = document.getElementById("form-price")
// const formImage = document.getElementById("form-imageUrl")
// const formInv = document.getElementById("inventory")

// form.addEventListener("submit", (event) => {
// 	event.preventDefault()

// 	console.log(event)

// 	// create a book obj from the formData
// 	// pass that obj into our renderOneBook function
// 	// debugger
// 	const bookObj = {
// 		title: event.target["title"].value,
// 		author: event.target.author.value,
// 		price: event.target.price.value,
// 		imageUrl: event.target["image-Url"].value,
// 		id: event.target.title.value,
// 	}

// 	renderOneBook(bookObj)
// })

// Click Event Form

const submitButton = document.getElementById("add book")
form.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(event.currentTarget)
    // check if the event target is the submit button
    if (event.target === submitButton) {
        console.log("YAY")
    } else {
        console.log("Nay")
    }
})