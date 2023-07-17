import React , { useState} from "react";
import Header from "../../helpers/Header";
import "../../assets/stlyes/Classes.css";
import UploadIcon from "../../assets/images/upload.png";
import LightIcon from "../../assets/images/LightIcon.png";
import Axios from "axios";
import Subject from "./classSubjectBlock";
import constantStrings from '../../constants/constants'

function Classes() {
  function getClassData(){
    var email = sessionStorage.getItem("email")
    Axios.post(sessionStorage.getItem("connection_url") + "/getClassData" , {
      email : email
    }).then((response)=>{
      setClassData(response.data)
      setClassName(response.data[0].class_name)
      setClassYear(response.data[0].class_year)

      console.log("classData",classData);
      console.log("ClassName = ",className);
      console.log("classYear = ",classYear);
    }).catch((error)=>{
      console.log("error",error);
    })
  };
  let [classData, setClassData ] = useState();
  let [className, setClassName ] = useState();
  let [classYear, setClassYear ] = useState();


  return (
    <div className="Page-layout">
      <div className="Page-header">
        <Header />
        <div className="page-body">
          <div className="info-column">
            <div className="info-left-column col-xs-12 col-sm-6 col-md-8">
              <p className="current-page-text">
                My Classes / Pendragons /{" "}
                <span className="current-page">Overview</span>
              </p>
              <div>
                <span className="page-heading">{className}</span>
              </div>
              <div>
                <span className="page-sub-heading">
                  Summary information about performance in every subject.
                </span>
              </div>
              <div className="row-flex">
                <div className="year-bits">Year {classYear} </div>
                <span className="page-info">
                  Staff with marking permissions: Charity Wilson, Frazer Fox,
                  Dean Tomlin
                </span>
              </div>
            </div>
            <div className="info-right-column col-xs-12 col-sm-6 col-md-4">
              <div className="buttons-cloumn">
                <button className="upload-evidenece-btn">
                  <span>{constantStrings.strings.UploadEvidenceforClass}</span>
                  <img src={UploadIcon} alt="" />
                </button>
                <button onClick={getClassData} className="light-icon">
                  <img src={LightIcon} alt="Info" />
                </button>
              </div>
            </div>
          </div>

          <div className="data-column">
            <div className="pupils-section">
              <div>
                <p className="section-heading">{constantStrings.strings.Pupils}</p>
              </div>
              <div className="table-section">
                {classData&&classData.map((data, i ) => {
                  return (
                    <div className="table-section-data">
                      <button className="Actions-btn">{constantStrings.strings.Actions}</button>
                      <span className="table-text-black">{data.pupil_firstname} {data.pupil_lastname}</span>
                    </div>
                  );
                })}
                
                <div className="table-total">
                  <p className="table-total-text">{constantStrings.strings.ClassAverage}</p>
                </div>
                <div className="table-total">
                  <p className="table-total-text">{constantStrings.strings.PredictedPassRate}</p>
                </div>
              </div>
            </div>
          <Subject heading="Maths"/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;