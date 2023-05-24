let abc = document.getElementById("Stu_De");
abc.addEventListener(`submit`, check);
// let localData = JSON.parse(localStorage.getItem("data1"));
// // console.log(localData);
// document.getElementById(`f_nameu`).value = localData[localData.length-1].f_name;
// document.getElementById(`l_nameu`).value = localData[localData.length-1].l_name;
// document.getElementById(`phnou`).value = localData[localData.length-1].phno;
// document.getElementById(`emailu`).value = localData[localData.length-1].email;
// document.getElementById(`ageu`).value = localData[localData.length-1].age;
// document.getElementById(`passu`).value = localData[localData.length-1].pass;
// document.getElementById(`m_mu`).value = localData[localData.length-1].maths;
// document.getElementById(`Sc_mu`).value = localData[localData.length-1].science;
// document.getElementById(`So_mu`).value = localData[localData.length-1].social;
function update1()
{
  // alert("Are you sure to update id no " + id);
  // console.log("Updating id no " + id);
  $.post("http://localhost:8080/show_api", // endpoint --
  {
    // id:id
  }, // data set as parameters --
  function (response)
  {
    console.log(response);
    // document.getElementById(`nameu`).value=response.MSG[0].first_name;
    console.log(response.MSG.length);
    console.log(response.MSG[0].first_name);
    document.getElementById(`f_nameu`).value =response.MSG[0].first_name;
    document.getElementById(`l_nameu`).value = response.MSG[0].last_name;
document.getElementById(`phnou`).value = response.MSG[0].phno;
document.getElementById(`emailu`).value = response.MSG[0].email;
document.getElementById(`ageu`).value = response.MSG[0].age;
document.getElementById(`passu`).value = response.MSG[0].password;
document.getElementById(`m_mu`).value = response.MSG[0].maths_marks;
document.getElementById(`Sc_mu`).value = response.MSG[0].science_marks;
document.getElementById(`So_mu`).value = response.MSG[0].social_marks;
    // document.getElementById(`#f_nameu`).innerHTML=response.MSG[0].first_name;
    // $("#f_nameu").val()=response.MSG[0].first_name;
    // update(id);
  });
}

