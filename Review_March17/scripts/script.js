//  let user = {name:"Alan", age:20}
// console.log(user.name, user.age);
// Constructor function...
// var objBook = new Book("JavaScript", "Alan SMith");
// var objBook2 = new Book("HTML", "Tim Berner's Lee");

// console.log(objBook.title, objBook.author);
// console.log(objBook2.title);

// console.log(
//   `The book <strong> ${objBook.title}</strong> is written by <strong> ${objBook.author}</strong>. Thanks!`
// );

// document.querySelector(
//   "#output"
// ).innerHTML = `The book <strong> ${objBook2.title}</strong> is written by <strong> ${objBook2.author}</strong>. Thanks!`;

function Book(t, a) {
  this.title = t;
  this.author = a;
}

let form = document.querySelector("#f1");

form.addEventListener("submit", function (evt) {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  // Pass these parameters to constructor function and create a new object...

  var objBook = new Book(title, author);
  document.querySelector(
    "#output"
  ).innerHTML = `The book <strong><em>${objBook.title}</em></strong> is written by ${objBook.author}`;

  evt.preventDefault();
});
