

const myLibrary = [];





class Book {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }

}






function addBookToLibrary() {

    book = {}

    book.title = title.value;
    book.author = author.value;
    book.pages = pages.value;
    book.read = read.checked;


    myLibrary.push(book)
    console.log(myLibrary)

    displayBooks()
    
   
}


const bookForm = document.querySelector("form")

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.querySelector("#title")
    let author = document.querySelector("#author")
    let pages = document.querySelector("#pages")
    let read = document.querySelector("#read")

    title = title.value;
    author = author.value;
    pages = pages.value;
    read = read.checked;

    new Book(title, author, pages, read)

    addBookToLibrary()

})


i = 0
e = 0
function displayBooks() {
    
    const body = document.querySelector("body")

    const table = document.querySelector("table")

    const tr = document.createElement("tr");

    const titleTd = document.createElement("td")
    const authorTd = document.createElement("td")
    const pagesTd = document.createElement("td")
    const readTd = document.createElement("td")

    const remove = document.createElement("button")
    remove.setAttribute("data-index", e)

    const readBtn = document.createElement("button")
    readBtn.setAttribute("data-index", e)
    e++
    
    table.appendChild(tr)

    tr.appendChild(titleTd)
    tr.appendChild(authorTd)
    tr.appendChild(pagesTd)
    tr.appendChild(readTd)
    tr.appendChild(remove)

    titleTd.textContent = myLibrary[i].title;
    authorTd.textContent = myLibrary[i].author;
    pagesTd.textContent = myLibrary[i].pages;
    

    remove.textContent = "remove"
    remove.addEventListener("click", deleteBook)

    function deleteBook() {
        tr.remove()
        delete myLibrary[remove.dataset.index]
    }

    readTd.appendChild(readBtn)
    readBtn.textContent = myLibrary[i].read;
    
    readBtn.addEventListener("click", changeBoolean)
    
    function changeBoolean() {

        if (readBtn.textContent === "true") {
            readBtn.textContent = false;
            myLibrary[readBtn.dataset.index].read = false
    
        }
        else {
            readBtn.textContent = true
            myLibrary[readBtn.dataset.index].read = true
        }
    }

    i++
    
}




const dialog = document.querySelector("dialog");

const showBtn = document.querySelector("dialog + button");

const closeBtn = document.querySelector("dialog button")



showBtn.addEventListener("click", () => {
    dialog.showModal()
}) 

closeBtn.addEventListener("click", () => {
    dialog.close()
})