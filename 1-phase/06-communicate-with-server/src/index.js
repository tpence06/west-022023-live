// Code Here 👀👀

/* 
    ! Communicating with the Server

    Warm Up Questions:

    1. What is the Request/Reponse Cycle?
        -communication between the front/backends, client/server
        client?
            -webpage, chrom
            -server?
                -where the info is stored
                -computer that holds data
            -client sends request to server
            -then server processes that request and responds
            in some way.
            -then the client will take response and display 
            it to the dev/user in some way
                -as html/js/css, react, as terminal output

    2. What is HTTP?

    3. What are the main HTTP methods?
    CRUD (create, read, update, delete)
        1. GET
        2. POST
        3. PUT
        4. PATCH
        5. DELETE
        
    4. RESTful Routing

        // ! Allpertain to ONE class/model/type of thing
        Ex => Stores

        1. 
        2. 
        3. 
        4. 
        5.
        6. 
        7. 
 */

const BOOKS_URL = "http://localhost:3000/books"
let allBooks = []

// ! FETCH
// All that fetch is doing, is sending requests to an endpoint

const fetchAllBooks = () => {
    fetch(BOOKS_URL + "/books").then((response) => {return response.json()}).then((booksArray) => {
        console.log((booksArray))
    })
    //RETURNS a promise. Sending a request to server and it 
    //responds that it will complete request on its own time
    
}