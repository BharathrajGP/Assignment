$(document).ready(function () {
  $("#name,#email,#phno,#nameu,#emailu,#phnou").on({
      mouseenter: function () {
          $(this).css("background-color", "lightgray");
      },
      mouseleave: function () {
          $(this).css("background-color", "lightcyan");
      },
      click: function () {
          $(this).css("background-color", "yellow");
      }
  });
});

let table = [];

localStorage.setItem("data1", JSON.stringify(table));

let table1 = document.getElementById(`form1`);
table1.addEventListener(`submit`, processData);
let j = 1;
var mailformat =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var phformat = /^[6789]\d{9}$/;
function processData(event) {
  event.preventDefault();
  let name = document.getElementById(`name`).value;
  let email = document.getElementById(`email`).value;
  let phno = document.getElementById(`phno`).value;
  let localData = JSON.parse(localStorage.getItem("data1"));

  // console.log(data1);
  console.log(localData);

  console.log(localData[localData.length - 1]);

if ($("#name").val().length > 0
&& $("#email").val().length > 0 && $("#phno").val().length > 0)
{
        if ($("#name").val().trim() == "" ) 
            {
              alert("Please enter the name");
              $("#name").val("");
              $("#name").focus();
              return;
            }
            else if($("#email").val().trim() == "" )
            {
              alert("Please enter the mail id");
              $("#email").val("");
              $("#email").focus();
              return;
            }
            else if($("#phno").val().trim() == "" )
            {
              alert("Please enter the phone number");
              $("#phno").val("");
              $("#phno").focus();
              return;
            }
      // } 
      else
       {
        if (email.match(mailformat) && phno.match(phformat) && phno.length == 10) {
          localData.push({
            // id: localData[localData.length-1].id+1,
            // id : localData[localData.length-1],
    
            id: j,
            name: name,
            email: email,
            phno: phno,
          });
          localStorage.setItem("data1", JSON.stringify(localData));
          j = j + 1;
          document.getElementById(`name`).value = "";
          document.getElementById(`email`).value = "";
          document.getElementById(`phno`).value = "";
          displayData();
        } else {
          alert("invalid email or phone number");
          return;
        }
      }
}
else {
        alert("Please enter the required data");
        $("#name").val("");
        $("#name").focus();
        return;
      }



//   if (
//     name == null ||
//     name == undefined ||
//     email == null ||
//     email == undefined ||
//     phno == null ||
//     name == "null" ||
//     name == "undefined" ||
//     email == "null" ||
//     email == "undefined" ||
//     phno == "null" ||
//     name == "" ||
//     email == "" ||
//     phno == ""
//   ) {
//     alert("Data cannot be empty please enter the data");
//     return false;
//   } 
//   else
//    {
//     if (email.match(mailformat) && phno.match(phformat) && phno.length == 10) {
//       localData.push({
//         // id: localData[localData.length-1].id+1,
//         // id : localData[localData.length-1],

//         id: j,
//         name: name,
//         email: email,
//         phno: phno,
//       });
//       localStorage.setItem("data1", JSON.stringify(localData));
//       j = j + 1;
//       document.getElementById(`name`).value = "";
//       document.getElementById(`email`).value = "";
//       document.getElementById(`phno`).value = "";
//       displayData();
//     } else {
//       alert("invalid email or phone number");
//       return;
//     }
//   }
}