function check(event) {
  event.preventDefault();
  let f_nameu=$("#f_nameu").val();
  let l_nameu=$("#l_nameu").val();
  let phnou=$("#phnou").val();
  let emailu=$("#emailu").val();
  let ageu=$("#ageu").val();
  let passu=$("#passu").val();
  let m_mu=$("#m_mu").val();
  let Sc_mu=$("#Sc_mu").val();
  let So_mu=$("#So_mu").val();

  console.log(m_mu.length);
  //First_Name
  if ($("#f_nameu").val().length > 0) 
  {
    if (
      $("#f_nameu").val().trim() == "" ||
      $("#f_nameu").val() == "undefined" ||
      $("#f_nameu").val() == undefined ||
      $("#f_nameu").val() == "null" ||
      $("#f_nameu").val() == null
    ) 
    {
      alert("Please enter valid first_name");
      $("#f_nameu").val("");
      $("#f_nameu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid first_name....");
    $("#f_nameu").val("");
    $("#f_nameu").focus();
    return;
  }

//Last_name
if ($("#l_nameu").val().length > 0) 
{
  if (
    $("#l_nameu").val().trim() == "" ||
    $("#l_nameu").val() == "undefined" ||
    $("#l_nameu").val() == undefined ||
    $("#l_nameu").val() == "null" ||
    $("#l_nameu").val() == null
  ) 
  {
    alert("Please enter valid Last_name");
    $("#l_nameu").val("");
    $("#l_nameu").focus();
    return;
  }
} 
else 
{
  alert("Please enter valid Last_name....");
  $("#l_nameu").val("");
  $("#l_nameu").focus();
  return;
}

//Phone number
if ($("#phnou").val().length > 0) 
  {
    if (
      $("#phnou").val().trim() == "" ||
      $("#phnou").val() == "undefined" ||
      $("#phnou").val() == undefined ||
      $("#phnou").val() == "null" ||
      $("#phnou").val() == null
    ) 
    {
      alert("Please enter valid Phone Number");
      $("#phnou").val("");
      $("#phnou").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Phone Number....");
    $("#phnou").val("");
    $("#phnou").focus();
    return;
  }

  //Email
  if ($("#emailu").val().length > 0) 
  {
    if (
      $("#emailu").val().trim() == "" ||
      $("#emailu").val() == "undefined" ||
      $("#emailu").val() == undefined ||
      $("#emailu").val() == "null" ||
      $("#emailu").val() == null
    ) 
    {
      alert("Please enter valid emailu");
      $("#emailu").val("");
      $("#emailu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid emailu....");
    $("#emailu").val("");
    $("#emailu").focus();
    return;
  }

  // //Roll Number
  // if ($("#r_nou").val().length > 0) 
  // {
  //   if (
  //     $("#r_nou").val().trim() == "" ||
  //     $("#r_nou").val() == "undefined" ||
  //     $("#r_nou").val() == undefined ||
  //     $("#r_nou").val() == "null" ||
  //     $("#r_nou").val() == null
  //   ) 
  //   {
  //     alert("Please enter valid Roll Number");
  //     $("#r_nou").val("");
  //     $("#r_nou").focus();
  //     return;
  //   }
  // } 
  // else 
  // {
  //   alert("Please enter valid Roll Number....");
  //   $("#r_nou").val("");
  //   $("#r_nou").focus();
  //   return;
  // }

  //Age
  if ($("#ageu").val().length > 0) 
  {
    if (
      $("#ageu").val().trim() == "" ||
      $("#ageu").val() == "undefined" ||
      $("#ageu").val() == undefined ||
      $("#ageu").val() == "null" ||
      $("#ageu").val() == null
    ) 
    {
      alert("Please enter valid Age");
      $("#ageu").val("");
      $("#ageu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Age....");
    $("#ageu").val("");
    $("#ageu").focus();
    return;
  }

  //Password
  if ($("#passu").val().length > 0) 
  {
    if (
        $("#passu").val().trim() == "" ||
        $("#passu").val() == "undefined" ||
        $("#passu").val() == undefined ||
        $("#passu").val() == "null" ||
        $("#passu").val() == null ||
        !$("#passu").val().match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ) 
    {
      alert("Please enter valid Password");
      $("#passu").val("");
      $("#passu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Password....");
    $("#passu").val("");
    $("#passu").focus();
    return;
  }

  //Maths Marks
  if ($("#m_mu").val().length > 0) 
  {
    if (
        $("#m_mu").val().trim() == "" ||
        $("#m_mu").val() == "undefined" ||
        $("#m_mu").val() == undefined ||
        $("#m_mu").val() >100.00 || 
        $("#m_mu").val()<0.00
    ) 
    {
      alert("Please enter valid marks");
      $("#m_mu").val("");
      $("#m_mu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid marks....");
    $("#m_mu").val("");
    $("#m_mu").focus();
    return;
  }


  //Science Marks
  if ($("#Sc_mu").val().length > 0) 
  {
    if (
        $("#Sc_mu").val().trim() == "" ||
        $("#Sc_mu").val() == "undefined" ||
        $("#Sc_mu").val() == undefined ||
        $("#Sc_mu").val() >100.00 || 
        $("#Sc_mu").val()<0.00
    ) 
    {
      alert("Please enter valid marks");
      $("#Sc_mu").val("");
      $("#Sc_mu").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid marks....");
    $("#Sc_mu").val("");
    $("#Sc_mu").focus();
    return;
  }


//Social Marks
if ($("#So_mu").val().length > 0) 
{
  if (
      $("#So_mu").val().trim() == "" ||
      $("#So_mu").val() == "undefined" ||
      $("#So_mu").val() == undefined ||
      $("#So_mu").val() >100.00 || 
      $("#So_mu").val()<0.00
  ) 
  {
    alert("Please enter valid marks");
    $("#So_mu").val("");
    $("#So_mu").focus();
    return;
  }
  console.log("Social");
} 
else 
{
  alert("Please enter valid marks....");
  $("#So_mu").val("");
  $("#So_mu").focus();
  return;
}



  // let array=[{
  //   f_name : f_name,
  //   l_name :l_name,
  //   phno : phno,
  //   email :email,
  //   r_no :r_no,
  //   age:age,
  //   pass :pass,
  //   m_m:m_m,
  //   Sc_m:Sc_m,
  //   So_m:So_m
  // }];
  // let a = localStorage.setItem("data1", JSON.stringify(array));

  console.log("Hiii");
  $.post("http://localhost:8080/update_stu_d_api",
  {
   f_nameu,
    l_nameu :l_nameu,
    phnou : phnou,
    emailu :emailu,
    ageu:ageu,
    passu :passu,
    m_mu:m_mu,
    Sc_mu:Sc_mu,
    So_mu:So_mu
  },
  function(response)
  {
    console.log(response);
    if(response.MSG=="updated")
            
            {
              window.location="/Result1";
               console.log("Yes");
            }
  }).fail(function(xhr)
  {
    console.log(xhr.status);
          if(xhr.status==400)
          {
           alert("Duplicate Credentials");
          }
          else
          {
            console.log("Hey yeah");
          }
  })

}

















// let abc = document.getElementById("Stu_D");
// abc.addEventListener(`submit`, check);

// function check(event) {
//   event.preventDefault();
//   let f_name=$("#f_name").value();
//   let l_name=$("#l_name").value();
//   let phno=$("#phno").value();
//   let email=$("#email").value();
//   let r_no=$("#r_no").value();
//   let age=$("#age").value();
//   let pass=$("#pass").value();

//   //First_Name
//   if ($("#f_name").val().length > 0) 
//   {
//     if (
//       $("#f_name").val().trim() == "" ||
//       $("#f_name").val() == "undefined" ||
//       $("#f_name").val() == undefined ||
//       $("#f_name").val() == "null" ||
//       $("#f_name").val() == null
//     ) 
//     {
//       alert("Please enter valid first_name");
//       $("#f_name").val("");
//       $("#f_name").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid first_name....");
//     $("#f_name").val("");
//     $("#f_name").focus();
//     return;
//   }

// //Last_name
// if ($("#l_name").val().length > 0) 
// {
//   if (
//     $("#l_name").val().trim() == "" ||
//     $("#l_name").val() == "undefined" ||
//     $("#l_name").val() == undefined ||
//     $("#l_name").val() == "null" ||
//     $("#l_name").val() == null
//   ) 
//   {
//     alert("Please enter valid Last_name");
//     $("#l_name").val("");
//     $("#l_name").focus();
//     return;
//   }
// } 
// else 
// {
//   alert("Please enter valid Last_name....");
//   $("#l_name").val("");
//   $("#l_name").focus();
//   return;
// }

// //Phone number
// if ($("#phno").val().length > 0) 
//   {
//     if (
//       $("#phno").val().trim() == "" ||
//       $("#phno").val() == "undefined" ||
//       $("#phno").val() == undefined ||
//       $("#phno").val() == "null" ||
//       $("#phno").val() == null
//     ) 
//     {
//       alert("Please enter valid Phone Number");
//       $("#phno").val("");
//       $("#phno").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid Phone Number....");
//     $("#phno").val("");
//     $("#phno").focus();
//     return;
//   }

//   //Email
//   if ($("#Email").val().length > 0) 
//   {
//     if (
//       $("#Email").val().trim() == "" ||
//       $("#Email").val() == "undefined" ||
//       $("#Email").val() == undefined ||
//       $("#Email").val() == "null" ||
//       $("#Email").val() == null
//     ) 
//     {
//       alert("Please enter valid Email");
//       $("#Email").val("");
//       $("#Email").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid Email....");
//     $("#Email").val("");
//     $("#Email").focus();
//     return;
//   }

//   //Roll Number
//   if ($("#r_no").val().length > 0) 
//   {
//     if (
//       $("#r_no").val().trim() == "" ||
//       $("#r_no").val() == "undefined" ||
//       $("#r_no").val() == undefined ||
//       $("#r_no").val() == "null" ||
//       $("#r_no").val() == null
//     ) 
//     {
//       alert("Please enter valid Roll Number");
//       $("#r_no").val("");
//       $("#r_no").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid Roll Number....");
//     $("#r_no").val("");
//     $("#r_no").focus();
//     return;
//   }

//   //Age
//   if ($("#age").val().length > 0) 
//   {
//     if (
//       $("#age").val().trim() == "" ||
//       $("#age").val() == "undefined" ||
//       $("#age").val() == undefined ||
//       $("#age").val() == "null" ||
//       $("#age").val() == null
//     ) 
//     {
//       alert("Please enter valid Age");
//       $("#age").val("");
//       $("#age").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid Age....");
//     $("#age").val("");
//     $("#age").focus();
//     return;
//   }

//   //Password
//   if ($("#pass").val().length > 0) 
//   {
//     if (
//         $("#pass").val().trim() == "" ||
//         $("#pass").val() == "undefined" ||
//         $("#pass").val() == undefined ||
//         $("#pass").val() == "null" ||
//         $("#pass").val() == null ||
//         !$("#pass").val().match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
//     ) 
//     {
//       alert("Please enter valid Password");
//       $("#pass").val("");
//       $("#pass").focus();
//       return;
//     }
//   } 
//   else 
//   {
//     alert("Please enter valid Password....");
//     $("#pass").val("");
//     $("#pass").focus();
//     return;
//   }


//   let array=[{
//     f_name : f_name,
//     l_name :l_name,
//     phno : phno,
//     email :email,
//     r_no :r_no,
//     age:age,
//     pass :pass,
//   }];
//   let a = localStorage.setItem("data1", JSON.stringify(array));

//   $.post("http://localhost:8080/insert_stu_d_api",
//   {
//     f_name : f_name,
//     l_name :l_name,
//     phno : phno,
//     email :email,
//     r_no :r_no,
//     age:age,
//     pass :pass,
//   },
//   function(response)
//   {
//     console.log(response);
//   })

// }
