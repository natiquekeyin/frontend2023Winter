// function User(){ } constructor function??- old javascript way of handing object oriented programming (OOP)
// ES5 ES6 (advanced javascript) introduced the concept of "class"[which is a real OOP concept to be used in oop languages]
// Class --
//like a template for creating objects...it contains data[the variables] & code[the functions] together in one wrapper...
// To use a class, we NEED to create object of this class... and through object we can access all things inside class(data and function)
// every class can have a special method called "constructor".
// constructor function is alwasy automatically called when you create object of the class....
// constructor in almost all oop languages has the same name as class, but in js we use "constructor" for it...

class Book {
  constructor(t, a, i) {
    this.title = t;
    this.author = a;
    this.isbn = i;
  }

  addBookToList(book) {
    let row = document.createElement("tr");

    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td> <td><a href="#" class="delete">DELETE</a></td>`;
    document.querySelector("#list").appendChild(row);
  }

  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  showAlert(m, c) {
    let popup = document.createElement("p");
    popup.innerText = m;
    popup.className = c;
    popup.id = "box";
    document.querySelector("#book-list").appendChild(popup);

    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  removeBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      showAlert("Book removed successfully", "success");
    } else {
      showAlert("Wrong area .. click on DELETE instead", "error");
    }
  }
}

let myForm = document.querySelector("#form1"); //grab the form from html
myForm.addEventListener("submit", (e) => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  var book = new Book(title, author, isbn);
  if (book.title === "" || book.author === "" || book.isbn === "") {
    book.showAlert("No field should be empty - class method", "error");
  } else {
    book.addBookToList(book);
    book.showAlert("Book Successfully added - class method", "success");
    book.clearFields();
    Store.addBook(book);
  }

  //   Store.displayBooks();
  e.preventDefault();
});

document.querySelector("#book-list").addEventListener("click", function (evt) {
  var book = new Book(); //creating object becasue i want to access removeBook which is a normal method and cannot be accessed with object name..
  book.removeBook(evt.target);
  evt.preventDefault();
});

// Store class will be used for multiple purposes... 1. storing book object in "local storage", 2. retrieving book from local storage,.. 3. deleteing book objexts from local storage..

// if we define a fucntion as "static", it CAN BE ACCESSED without creating an object of that class..
//  Store.getBooks();
// Math.random(); Math.floor()

class Store {
  static getBooks() {
    var books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    var books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static displayBooks() {
    var books = Store.getBooks();
    books.forEach((book) => {
      var objBook = new Book();
      objBook.addBookToList(book);
    });
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks);
// end of the doc
