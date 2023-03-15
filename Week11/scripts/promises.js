// Promise in JS is just like a real world promise...
// I have promised to take a review session on Friday
// If I take the session ... I fullfilled the promise
// If I dont the session... I do not fullfil the promise

// A promise is fullfilled.. it is called "resolve"
// A promise is not fullfilled.. it is called "reject"

// let p = new Promise();

// let p = new Promise(function(resolve,reject){});

// executing/using the promise...
//p.then(); //successfull path.. when promise gets resolved, then( ) would be activated...

// p.catch(); // unsuccessfull path...when pmise gets rejected the catch() would be activated....

// creating a promise...
let p = new Promise(function (resolve, reject) {
  let a = 2 + 5; //any processing
  if (a === 7) {
    resolve("Success!");
  } else {
    reject("Failed");
  }
});

p.then(function (message) {
  document.querySelector(
    "#output"
  ).innerHTML = `<strong>Good</strong> The message from promise is ${message}`;
}).catch(function (message) {
  document.querySelector(
    "#output"
  ).innerHTML = `<strong>Bad</strong> The message from promise is ${message}`;
});

// https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
// Please read this article before next session... at 1 pm...
// Fetch API uses the concept of promises very comprehensively...

// Next session we will discuss Fetch API...

// Fetch API: Most developers use fetch... api!
// fetch returns a promise (resolved or rejectd...)

// console.log(fetch("https://reqres.in/api/users"));

let button1 = document.querySelector("#btn1");

button1.addEventListener("click", loadFile);

function loadFile() {
  fetch("./data/test.txt")
    .then((res) => {
      return res.text(); //reads teh readable stream but still returns a promise..
    })
    .then((data) => {
      document.querySelector(
        "#output1"
      ).innerHTML = `<strong>The error message is :${data}</strong>`;
    })
    .catch((err) => {
      document.querySelector("#output1").innerHTML = `<strong>${err}</strong>`;
    }); //to catch that promise we again need another then that will actually display the data...
}

let button2 = document.querySelector("#btn2");

button2.addEventListener("click", loadCustomers);

function loadCustomers() {
  fetch("./data/customers.json")
    .then((res) => {
      return res.json(); //to read the json stream reader...
    })
    .then((data) => {
      let output = "";
      data.forEach((item) => {
        output += `<li>Name: ${item.name}</li><li>Phone: ${item.phone}</li>----`;
      });
      document.querySelector("#output1").innerHTML = output;
    })
    .catch((err) => {
      document.querySelector(
        "#output1"
      ).innerHTML = `<strong>The error: ${err}</strong>`;
    }); //to catch that promise we again need another then that will actually display the data...
}

let button3 = document.querySelector("#btn3");

button3.addEventListener("click", loadAPI);

function loadAPI() {
  fetch("https://api.github.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<div class="profile"> Welcome ${user.login}! <br>
        <h4>${user.login}</h4><img src=${user.avatar_url} width="100" alt="profile" class="pic"/> <br>
        <a href="${user.html_url}">More info..</a>
        </div>`;
      });
      document.querySelector("#output1").innerHTML = output;
    })
    .catch((err) => {
      document.querySelector(
        "#output1"
      ).innerHTML = `<strong>API data nor recevied because: ${err}</strong>`;
    });
}

// updated March 15
