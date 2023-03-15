let button1 = document.querySelector("#btn1");

button1.addEventListener("click", loadData);

function loadData() {
  //1.create the object
  const xhr = new XMLHttpRequest();

  //2. Open/do configuration of xhr..
  xhr.open("GET", "./data/test.txt");

  //3. what do to when data is received successfully

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector(
        "#output"
      ).innerHTML = `<strong><em>${this.responseText}</strong></em>`;
    } else {
      document.querySelector(
        "#output"
      ).innerHTML = `<strong>Error - either file or data not received</strong>`;
    }
  };

  //   4. execute this xhr request..
  xhr.send();
}

// HTTP statuses:
// 200: "OK" Successful
// 404: "Not found"
// 403: "Forbiddne"

// function loadData() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "./data/test.txt");
//   console.log("READYSTATE", xhr.readyState);

//   //   xhr.onreadystatechange = function () {
//   //     if (this.status === 200 && this.readyState === 4) {
//   //       console.log(this.responseText);
//   //     }
//   //   };

//   xhr.onload = function () {
//     console.log("READYSTATE", xhr.readyState);
//     if (this.status === 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhr.send();
// }

// readystate values...

// 0: request not initiazled...
// 1: server connection established...
// 2 : request recieved
// 3:  processing request
// 4: request finished and response is ready

// Trying to read JSON data now...

let button2 = document.querySelector("#btn2");

button2.addEventListener("click", loadJSON);

function loadJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/customer.json");
  xhr.onload = function () {
    if (this.status === 200) {
      // data is in json format not normal javaScript???
      let customer = JSON.parse(this.responseText);
      //   JSON.parse changes the json data into normal javascript so that we can access the properties....
      document.querySelector(
        "#output"
      ).innerHTML = `<ul><li>Name: ${customer.name}</li><li>Company: ${customer.company}</li></ul>`;
    }
  };
  xhr.send();
}

let button3 = document.querySelector("#btn3");

button3.addEventListener("click", loadJSONS);

function loadJSONS() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/customers.json");
  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let output = "";
      customers.forEach(function (customer) {
        output += `<ul>
        <li>ID: <strong> ${customer.id}</strong></li>
        <li>Name: <strong> ${customer.name}</strong></li>
        <li>Company:<strong> ${customer.company}</strong></li>
        <li>Phone:<strong>${customer.phone}</strong></li></ul>-----------------------`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };
  xhr.send();
}

// API calls and getting data from other websites....

let button4 = document.querySelector("#btn4");

button4.addEventListener("click", loadAPI);

function loadAPI() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users"); //end points...
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      var response = JSON.parse(this.responseText);
      console.log(response.data);
      let output = "";
      response.data.forEach(function (user) {
        output += `<div class ="profile">Welcome <strong>${user.first_name}</strong><br>
        <img src = ${user.avatar} width="100" class="pic"/><br>
        Email: ${user.email}<br></div>`;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  //   4. execute this xhr request..
  xhr.send();
}

// practice for today.. user enters an id .. and only record with that id is displayed... on web pgae....
