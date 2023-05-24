let table = [];

let form1 = document.getElementById(`form1`);
form1.addEventListener(`submit`, processData);
function processData(event) {
   event.preventDefault()
   let name0 = document.getElementById(`name`).value;
   if (name0 == null || name0 == undefined || name0 == "null" || name0 == "undefined" || name0 == "") {
      alert("You have entered worng name");
      return;
   }
   let id0 = document.getElementById("id1").value;
   let email0 = document.getElementById(`email1`).value;
   let gender0 = document.getElementsByName("gender")
   console.log(gender0);
   var gender00;
   for (let i = 0; i < gender0.length; i++) {
      if (gender0[i].checked == true) {
         gender00 = gender0[i].value
      }
   }

   let dob0 = document.getElementById("date").value;

   let lan0 = document.getElementsByName(`lan`)
   var lan = "";
   for (let i = 0; i < lan0.length; i++) {
      if (lan0[i].checked) {
         lan += lan0[i].value + ", ";
      }
   }

   let cou0 = document.getElementById("cour").value;
   // let cou;
   // for (let i = 0; i < cou0.length; i++) {
   //    if (cou0[i].checked) {
   //       cou = cou0[i].value
   //    }
   // }

   let phno0 = document.getElementById(`phno`).value;
   table.push({
      'id': id0,
      'name': name0,
      'email': email0,
      'gender': gender00,
      'DOB': dob0,
      'lan': lan,
      "courses": cou0,
      'phno': phno0
   });
   displayData();
}

function displayData() {
   let data1 = ''
   for (let i = 0; i < table.length; i++) {
      let data = table[i];
      console.log(data);
      // Method 1 
      data1 += `<tr> 
         
        <td>${data.name}</td>
        <td>${data.id}</td> 
         <td>${data.email}</td>
         <td>${data.gender}</td> 
        <td>${data.DOB}</td>
           <td>${data.lan}</td>
           <td>${data.courses}</td>
           <td>${data.phno}</td>
            </tr>`;

      // Method 2 
      //   document.getElementById('a1').innerHTML += '<tr><td>' + data.id + '</td><td>' + data.name + '</td><td>' + data.m1 + '</td></tr>'; 
   }
   document.getElementById('table1').innerHTML += data1;
}

