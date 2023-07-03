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
    for(let i=0; i<names.length; i++){
        names[i].style.color = pippo;
    }
}

function setH2ColorsToGreen() {
    let selectorName = ".name";
    const names = document.querySelectorAll(selectorName);
    let pippo = "green";
    for(let i=0; i<names.length; i++){
        names[i].style.color = pippo;
    }
}
// fine funzioni cambia colored

//funzioni creazione tabella dinamica

//commento
function generateData(){
    const array = new XMLHttpRequest();
        array.open("GET", "https://648e30d42de8d0ea11e89dc1.mockapi.io/getUserData", true);

    const obj = JSON.parse(array);
    return obj;
}

function generateTable() {

    const allData = generateData();

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < allData.length; i++) {
      // creates a table row
      const singleData = allData[i];
      const objKeys = Object.keys(Singledata);
      const row = document.createElement("tr");
      const dataMaxLength = Object.keys(allData[0]);
    
      for (let j = 0; j < dataMaxLength.length; j++) {
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