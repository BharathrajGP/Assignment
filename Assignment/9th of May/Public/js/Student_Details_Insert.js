let abc = document.getElementById("Stu_D");
abc.addEventListener(`submit`, check);

function check(event) {
  event.preventDefault();
  let f_name=$("#f_name").val();
  let l_name=$("#l_name").val();
  let phno=$("#phno").val();
  let email=$("#email").val();
  let r_no=$("#r_no").val();
  let age=$("#age").val();
  let pass=$("#pass").val();
  let m_m=$("#m_m").val();
  let Sc_m=$("#Sc_m").val();
  let So_m=$("#So_m").val();

  console.log(m_m.length);
  //First_Name
  if ($("#f_name").val().length > 0) 
  {
    if (
      $("#f_name").val().trim() == "" ||
      $("#f_name").val() == "undefined" ||
      $("#f_name").val() == undefined ||
      $("#f_name").val() == "null" ||
      $("#f_name").val() == null
    ) 
    {
      alert("Please enter valid first_name");
      $("#f_name").val("");
      $("#f_name").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid first_name....");
    $("#f_name").val("");
    $("#f_name").focus();
    return;
  }

//Last_name
if ($("#l_name").val().length > 0) 
{
  if (
    $("#l_name").val().trim() == "" ||
    $("#l_name").val() == "undefined" ||
    $("#l_name").val() == undefined ||
    $("#l_name").val() == "null" ||
    $("#l_name").val() == null
  ) 
  {
    alert("Please enter valid Last_name");
    $("#l_name").val("");
    $("#l_name").focus();
    return;
  }
} 
else 
{
  alert("Please enter valid Last_name....");
  $("#l_name").val("");
  $("#l_name").focus();
  return;
}

//Phone number
if ($("#phno").val().length > 0) 
  {
    if (
      $("#phno").val().trim() == "" ||
      $("#phno").val() == "undefined" ||
      $("#phno").val() == undefined ||
      $("#phno").val() == "null" ||
      $("#phno").val() == null
    ) 
    {
      alert("Please enter valid Phone Number");
      $("#phno").val("");
      $("#phno").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Phone Number....");
    $("#phno").val("");
    $("#phno").focus();
    return;
  }

  //Email
  if ($("#email").val().length > 0) 
  {
    if (
      $("#email").val().trim() == "" ||
      $("#email").val() == "undefined" ||
      $("#email").val() == undefined ||
      $("#email").val() == "null" ||
      $("#email").val() == null
    ) 
    {
      alert("Please enter valid email");
      $("#email").val("");
      $("#email").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid email....");
    $("#email").val("");
    $("#email").focus();
    return;
  }

  //Roll Number
  if ($("#r_no").val().length > 0) 
  {
    if (
      $("#r_no").val().trim() == "" ||
      $("#r_no").val() == "undefined" ||
      $("#r_no").val() == undefined ||
      $("#r_no").val() == "null" ||
      $("#r_no").val() == null
    ) 
    {
      alert("Please enter valid Roll Number");
      $("#r_no").val("");
      $("#r_no").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Roll Number....");
    $("#r_no").val("");
    $("#r_no").focus();
    return;
  }

  //Age
  if ($("#age").val().length > 0) 
  {
    if (
      $("#age").val().trim() == "" ||
      $("#age").val() == "undefined" ||
      $("#age").val() == undefined ||
      $("#age").val() == "null" ||
      $("#age").val() == null
    ) 
    {
      alert("Please enter valid Age");
      $("#age").val("");
      $("#age").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Age....");
    $("#age").val("");
    $("#age").focus();
    return;
  }

  //Password
  if ($("#pass").val().length > 0) 
  {
    if (
        $("#pass").val().trim() == "" ||
        $("#pass").val() == "undefined" ||
        $("#pass").val() == undefined ||
        $("#pass").val() == "null" ||
        $("#pass").val() == null ||
        !$("#pass").val().match( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ) 
    {
      alert("Please enter valid Password");
      $("#pass").val("");
      $("#pass").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid Password....");
    $("#pass").val("");
    $("#pass").focus();
    return;
  }

  //Maths Marks
  if ($("#m_m").val().length > 0) 
  {
    if (
        $("#m_m").val().trim() == "" ||
        $("#m_m").val() == "undefined" ||
        $("#m_m").val() == undefined ||
        $("#m_m").val() >100.00 || 
        $("#m_m").val()<0.00
    ) 
    {
      alert("Please enter valid marks");
      $("#m_m").val("");
      $("#m_m").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid marks....");
    $("#m_m").val("");
    $("#m_m").focus();
    return;
  }


  //Science Marks
  if ($("#Sc_m").val().length > 0) 
  {
    if (
        $("#Sc_m").val().trim() == "" ||
        $("#Sc_m").val() == "undefined" ||
        $("#Sc_m").val() == undefined ||
        $("#Sc_m").val() >100.00 || 
        $("#Sc_m").val()<0.00
    ) 
    {
      alert("Please enter valid marks");
      $("#Sc_m").val("");
      $("#Sc_m").focus();
      return;
    }
  } 
  else 
  {
    alert("Please enter valid marks....");
    $("#Sc_m").val("");
    $("#Sc_m").focus();
    return;
  }


//Social Marks
if ($("#So_m").val().length > 0) 
{
  if (
      $("#So_m").val().trim() == "" ||
      $("#So_m").val() == "undefined" ||
      $("#So_m").val() == undefined ||
      $("#So_m").val() >100.00 || 
      $("#So_m").val()<0.00
  ) 
  {
    alert("Please enter valid marks");
    $("#So_m").val("");
    $("#So_m").focus();
    return;
  }
  console.log("Social");
} 
else 
{
  alert("Please enter valid marks....");
  $("#So_m").val("");
  $("#So_m").focus();
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
  $.post("http://localhost:8080/insert_stu_d_api",
  {
    f_name : f_name,
    l_name :l_name,
    phno : phno,
    email :email,
    r_no :r_no,
    age:age,
    pass :pass,
    m_m:m_m,
    Sc_m:Sc_m,
    So_m:So_m
  },
  function(response)
  {
    console.log(response);
    if(response.MSG=="got")
            
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
