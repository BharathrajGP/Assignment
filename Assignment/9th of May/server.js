const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());



app.post("/result_post_api", (req, res) => {
  console.log("Result page");
  console.log(req.body);
  let z1="select * from students_assg01.student_details,students_assg01.student_marks where student_details.R_Number=student_marks.R_Number ";
  con.query(z1
    ,function ( err, result) {
      // console.log(result);

      if (err) {
        throw err;
      } else {
        // console.log(result.length);
        res.status(200).json({ MSG: result });
      }
    }
  );
});
var tid=[];



//delete api
app.post("/delete_post_api", (req, res) => {
  console.log("Deleting");
  console.log(req.body);
  let z="select R_Number from students_assg01.student_details where id='"+req.body.id+"';";
  console.log(z);
  let z1="Delete from students_assg01.student_marks where R_Number=(select R_Number from students_assg01.student_details where id='"+req.body.id+"');";
  console.log(z1);
  let z2="Delete from students_assg01.student_details where id='"+req.body.id+"';";
  console.log(z2);
  con.query(z1,function ( err, resultz1) 
  {
      if (err) 
      {
        console.log("z1");
        throw err;
      } 
      else
      {
        con.query(z2,function(errz2,resultz2)
        {
          if(errz2)
          {
            console.log("z2");
            throw errz2;
          }
          else
          {
            console.log("Deleted");
            res.status(200).json({ MSG: resultz2 });
          }
        })
        
      }
    }
  );
});

//update api
app.post("/update_post_api", (req, res) => {
  console.log("Updating");
  console.log(req.body);
  tid.push(
    {
      id:req.body.id
    });
    // sessionStorage.setItem("ssid", req.body.id);
    // let localData = JSON.parse(localStorage.getItem("ls"));
  let z="select * from students_assg01.student_details where id='"+req.body.id+"';";
  console.log(z);
  let z1="select * from students_assg01.student_marks where R_Number=(select R_Number from students_assg01.student_details where id='"+req.body.id+"');";
  console.log(z1);
  let z2="select d.R_Number,d.first_name,d.last_name,d.phno,d.email,d.age,d.password,m.maths_marks,m.science_marks,m.social_marks from students_assg01.student_details d,students_assg01.student_marks m where m.R_Number=d.R_Number and m.id='"+req.body.id+"';";
  console.log(z2);
  con.query(z2,function(err,result)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      console.log(result);
      // console.log(result.RowDataPacket.f_name);
      console.log(tid[tid.length-1].id);
      // localData.push({
      //   // id: localData[localData.length-1].id+1,
      //   // id : localData[localData.length-1],

      //   f_name: result.,
      //   name: name,
      //   email: email,
      //   phno: phno,
      // });
      // res.status(200).json({msg : "sikthu"});
      res.status(200).json({msg : result});
    }
  })
});


app.get("/update_details", function (req, res) {
    res.render(__dirname + "/pages/update.html");
  });
