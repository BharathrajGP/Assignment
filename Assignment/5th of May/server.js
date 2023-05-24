const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
// const abc=require("./Pages")

var result = [];
var name1 = [];
var pass1 = [];

// var name=abc.document.getElementById(`name`).value;
// var pass=abc.document.getElementById(`pass`).value;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

/** POST API **/
app.post("/post_api", (req, res) => {
  console.log("POST API");
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.password);
  let a = "select * from student_details where R_Number= '"+req.body.name+"';";

  console.log(a);
  con.query(a
    ,
    function (err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
        // console.log(result[0].first_name);
        // result.forEach(element => {
        //    name1.push(element.first_name);
        //    pass1.push(element.password)
        //    console.log(name1);
        // });
        console.log("hi");
        // res.status(200).json({ msg: result });
        console.log(result.length);
        if(result.length==0)
       {
        res.status(400).json({MSG : "Data Mismatched"})
       }
       else
       {
        console.log(req.body.password);
        let a1=req.body.password;
        // let a2="select password from student_details where R_Number= '"+req.body.name+"';"
        // console.log(a2);
        // con.query(a2,function(err,result2)
        // {
          // if(err)
          // {
          //   throw err;
          // }
          // else
          // {
            console.log("naanu");
            console.log(result[0].password);
            console.log(a1==result[0].password);
            if(a1==result[0].password)
            {
              res.status(200).json({ MSG: "received" });
            }
            else
            {
              res.status(400).json({MSG : "Data Mismatched"})
            }
        //   }
        // }
        // )
        
       }
        // let localData = JSON.parse(localStorage.getItem("data1"));
        // if(result[0].first_name == localData[0].name && result[0].password==localData[0].pass)
        // {
        //     // location.replace("http://localhost:8080/result");
        //     window.location.href("./pages/Result.html")
        // }
        // else
        // {
        //     res.status(400)
        // }
      }
    //   result1=result;
    }
  );

  // res.send({ "STATUS": 200 });
});
console.log(name1+"Hi name 1");

app.post("/result_post_api", (req, res) => {
  console.log("Result page");

  console.log(req.body);
  let z="select * from students_assg01.student_details,students_assg01.student_marks where student_details.R_Number=student_marks.R_Number and student_details.R_Number=" +
  "'" +
  req.body.name +
  "'" +
  " AND password=" +
  "'" +
  req.body.password +
  "'" +
  ";";

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

app.set("views", __dirname + "/public");
app.use(express.static(path.join(__dirname, "public")));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/login", function (req, res) {
  res.render(__dirname + "/pages/login.html");
  // var name=document.getElementById(`name`).value;
  // console.log(name);
  console.log(name1);
});

app.get("/result", function (req, res) {
  res.render(__dirname + "/pages/Result.html");
});

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

app.listen(8080, function () {
  console.log("server is running on port 8080");
});
