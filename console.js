// GG: I added a new comment to test git pull
//funzioni cambia colore delle scritte
document.addEventListener("DOMContentLoaded", addOnClickFunction);

function addOnClickFunction() {
  let button = document.getElementById("btnChangeColor");
  button.addEventListener("click", TEST.cambiaColore);
}

var TEST = {};
TEST.cambiaColore = function () {
  let selectorName = ".name";
  const names = document.querySelectorAll(selectorName);
  let pippo = "blue";
  for (let i = 0; i < names.length; i++) {
    names[i].style.color = pippo;
  }
}

function setH2ColorsToGreen() {
  let selectorName = ".name";
  const names = document.querySelectorAll(selectorName);
  let pippo = "green";
  for (let i = 0; i < names.length; i++) {
    names[i].style.color = pippo;
  }
}
// fine funzioni cambia coloredew

//funzioni creazione tabella dinamica

//commento

/** GG: How to generate a an async function that returns an awaitable promise */
// async function generateDataXML() {
//   return new Promise(function(resolve, reject) {
//     var url = new XMLHttpRequest();
//     url.open("GET", "https://648e30d42de8d0ea11e89dc1.mockapi.io/getUserData", true);
//     url.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         resolve(JSON.parse(this.resposenText));
//         const obj = JSON.parse(this.responseText);
//         generateTable(obj);
//       }
//     };
//     url.send();
//   })  
// }


async function generateDataXML() {
  var url = new XMLHttpRequest();
  url.open("GET", "https://648e30d42de8d0ea11e89dc1.mockapi.io/getUserData", true);
  url.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const obj = JSON.parse(this.responseText);
      generateTable(obj);
    }
  };
  url.send();
}


function generateData() {
  const array = '[{"name":"Michel","surname":"Anderson","phone":"531.765.7730 x033","id":"1"},{"name":"Idella","surname":"Jones","phone":"642-798-8039 x4262","id":"2"},{"name":"Albina","surname":"Herman","phone":"539.935.6082 x85342","id":"3"},{"name":"Rickie","surname":"Will","phone":"(637) 299-3408 x0072","id":"4"},{"name":"Noel","surname":"Hand","phone":"309.223.1536 x5354","id":"5"},{"name":"Jess","surname":"McCullough","phone":"(244) 343-2947 x254","id":"6"},{"name":"Flavio","surname":"Schamberger","phone":"422-965-3208 x31776","id":"7"},{"name":"Rosemary","surname":"Kertzmann","phone":"1-786-267-2807 x46250","id":"8"},{"name":"Valentin","surname":"Effertz","phone":"1-714-278-6532 x1791","id":"9"},{"name":"Heidi","surname":"Brown","phone":"1-839-950-8664 x02445","id":"10"}]';
  const obj = JSON.parse(array);
  return obj;
}

function generateTable(dataTable) {

  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < dataTable.length; i++) {
    // creates a table row
    const singleData = dataTable[i];
    const objKeys = Object.keys(singleData);
    const row = document.createElement("tr");
    const columns = Object.keys(dataTable[0]);

    // Loop that creates the colummns
    for (let j = 0; j < columns.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(singleData[objKeys[j]]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}

/* function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  } */