// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</td>
    `

    list.appendChild(row);
}

// Clear form fields function
UI.prototype.clearFields = function(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

//Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
     
    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate UI
    const ui = new UI();

    //add book to list
    ui.addBookToList(book);

    // clear form fields
    ui.clearFields();

    console.log(book);
    e.preventDefault();
});