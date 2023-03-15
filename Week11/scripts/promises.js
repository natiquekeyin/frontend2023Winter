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
