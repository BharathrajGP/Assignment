import React, { useEffect, useState } from "react";

import "../../assets/stlyes/Classes.css";

import LightIcon from "../../assets/images/LightIcon.png";
import UploadIcon from "../../assets/images/upload.png";

import LoadingSpinner from "../Shared/Loader/LoadingSpinner";

import { Common,  } from '../../helper/constants'
import { isEmptyObject } from "../../util/utils";

function ClassInfo({ className, classYear, classteacher }) {
  const [teacher, setTeacher] = useState([ {firstName : "" , lastName : ""}]);
  const [isLoading, setIsLoading] = useState(false);

  const Teacher = async () => {
    setIsLoading(true);
    if (!isEmptyObject(classteacher)) {
      setTeacher(classteacher.Items);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    Teacher();
  }, [])
  
  return (
    <div className="info-column">
      {isLoading && <LoadingSpinner />}
      <div className="info-left-column col-xs-12 col-sm-6 col-md-8">
        <p className="current-page-text">
          {Common.MyClasses} {Common.Divider} {className} {Common.Divider}
          <span className="current-page"> {Common.Overview}</span>
        </p>
        <div>
          <span className="page-heading">{className}</span>
        </div>
        <div>
          <span className="page-sub-heading">
            {Common.Summaryinfo}
          </span>
        </div>
        <div className="row-flex">
          <div className="year-bits">{Common.Year} {classYear} </div>
          <div className="page-info">
            {Common.Staffwithmarkingpermissions} 
            {teacher.map((teacher , i) =>{
              return(
                <span>{teacher.firstName} {teacher.lastName} ,</span>
              )
            })}
          </div>
        </div>
      </div>
      <div className="info-right-column col-xs-12 col-sm-6 col-md-4">
        <div className="buttons-cloumn">
          <button className="upload-evidenece-btn">
            <span>{Common.UploadEvidenceforClass}</span>
            <img src={UploadIcon} alt="" />
          </button>
          <button className="light-icon">
            <img src={LightIcon} alt="Info" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { ClassInfo }