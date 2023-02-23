// Code Here 👀
// console.log(bookStore)

/* 
    DOM MANIPULATION

    What is the DOM?
    - Document Object Method
    - Middle Man that ties in the html/css/js
    - A webpage
    - Static OR Dynamic

    DOM is tree?
    - the way you access is through methods to traverse the tree, beacuse all the Nodes are connected

    Selector Methods
    - someNode.querySelector(asfhafgsfkhj) 
        - "#looking-for-id"
        - ".looking-for-class"
        - returns first Element of a query
    - document.getElementById()
        - CAN ONLY BE CALLED ON THE DOCUMENT
        - but it requires that all elements (that you are looking for) have an ID
        - Make sure to have UNIQUE id's
    ex: 
        <div id="first">
            <p id="first">first</p>
            <ul id="list">
                <li id="1"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="something">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>

    - .querySelectorAll()
        - returns an HTML Collection
        - funcs like array
        - May not be able to use array methods

    - .getElementsByClassName()
        - Node Collection
        - good CSS selecting method


*/

const findList1 = document.getElementsByClassName("list")[0]
const findList2 = document.getElementById("header")
const findList3 = document.querySelector("#header")
const findList4 = document.querySelector(".list")

// console.log(findList2 === findList4)

const bookList1 = document.getElementById("book-list")
const bookList2 = document.querySelector("#book-list")
const bookList3 = findList1.querySelector("#book-list")

// console.log(bookList1 == bookList3)

/* 
    CREATING/Modifying

    This is the (initial) power of JAVASCRIPT!

    Without js, the HTML page will not change.

*/

console.log(bookStore)

// ? Add the title to the page
const h1Title = document.querySelector("h1")
// const name = bookStore.name
h1Title.textContent = bookStore.name

const allH2 = document.querySelectorAll("h2")

const h2Location = allH2[0]
h2Location.textContent = bookStore.location

const h2Address = allH2[1]
h2Address.textContent = bookStore.address

// const h2Hours = allH2[2]
// const h2Hours = can i do this in JS?
const h2Hours = document.createElement("h2")
document.getElementById("title").append(h2Hours)
h2Hours.textContent = bookStore.hours

// Our Test Inventory Object
// {
//     id:1,
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Marjin Haverbeke',
//     price: 10.00,
//     reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
//     inventory: 10,
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    
// }

const firstInventoryObj = bookStore.inventory[0]

bookStore.inventory.forEach(inventoryObj => {

    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const pAuthor = document.createElement("p")
    const pPrice = document.createElement("p")
    const img = document.createElement("img")
    
    h3.textContent = inventoryObj.title
    pAuthor.textContent = "Author: " + inventoryObj.author
    pPrice.textContent = `$${inventoryObj.price}`
    img.src = inventoryObj.imageUrl
    img.alt = inventoryObj.title
    
    li.id = inventoryObj.id
    li.append(h3, pAuthor, pPrice, img)
    bookList1.append(li)
})


// const secondInvObj = bookStore.inventory[1]

// const li = document.createElement("li")
// const h3 = document.createElement("h3")
// const pAuthor = document.createElement("p")
// const pPrice = document.createElement("p")
// const img = document.createElement("img")

// h3.textContent = secondInvObj.title
// pAuthor.textContent = secondInvObj.author
// pPrice.textContent = secondInvObj.price
// img.src = secondInvObj.imageUrl
// img.alt = secondInvObj.title

// li.id = secondInvObj.id
// li.append(h3, pAuthor, pPrice, img)
// bookList1.append(li)

