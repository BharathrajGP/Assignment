import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../assets/stlyes/SchoolData.css";
import Header from "../../helpers/Header";
import Mappix from "../../assets/images/HomePageLogo.png";
import Axios from "axios";
import { useForm } from "react-hook-form";


function SchoolData() {
  const { register, handleSubmit } = useForm();
  const [schoolData, setSchoolData] = useState();

  const onSubmit = (formData) => {
    var send_data = {
      ID: schoolData.ID,
      school_id: schoolData.school_id,
      school_address1: document.getElementById("school_address1").value,
      school_address2: document.getElementById("school_address2").value,
      school_city: document.getElementById("school_city").value,
      school_contact_email: document.getElementById("school_contact_email").value,
      school_contact_firstname: document.getElementById("school_contact_firstname").value,
      school_contact_lastname: document.getElementById("school_contact_lastname").value,
      school_contact_phone: document.getElementById("school_contact_phone").value,
      school_contact_title: document.getElementById("school_contact_title").value,
      school_country: document.getElementById("school_country").value,
      school_name: document.getElementById("school_name").value,
      school_postcode: document.getElementById("school_postcode").value,
    }
    console.log(send_data);
    Axios.post(sessionStorage.getItem("connection_url") + "/update_school", { school_data: send_data }).then((response) => {
      console.log(response)
    })
      .catch((error) => {
        console.log(error);
      });
  }
  function get_school() {
    const school_name = sessionStorage.getItem("school_name");
    console.log(school_name);
    Axios.post(sessionStorage.getItem("connection_url") + "/get_school", { school_name: school_name })
      .then((response) => {
        console.log("response", response.data);
        setSchoolData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function NavigateToSchools() {
    sessionStorage.setItem("school_name", "");
    window.location = "/Schools";
  }
  useEffect(() => {
    get_school();
  }, []);
  return (
    <div className="School-data-page">
      <div className="Page-layout">
        <div className="Page-header">
          <Header />
          <img src={Mappix} alt="Mappix" className="mappix-logo" />
        </div>
        <div className="Page-content">
          <div className="info-column">
            <div className="info-left-column">
              <div>
                <span className="page-heading">{schoolData && schoolData.school_name}</span>
              </div>
              <div className="flex-column">
                <span className="page-sub-heading">
                  Summary info about {schoolData && schoolData.school_name}
                </span>
              </div>
              <div>
                <button className="Teacher-btn" onClick={NavigateToSchools}>Back to Schools</button>
              </div>
            </div>

          </div>
          <div className="form-view">
            <form onSubmit={handleSubmit(onSubmit)} className="form-hook">
              <div className="card">
                <div>
                  <div className="card-heading">
                    <span >School Details</span>
                  </div>
                  <div className="inputs">
                    <span className="formLabel">School Name</span>
                    <input className="school-inputs" id="school_name" {...register("school_name")} defaultValue={schoolData && schoolData.school_name} />
                    <span className="formLabel">City</span>
                    <input className="school-inputs" id="school_city" {...register("school_city")} defaultValue={schoolData && schoolData.school_city} />
                    <span className="formLabel">Country</span>
                    <input className="school-inputs" id="school_country" {...register("school_country")} defaultValue={schoolData && schoolData.school_country} />
                    <span className="formLabel">Address Line 1</span>
                    <input className="school-inputs" id="school_address1" {...register("school_address1")} defaultValue={schoolData && schoolData.school_address1} />
                    <span className="formLabel">Address Line 2</span>
                    <input className="school-inputs" id="school_address2" {...register("school_address2")} defaultValue={schoolData && schoolData.school_address2} />
                    <span className="formLabel">Postcode</span>
                    <input className="school-inputs" id="school_postcode" {...register("school_postcode")} defaultValue={schoolData && schoolData.school_postcode} />
                  </div>
                </div>
                <div>
                  <div className="card-heading">
                    <span >Contact Details</span>
                  </div>
                  <div className="inputs">
                    <span className="formLabel">Title</span>
                    <input className="school-inputs" id="school_contact_title" {...register("school_contact_title")} defaultValue={schoolData && schoolData.school_contact_title} />
                    <span className="formLabel">First Name</span>
                    <input className="school-inputs" id="school_contact_firstname" {...register("school_contact_firstname")} defaultValue={schoolData && schoolData.school_contact_firstname} />
                    <span className="formLabel">Last Name</span>
                    <input className="school-inputs" id="school_contact_lastname" {...register("school_contact_lastname")} defaultValue={schoolData && schoolData.school_contact_lastname} />
                    <span className="formLabel">Email</span>
                    <input className="school-inputs" id="school_contact_email" {...register("school_contact_email")} defaultValue={schoolData && schoolData.school_contact_email} />
                    <span className="formLabel">Phone</span>
                    <input className="school-inputs" id="school_contact_phone" {...register("school_contact_phone")} defaultValue={schoolData && schoolData.school_contact_phone} />
                  </div>
                  <div className="submit-buttons">
                    <input type="submit" className="submit-btn" />
                    <input className="submit-btn" value="Disable" />
                  </div>

                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolData;
