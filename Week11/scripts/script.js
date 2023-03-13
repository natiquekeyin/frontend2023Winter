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
