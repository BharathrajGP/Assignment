let table = [];

// let table1 = document.getElementById(`table1`);
// let button = document.getElementById(`id`);

// if (localStorage.getItem(`table`)) {
//     table = JSON.parse(localStorage.getItem(`table`));
// }

// button.addEventListener('submit', processData)

// function processData(event) {
//     event.preventDefault();
//     add();
// }

function add() {
  var new_id = document.getElementById("new_id").value;
  var new_name = document.getElementById("new_name").value;
  var new_age = document.getElementById("new_age").value;
  var new_email = document.getElementById("new_email").value;

  var table = document.getElementById("table1");
  var table_len = table.rows.length - 1;
  console.log(table_len);
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='id_row" +
    table_len +
    "'>" +
    new_id +
    "<td id='name_row" +
    table_len +
    "'>" +
    new_name +
    "</td><td id='age_row" +
    table_len +
    "'>" +
    new_age +
    "</td><td id='email_row" +
    table_len +
    "'>" +
    new_email +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit(" +
    table_len +
    // ")'> <input type='button' id='save_button" +
    // table_len +
    // "' value='Save' class='save' onclick='save(" +
    // table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='deletee(" +
    table_len +
    ")'></td></tr>");
    console.log(row);
  document.getElementById("new_id").value = "";
  document.getElementById("new_name").value = "";
  document.getElementById("new_email").value = "";
  document.getElementById("new_age").value = "";
}

function edit(index) {
  var id = document.getElementById("id_row" + index);
  var name = document.getElementById("name_row" + index);
  var age = document.getElementById("age_row" + index);
  var email = document.getElementById("email_row" + index);

  console.log(id);
  var id_data = id.innerHTML;
  var name_data = name.innerHTML;
  var age_data = age.innerHTML;
  var email_data = email.innerHTML;
  console.log(id_data)

  id.innerHTML =
  "<input type='text' id='id_text" + index + "' value='" + id_data + "'>";
  name.innerHTML =
  "<input type='text' id='name_text" + index + "' value='" + name_data + "'>";
 age.innerHTML =
  "<input type='text' id='age_text" +
  index +
  "' value='" +
  age_data +
  "'>";
 email.innerHTML =
  "<input type='text' id='email_text" + index + "' value='" + email_data + "'>";
  
}

function deletee(index) {
  document.getElementById("row" + index + "").outerHTML = "";
}


// function displayData() {
//     let data1 = ''
//     for (let i = 0; i < table.length; i++) {
//         let data = table[i];
//         console.log(data);
//         data1 += `<tr>

//          <td>${data.id}</td>
//          <td>${data.name}</td>
//           <td>${data.age}</td>
//           <td>${data.email}</td>
//          <td><button onclick='edit("+i+")'>edit</button></td>
//          <td><button onclick='remove("+i+")'>delete</button></td>
//              </tr>`;

//     }
//     document.getElementById('table1').innerHTML += data1;
// }