function displayData() {
  let content = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Functionality</th>
    </tr>`;
  // let content="";
  let localData = JSON.parse(localStorage.getItem("data1"));
  for (let i = 0; i < localData.length; i++) {
    content += `<tr>
        <td>${localData[i].id}</td>
        <td>${localData[i].name}</td>
        <td>${localData[i].email}</td>
        <td>${localData[i].phno}</td>
        <td><button onclick="update('${localData[i].id}')" class="btn btn-secondary" >Edit</button>
        <button onclick="remove('${localData[i].id}')" class="btn btn-danger">delete</button></td>
         </tr>`;
  }
  document.getElementById("table1").innerHTML = content;
}

function update(id) {
  alert("Are you sure to update id no " + id);
  console.log("Editing id no " + id);
  let localData = JSON.parse(localStorage.getItem("data1"));
  // console.log(localData[id]);

  for (let i = 0; i < localData.length; i++) {
    var cid = localData[i].id;
    if (cid == id) {
      //         document.getElementById(`nameu`).value = localData[id-1].name;
      // document.getElementById(`emailu`).value = localData[id-1].email;
      // document.getElementById(`phnou`).value = localData[id-1].phno;
      document.getElementById(`nameu`).value = localData[i].name;
      document.getElementById(`emailu`).value = localData[i].email;
      document.getElementById(`phnou`).value = localData[i].phno;
    }
  }

  sessionStorage.setItem("session_id", id);
}

let updateForm = document.getElementById("uf");
updateForm.addEventListener("submit", updateme);
function updateme(event) {
  event.preventDefault();
  let name = document.getElementById("nameu").value;
  let email = document.getElementById("emailu").value;
  let phno = document.getElementById("phnou").value;
  let localData = JSON.parse(localStorage.getItem("data1"));
  let sid = sessionStorage.getItem(`session_id`);
  console.log(sid);
 

  if ($("#nameu").val().length > 0
  && $("#emailu").val().length > 0 && $("#phnou").val().length > 0)
  {
          if ($("#nameu").val().trim() == "" ) 
              {
                alert("Please enter the updated name");
                $("#nameu").val("");
                $("#nameu").focus();
                return;
              }
              else if($("#emailu").val().trim() == "" )
              {
                alert("Please enter the updated mail id");
                $("#emailu").val("");
                $("#emailu").focus();
                return;
              }
              else if($("#phnou").val().trim() == "" )
              {
                alert("Please enter the updated phone number");
                $("#phnou").val("");
                $("#phnou").focus();
                return;
              }
        // } 
        else
         {
          if (email.match(mailformat) && phno.match(phformat) && phno.length == 10) {
            for (let i = 0; i < localData.length; i++) {
              console.log("hi" + " " + i);
              console.log(sid);
              console.log(localData[i]);
              var cid = localData[i].id;
              console.log(cid);
              // console.log(localData[i].id);
              if (sid == cid) {
                // localData[id].name=name;
                // localData[id].email=email;
                // localData[id].phno=phno;
                // console.log(localData[id].name);
                // console.log(localData[id].email)
                localData[i].name = name;
                localData[i].email = email;
                localData[i].phno = phno;
                console.log(localData[i].name);
                console.log(localData[i].email);
              }
            }
            localStorage.setItem("data1", JSON.stringify(localData));
            document.getElementById(`nameu`).value = "";
            document.getElementById(`emailu`).value = "";
            document.getElementById(`phnou`).value = "";
            console.log("Updated id no " + sid);
            displayData();
          } else {
            alert("invalid email or phone number");
            return;
          }
        }
  }
  else {
          alert("Data field cannot be empty Please enter");
          $("#name").val("");
          $("#name").focus();
          return;
        }




  // if (email.match(mailformat) && phno.match(phformat) && phno.length == 10) {
  //   for (let i = 0; i < localData.length; i++) {
  //     console.log("hi" + " " + i);
  //     console.log(sid);
  //     console.log(localData[i]);
  //     var cid = localData[i].id;
  //     console.log(cid);
  //     // console.log(localData[i].id);
  //     if (sid == cid) {
  //       // localData[id].name=name;
  //       // localData[id].email=email;
  //       // localData[id].phno=phno;
  //       // console.log(localData[id].name);
  //       // console.log(localData[id].email)
  //       localData[i].name = name;
  //       localData[i].email = email;
  //       localData[i].phno = phno;
  //       console.log(localData[i].name);
  //       console.log(localData[i].email);
  //     }
  //   }
  //   localStorage.setItem("data1", JSON.stringify(localData));
  //   document.getElementById(`nameu`).value = "";
  //   document.getElementById(`emailu`).value = "";
  //   document.getElementById(`phnou`).value = "";
  //   console.log("Updated id no " + sid);
  //   displayData();
  // } else {
  //   alert("invalid email or phone number");
  //   return;
  // }
}

function remove(id) {
  alert("Are you sure to delete id no " + id);
  console.log("Deleting id no " + id);
  let localData = JSON.parse(localStorage.getItem("data1"));
  for (let i = 0; i < localData.length; i++) {
    var cid = localData[i].id;
    if (cid == id) {
      localData.splice(i, 1);
    }
  }
  // localData.splice(id - 1, 1);
  localStorage.setItem("data1", JSON.stringify(localData));
  console.log("Deleted id no " + id);
  displayData();
}
