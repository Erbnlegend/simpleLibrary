import { Book } from "./script.js"

const newBook = document.getElementById('addNewBook');
const addForm = document.getElementById('addForm')
newBook.addEventListener('click', add)

function add (e) {
    e.preventDefault()
    container.style.display = 'grid'
    addForm.style.opacity = '0%'
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const book4 = new Book(title, author, pages, read)
    book4.myBook()
}

export { add }