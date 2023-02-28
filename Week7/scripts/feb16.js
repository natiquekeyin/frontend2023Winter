// Step 1: get refernce to the form in html...

let myForm = document.querySelector("#form1");

// Step 2: Attach a submit event to myForm and run a function againset it...

myForm.addEventListener("submit", function (e) {
  // get reference to each input box here and store tht in a variable...
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  addBookToList(title, author, isbn);
  clearFields();

  e.preventDefault(); //prevent the default action...
});

function addBookToList(t, a, i) {
  if (t === "" || a === "" || i === "") {
    // alert("Please fill all the fields");
    showAlert("Please fill all the fields", "error");
  } else {
    let row = document.createElement("tr");

    row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td <td><a href="#">DELETE<a></td>`;
    document.querySelector("#list").appendChild(row);

    showAlert("Book added successfully!!!!", "success");
  }
}

function clearFields() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
}

function showAlert(m, c) {
  let popup = document.createElement("p");
  popup.innerText = m;
  popup.className = c;
  document.querySelector("#book-list").appendChild(popup);
}

// We will start from here... first we will work on showAlert()... and then we will continute with this project... i) like deleting the book from the list ii) displaying a color popup[done this but will repeat...]... iii) permanently storing the books in browser memory iv) Apply core object orirented programming to this project.. (classes and objects...)
