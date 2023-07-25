import React, { useState, useEffect } from "react";

import "../../App.css";
import "../../assets/stlyes/AdminHome.css";

import Table from "react-bootstrap/Table";
import { Modal } from "react-bootstrap";
import Axios from "axios";

function AdminHome() {
  const [show, setShow] = useState(false);
  const [schoolsData, setSchoolsData] = useState([]);

  function getSchoolsData() {
    Axios.post(sessionStorage.getItem("connection_url") +"/get_schools_data", {})
      .then((response) => {
        console.log("School Data", response.data);
        setSchoolsData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function AddSchool() {
    var schoolName = document.getElementById("school-input").value;
    var email = document.getElementById("email-input").value;
    Axios.post(sessionStorage.getItem("connection_url") +"/add_school", {
      school_name: schoolName,
      school_contact_email: email,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data === "OK") {
          setShow(false);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function OpenSchoolDetails(schoolName) {
    console.log("Open", schoolName);
    sessionStorage.setItem("school_name", schoolName);
    Axios.post(sessionStorage.getItem("connection_url") +"/check_school", {
      school_name: schoolName,
    })
      .then((response) => {
        sessionStorage.getItem("school_name" ,schoolName );
        window.location = "/School-Data"
        console.log(response);
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  useEffect(() => {
    getSchoolsData();
  },[]);

  return (
    <div className="Admin-page">
      <div className="Page-layout">
        
        <div className="Page-content">
          <div className="info-column">
            <div className="info-left-column">
              <div>
                <span className="page-heading">Schools</span>
              </div>
              <div className="flex-column">
                <span className="page-sub-heading">
                  Summary info about Schools
                </span>
              </div>
              <div>
                <button className="Teacher-btn">Teachers</button>
              </div>
            </div>
            <div className="info-right-column">
              <div className="buttons-cloumn">
                <button
                  className="upload-evidenece-btn"
                  onClick={(e) => {
                    setShow(true);
                  }}
                >
                  <span>Add School</span>
                </button>
                
              </div>
            </div>
          </div>
          <div className="table-content">
            <Table hover className="School-table">
              <thead>
                <tr>
                  <th>School</th>
                  <th className="right-align">Email</th>
                </tr>
              </thead>
              <tbody>
                {console.log({schoolsData})}
                {schoolsData &&
                  schoolsData.map((data) => {
                    return (
                      <tr>
                        <td
                          className="school-display"
                          onClick={(e) => {
                            OpenSchoolDetails(data.school_name);
                          }}
                        >
                          {data.school_name}
                        </td>
                        <td className="right-align">
                          {data.school_contact_email}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={(e) => {
          setShow(false);
        }}
        className="add-school-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter School data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-school-form">
            <input
              placeholder="Enter School Name"
              className="school-input"
              id="school-input"
            ></input>
            <input
              placeholder="Enter email"
              className="email-input"
              id="email-input"
            ></input>
          </div>
          <div className="submit">
            <button className="submit-btn" onClick={AddSchool}>
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminHome;
