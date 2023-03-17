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

//   if (parts[1] === "Noman") {
//     document.querySelector("#output2").innerHTML = `Noman Atique`;
//   } else if (parts[1] === "Jonah") {
//     document.querySelector("#output2").innerHTML = `Jonah Greening`;
//   } else if (parts[1] === "Tyler") {
//     document.querySelector("#output2").innerHTML = `Tyler Stuckless`;
//   }

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

let button1 = document.querySelector("#btn1");

button1.addEventListener("click", function (evt) {
  let message = document.querySelector("#str").value;
  let parts = message.split(".");

  switch (parts[1]) {
    case "html":
      document.querySelector("#output2").innerHTML = `Noman Atique`;
      break;

    case "Jonah":
      document.querySelector("#output2").innerHTML = `Jonah Greening`;
      break;

    case "Tyler":
      document.querySelector("#output2").innerHTML = `Tyler Stuckless`;
      break;
    default:
      document.querySelector(
        "#output2"
      ).innerHTML = `Sorry you are not present today!`;
      break;
  }

  evt.preventDefault();
});
