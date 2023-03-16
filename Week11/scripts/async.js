// Async /Await....
// Modern (ES5 6) Component that are simpler than promises and do asynchronous with a less complex syntax....
// async functions return promise..

// async function hello(a) {
//   // we use "await" keyword with the processign that is waiting to be solved...
//   return a;
// }

// //console.log(hello("Alan"));

// hello("Alex").then((res) => {
//   console.log(res);
// });

let button1 = document.querySelector("#btn1");

button1.addEventListener("click", fetchData);

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  document.querySelector("#output").innerHTML = data.title;
}

let button2 = document.querySelector("#btn2");

button2.addEventListener("click", fetchData2);

let fetchData2 = async () => {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();

  data.forEach((element) => {
    document.querySelector("#output").innerHTML += `<li>${element.login}</li>`;
  });
};