//update details api
app.post("/update_stu_d_api", (req, res) => {
  // console.log($("#f_nameu").val());
  console.log("POST API Updating");
  console.log(req.body);
  console.log(req.body.m_m);
  console.log(tid[tid.length-1].id);
  // let sid = localStorage.getItem(`session_id`);
  // console.log(sid+"<=====");
  let a2="update students_assg01.student_details set first_name='"+req.body.f_nameu+"',last_name='"+req.body.l_nameu+"',phno='"+req.body.phnou+"',email='"+req.body.emailu+"',age='"+req.body.ageu+"',password='"+req.body.passu+"' where id='"+tid[tid.length-1].id+"';";
  console.log(a2);

  let a11="update students_assg01.student_marks set R_Number='"+req.body.r_nou+"',maths_marks='"+req.body.m_mu+"',Science_marks='"+req.body.Sc_mu+"',Social_marks='"+req.body.So_mu+"' where R_Number=(Select R_Number from students_assg01.student_details where id='"+tid[tid.length-1].id+"');" ;
  console.log(a11);

  let a1="update students_assg01.student_marks set maths_marks='"+req.body.m_mu+"',Science_marks='"+req.body.Sc_mu+"',Social_marks='"+req.body.So_mu+"' where R_Number=(Select R_Number from students_assg01.student_details where id='"+tid[tid.length-1].id+"');" ;
  console.log(a1);

  let z1="delete from students_assg01.student_marks where R_Number=(Select R_Number from students_assg01.student_details where id='"+tid[tid.length-1].id+"');" ;
  console.log(z1);

  let z2="insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks) values('"+req.body.r_nou+"','"+req.body.m_mu+"','"+req.body.Sc_mu+"','"+req.body.So_mu+"');";
  console.log(z2);

  con.query(a1,function(err1,result1)
  {
    if(err1)
    {
      console.log("a1");
      throw err1;
    }
    else
    {
      console.log("Details updated waiting for marks to update");
      con.query(a2,function(err2,result2)
      {
        if(err2)
        {
          console.log("a2");
          throw err2;
        }
        else
        {
          console.log("Details updated");
          res.status(200).json({ MSG: "updated" })
        }
      })
    }
  })
  // con.query(z1,function(err1,result1)
  // {
  //   if(err1)
  //   {
  //     console.log("z1");
  //     throw err1;
  //   }
  //   else
  //   {
  //     console.log("Marks details deleted");
  //     con.query(a2,function(err2,result2)
  //     {
  //       if(err2)
  //       {
  //         console.log("a2");
  //         throw err2;
  //       }
  //       else
  //       {
  //         console.log("Details updated");
  //         con.query(z2,function(errz2,resultz2)
  //         {
  //           if(errz2)
  //           {
  //             throw errz2;
  //           }
  //           else
  //           {
  //             console.log("Abba mugithu");
  //             res.status(200).json({ MSG: "updated" });
  //           }
  //         })
          
  //       }
  //     })
  //   }
  // })
});








app.set("views", __dirname + "/public");
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// app.get("/login", function (req, res) {
//   res.render(__dirname + "/pages/login.html");
//   // var name=document.getElementById(`name`).value;
//   // console.log(name);
//   console.log(name1);
// });

// app.get("/result", function (req, res) {
//   res.render(__dirname + "/pages/Result.html");
// });

const con = mysql.createConnection({
  host: "localhost",
  database:"students_assg01",
  user: "root",
  password: "root",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});






app.get("/Result", function (req, res) {
  res.render(__dirname + "/pages/Result.html");
});
app.get("/Result1", function (req, res) {
  res.render(__dirname + "/pages/Result1.html");
});


/** POST API For Insert **/
app.post("/insert_stu_d_api", (req, res) => {
  console.log("POST API Inserting");
  console.log(req.body);
  console.log(req.body.m_m);
  let a1="select * from students_assg01.student_details where R_Number NOT IN ('"+(req.body.r_no)+"');";
  console.log(a1);
  let a2="select first_name from students_assg01.student_details where R_Number='"+req.body.r_no+"';";
  con.query(a2,function(err,result2)
  {
    if(err){
      throw err;
    }
    else{
      console.log(result2);
      console.log(result2.length);
      // console.log(result2.MSG.length);
      if(result2.length==0)
      {
        let a = "insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('"+req.body.f_name+"','"+req.body.l_name+"','"+req.body.phno+"','"+req.body.email+"','"+req.body.r_no+"','"+req.body.age+"','"+req.body.pass+"');";

        console.log(a);
        con.query(a,function (err, result) {
            if (err) {
              throw err;
            } 
            else {
              console.log(result);
              console.log("Hey yeah");
              let z="insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks) values('"+req.body.r_no+"','"+req.body.m_m+"','"+req.body.Sc_m+"','"+req.body.So_m+"');";

              console.log(z);
              con.query(z,function(errz,resultz)
              {
                if(errz)
                {
                  throw errz;
                }
                else
                {
                  console.log(resultz);
                  console.log("Hey yeah yeah");
                  res.status(200).json({ MSG: "got" })
                }
              })

             
            }
          }
        );
      }
      else
      {
        console.log("Inserting duplicate data");
        res.status(400).json({ MSG: "not getting" })
      }
    }
  })
  console.log(a2);
  // let a = "insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('"+req.body.f_name+"','"+req.body.l_name+"','"+req.body.phno+"','"+req.body.email+"','"+req.body.r_no+"','"+req.body.age+"','"+req.body.pass+"');";

  // console.log(a);
  // con.query(a,function (err, result) {
  //     if (err) {
  //       throw err;
  //     } else {
  //       console.log(result);
  //       console.log("Hey yeah");
  //       res.status(200).json({ MSG: result })
  //     }
  //   }
  // );

});






app.listen(8080, function () {
  console.log("server is running on port 8080");
});
