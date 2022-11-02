import { deleteCard } from "./delete.js";
import { add } from "./add.js";

const container = document.getElementById('container')
const addBook = document.getElementById('addBook')

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.myBook = function () {
            const createDiv = document.createElement('div')
            const createTitle = document.createElement('h2')
            const createAuthor = document.createElement('h3')
            const createDelete = document.createElement('div')
            const createPages = document.createElement('p')
            createDelete.setAttribute('class', 'delete')
            createDelete.addEventListener('click', deleteCard)
            createTitle.textContent = `${this.title}`
            createAuthor.textContent = `Author: ${this.author}`
            createPages.textContent = `${this.pages} pages`
            createDiv.setAttribute('class', 'card')
            createDiv.appendChild(createTitle)
            createDiv.append(createDelete)
            createDiv.appendChild(createAuthor)
            createDiv.appendChild(createPages)
            container.append(createDiv)
        }
    }
}

const hidePage = (e) => {
    container.style.display = 'none';
    addForm.style.opacity = '100%'
}
addBook.addEventListener('click', hidePage)


const book1 = new Book('The Hobbit', 'Tolkien', 195, true);
const book2 = new Book('The Hobbit', 'Tolkien', 195, true);
const book3 = new Book('The Hobbit', 'Tolkien', 195, true);

book1.myBook()
book2.myBook()
book3.myBook()

export { Book }