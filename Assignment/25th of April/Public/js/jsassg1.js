let table = []

let form1 = document.getElementById("form1");
form1.addEventListener(`submit`, processData);
function processData(event) {
   event.preventDefault();
   let ema = document.getElementById("email").value;
   let pas = document.getElementById("pass").value;
   if (ema == null || ema == undefined || ema == "null" || ema == "undefined" || ema == "" || pas == null || pas == undefined || pas == "null" || pas == "undefined" || pas == "") {
      alert("Invalid Email or password")
      return;
   }
   // else {
   //    // window.location.url()
   //    window.location.href = "jsassg1page2.html"; 
      // table.push({
      //    'email': ema,
      //    'password': pas
      // });
      // console.log("table")
      // displayData();

   // }

   // else{
   //    localStorage.setItem('email',ema);
   // localStorage.setItem('password',pass);
   // window.location.href="jsassg1page2.html";
   // table.push({
   //    'email' : ema,
   //    'password' : pas
   // })
   
   // }
   // else
   // {
   //    console.log("HI")
   //    table.push({
   //       'mail':ema,
   //       'pass':pas
   //    })
   //    let data1 = ''
   //    for (let i = 0; i < table.length; i++) {
   //       let data = table[i];
   //       data1 += `<tr> 
   //         <td>${data.mail}</td>
   //         <td>${data.pass}</td>
   //             </tr>`;
   //    }
   //    document.getElementById('table1').innerHTML += data1;
   // }
   check(pas,ema);
}
function check(password,email)
{
   // Minimum eight characters, at least one lowercase letter, one number ,one uppercase and one special character:
   var naanu=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
   if(password.match(naanu))
   {
      table.push({
         'mail':email,
         'pass':password
      })
      // displayData()
      // window.location.href='https://en.wikipedia.org/wiki/MS_Dhoni';
      // window.open("C:\Users\DELL\Desktop\Assignment\25th of April\Pages\jsassg1page2.html")
      window.location.href="jsassg1page2.html";
   }
   else
   {
      alert("Invalid")
      return;
   }
}

function displayData() {
   console.log("table data",table);
   let data1 = ''
   for (let i = 0; i < table.length; i++) {
      let data = table[i];
      data1 += `<tr> 
        <td>${data.mail}</td>
        <td>${data.pass}</td>
            </tr>`;
   }
   document.getElementById('table1').innerHTML += data1;
   
}



// function processData(event) {
//       event.preventDefault();
//       let ema = document.getElementById("email").value;
//       let pas = document.getElementById("pass").value;
//       var naanu=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
//    if(pas.match(naanu))
//    {
//       localStorage.setItem('ema',ema);
//       localStorage.setItem('pas',pas);

//       window.location.href="jsassg1page2.html";
//    }
//    else{
//       alert("Invalid password or emailid")
//    }
// }