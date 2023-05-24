const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

let email001 = [];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.get("/login", function (req, res) {
  res.render(__dirname + "/pages/login.html");
});

/** POST API **/
//validate and insert otp
app.post("/post_api", (req, res) => {
  console.log("POST API");
  console.log(req.body);
  email001.push({
    email:req.body.name
  })
  console.log(req.body.name);
  console.log(req.body.password);
  let a = "select * from student_details where email= '" + req.body.name + "';";

  console.log(a);
  con.query(a, function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      console.log("hi");
      console.log(result.length);
      if (result.length == 0) {
        res.status(400).json({ MSG: "Data Mismatched" })
      }
      else {
        console.log(req.body.password);
        let a1 = req.body.password;
        console.log("naanu");
        console.log(result[0].password);
        console.log(a1 == result[0].password);
        if (a1 == result[0].password) {
          var otp = Math.floor(100000 + Math.random() * 900000);
          let c = "update students_assg01.student_details set otp='" + otp + "' where email='" + req.body.name + "';";
          console.log(c);
          con.query(c, function (err, result) {
            if (err) {
              throw err;
            } else {
              console.log(result);
              console.log("Updated");
              console.log(result.length);
              res.status(200).json({ MSG: "received" });
            }
          }
          );
        }
        else {
          res.status(400).json({ MSG: "Data Mismatched" })
        }
      }
    }
  }
  );
});


//Validating otp
app.get("/val_otp", function (req, res) {
  res.render(__dirname + "/pages/otp.html");
});

app.post("/val_otp_api", (req, res) => {
  console.log("POST API");
  console.log(req.body);
  console.log(req.body.otp);
  let c = "select otp from students_assg01.student_details where email='" + email001[0].email + "';";
  console.log(c);
  con.query(c, function (err, result) {
    if (err) {
      throw err;
    } else {
      console.log(result);
      console.log("Updated");
      console.log(result.length);
      res.status(200).json({ MSG: "received001" });
    }
  }
  );
});

app.post("/result_post_api", (req, res) => {
  console.log("Result page");

  console.log(req.body);

  let z1 = "select * from students_assg01.student_details,students_assg01.student_marks where student_details.R_Number=student_marks.R_Number ";
  con.query(z1, function (err, result)
   {
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

app.set("views", __dirname + "/public");
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");



app.get("/Result", function (req, res) {
  res.render(__dirname + "/pages/Result1.html");
});

const con = mysql.createConnection({
  host: "localhost",
  database: "students_assg01",
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
  let a1 = "select * from students_assg01.student_details where R_Number NOT IN ('" + (req.body.r_no) + "');";
  console.log(a1);
  let a2 = "select first_name from students_assg01.student_details where R_Number='" + req.body.r_no + "';";
  con.query(a2, function (err, result2) {
    if (err) {
      throw err;
    }
    else {
      console.log(result2);
      console.log(result2.length);
      // console.log(result2.MSG.length);
      if (result2.length == 0) {
        let a = "insert into students_assg01.student_details(first_name,last_name,phno,email,R_Number,age,password) values('" + req.body.f_name + "','" + req.body.l_name + "','" + req.body.phno + "','" + req.body.email + "','" + req.body.r_no + "','" + req.body.age + "','" + req.body.pass + "');";

        console.log(a);
        con.query(a, function (err, result) {
          if (err) {
            throw err;
          }
          else {
            console.log(result);
            console.log("Hey yeah");
            let z = "insert into students_assg01.student_marks(R_Number,maths_marks,science_marks,social_marks) values('" + req.body.r_no + "','" + req.body.m_m + "','" + req.body.Sc_m + "','" + req.body.So_m + "');";

            console.log(z);
            con.query(z, function (errz, resultz) {
              if (errz) {
                throw errz;
              }
              else {
                console.log(resultz);
                console.log("Hey yeah yeah");
                res.status(200).json({ MSG: "got" })
              }
            })
          }
        }
        );
      }
      else {
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
