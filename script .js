

const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
   
}


function displayBooks() {
    
    const books = document.querySelector(".books");
    books.textContent = myLibrary;
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